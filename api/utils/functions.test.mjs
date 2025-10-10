import { fetchAndNormalize, filterRecentData, generateMeanTemperature, normalizeSenseBoxData } from "./functions.mjs"
import { jest } from '@jest/globals'

global.fetch = jest.fn();

describe("normalizeSenseBoxData", () => {
    it("should return only temperature sensors", () => {
        const data = {
            properties: {
                sensors: [
                    { title: "Temperatur", id: 1 },
                    { title: "Humidity", id: 2 }
                ]
            }
        }
        const result = normalizeSenseBoxData(data);
        expect(result).toEqual([{ title: "Temperatur", id: 1 }])
    })
    it("should be undefined if no sensors found", () => {
        expect(normalizeSenseBoxData({})).toBeUndefined();
    })
})

describe("filterRecentData", () => {
    it("should return data if measurement is newer than <1h", () => {
        const now = new Date().toISOString()
        const data = [{ lastMeasurement: { createdAt: now } }];
        const result = filterRecentData(data)
        expect(result).toEqual(data);
    })
    it("should return null if the measurement is older than 1h", () => {
        const old = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
        const data = [{ lastMeasurement: { createdAt: old } }]
        const result = filterRecentData(data)
        expect(result).toBeNull();
    })
})

describe("generateMeanTemperature", () => {
    it("Should calculate the correct mean", () => {
        const data = [
            [{ lastMeasurement: { value: "10" } }],
            [{ lastMeasurement: { value: "20" } }],
            [{ lastMeasurement: { value: "30" } }]
        ]
        const result = generateMeanTemperature(data)
        expect(result).toBe(20)
    })
})

describe("fetchAndNormalize", () => {
    it("should fetch, normalize and return the mean temperature", async () => {
        global.fetch.mockResolvedValue({
            json: async () => ({
                properties: {
                    sensors: [
                        {
                            title: "Temperatur",
                            lastMeasurement: {
                                value: "25",
                                createdAt: new Date().toISOString()
                            }
                        }
                    ]
                }
            })
        })

        const result = await fetchAndNormalize()
        expect(result).toBe(25)
    })
})
