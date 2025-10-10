import request from "supertest";
import { app } from "./app.mjs";
import { AppInfo } from "../lib/appInfo.mjs";
import { jest } from '@jest/globals'

beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
        json: async () => ({
            properties: {
                sensors: [
                    {
                        title: "Temperatur",
                        lastMeasurement: {
                            value: "22",
                            createdAt: new Date().toISOString()
                        }
                    }
                ]
            }
        })
    })
})



describe("Hivebox API", () => {
    test("GET / should return: Welcome to Hivebox", async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual('Welcome to Hivebox.')
    })
    test(`GET /version should return ${AppInfo.version}`, async () => {
        const res = await request(app).get('/version')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual(AppInfo.version)
    })
    test('Get /temperature should return an valid temperature', async () => {
        const res = await request(app).get('/temperature')

        expect(res.statusCode).toBe(200)
        expect(typeof res.text).toBe("string")
    })
})