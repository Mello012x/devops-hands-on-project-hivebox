[![Dynamic DevOps Roadmap](https://img.shields.io/badge/Dynamic_DevOps_Roadmap-559e11?style=for-the-badge&logo=Vercel&logoColor=white)](https://devopsroadmap.io/getting-started/)
[![Community](https://img.shields.io/badge/Join_Community-%23FF6719?style=for-the-badge&logo=substack&logoColor=white)](https://newsletter.devopsroadmap.io/subscribe)
[![Telegram Group](https://img.shields.io/badge/Telegram_Group-%232ca5e0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/DevOpsHive/985)
[![Fork on GitHub](https://img.shields.io/badge/Fork_On_GitHub-%2336465D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevOpsHiveHQ/devops-hands-on-project-hivebox/fork)

# HiveBox - DevOps End-to-End Hands-On Project

<p align="center">
  <a href="https://devopsroadmap.io/projects/hivebox" style="display: block; padding: .5em 0; text-align: center;">
    <img alt="HiveBox - DevOps End-to-End Hands-On Project" border="0" width="90%" src="https://devopsroadmap.io/img/projects/hivebox-devops-end-to-end-project.png" />
  </a>
</p>

> [!CAUTION]
> **[Fork](https://github.com/DevOpsHiveHQ/devops-hands-on-project-hivebox/fork)** this repo, and create PRs in your fork, **NOT** in this repo!

> [!TIP]
> If you are looking for the full roadmap, including this project, go back to the [getting started](https://devopsroadmap.io/getting-started) page.

This repository is the starting point for [HiveBox](https://devopsroadmap.io/projects/hivebox/), the end-to-end hands-on project.

You can fork this repository and start implementing the [HiveBox](https://devopsroadmap.io/projects/hivebox/) project. HiveBox project follows the same Dynamic MVP-style mindset used in the [roadmap](https://devopsroadmap.io/).

The project aims to cover the whole Software Development Life Cycle (SDLC). That means each phase will cover all aspects of DevOps, such as planning, coding, containers, testing, continuous integration, continuous delivery, infrastructure, etc.

Happy DevOpsing ♾️

## Before you start

Here is a pre-start checklist:

- ⭐ <a target="_blank" href="https://github.com/DevOpsHiveHQ/dynamic-devops-roadmap">Star the **roadmap** repo</a> on GitHub for better visibility.
- ✉️ <a target="_blank" href="https://newsletter.devopsroadmap.io/subscribe">Join the community</a> for the project community activities, which include mentorship, job posting, online meetings, workshops, career tips and tricks, and more.
- 🌐 <a target="_blank" href="https://t.me/DevOpsHive/985">Join the Telegram group</a> for interactive communication.

## Preparation

- [Create GitHub account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) (if you don't have one), then [fork this repository](https://github.com/DevOpsHiveHQ/devops-hands-on-project-hivebox/fork) and start from there.
- [Create GitHub project board](https://docs.github.com/en/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project) for this repository (use `Kanban` template).
- Each phase should be presented as a pull request against the `main` branch. Don’t push directly to the main branch!
- Document as you go. Always assume that someone else will read your project at any phase.
- You can get senseBox IDs by checking the [openSenseMap](https://opensensemap.org/) website. Use 3 senseBox IDs close to each other (you can use the following [5eba5fbad46fb8001b799786](https://opensensemap.org/explore/5eba5fbad46fb8001b799786), [5c21ff8f919bf8001adf2488](https://opensensemap.org/explore/5c21ff8f919bf8001adf2488), and [5ade1acf223bd80019a1011c](https://opensensemap.org/explore/5ade1acf223bd80019a1011c)). Just copy the IDs, you will need them in the next steps.

<br/>
<p align="center">
  <a href="https://devopsroadmap.io/projects/hivebox/" imageanchor="1">
    <img src="https://img.shields.io/badge/Get_Started_Now-559e11?style=for-the-badge&logo=Vercel&logoColor=white" />
  </a><br/>
</p>

---

## Implementation

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/Mello012x/devops-hands-on-project-hivebox/dev?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Mello012x/devops-hands-on-project-hivebox?style=for-the-badge)

### Tecnologies:
- Node.js 22 + ESM.
- Express.js
- Jest + Supertest
- Docker


### Pre-requisites

- NodeJS >= 22.20.0

- npm >= 10.9.3

If you want a easy way to manage javascript toolchain:

- <a href="https://volta.sh" target="_blank">volta.sh </a> >= 2.0.2

---

### Installing

```bash
git clone https://github.com/Mello012x/devops-hands-on-project-hivebox.git
cd devops-hands-on-project-hivebox
npm install
```

---

### Running

#### Locally with node:
Inside project folder:
```sh
npm run dev
```


#### Locally with Docker:
```sh
docker build -t hivebox:0.0.2-dev --target dev .

#bind mount the 
docker run --name hivebox-dev -v $(PWD):/app -d -p 3000:3000 hivebox:0.0.2-dev
```

---

### Endpoints

### GET /
Welcome Text.
```markdown
Welcome to Hivebox.
```

#### GET /version
Return the api version in plain text.
```markdown
0.0.2
```

#### GET /temperature
Return the average temperature from 3 OpensenseMap Stations within the last hour: 5eba5fbad46fb8001b799786, 5c21ff8f919bf8001adf2488, 5ade1acf223bd80019a1011c.
```json
{
  "meanTemperature": 16.56
}
```

---

### Structure

```
├─ src/
│ ├─ api/
│  ├─ routes/
│  └─ utils/
│ └─ lib/
├─ .dockerigore
├─ .gitignore
├─ .package.json
├─ .package.lock.json
├─ .jest.conf.js
├─ Dockerfile
├─ README.md
```

