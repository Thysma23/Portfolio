/** 
    Copyright (C) 2023 Mathys Meunier

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You can receive a copy of the GNU General Public License
    along with this program at "http://mathysmeunier/license".
*/

import express from "express";
import { Octokit } from "octokit";
import * as fs from "fs";
import cors from "cors";
import ReadLine from "readline";
const app = express();

app.use(cors());
const oldConsoleLog = console.log;
console.log = (...data) => oldConsoleLog(new Date().toLocaleString(), ...data);

// This API is only usefull for getting my github repos and give them to the front, I will add more features later
app.get("/", (req, res) => {
  fs.readFile("./repos.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error while reading file");
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const update = async () => {
  console.log("Updating repos");
  const datas = await octokit.request('GET /user/repos', {
    visibility: 'public',
    sort: 'updated',
    per_page: 50,
  });
  if (datas.status !== 200) {
    console.error("Error while fetching repos");
    return;
  }
  const repos = datas.data.map((repo) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    language: repo.language,
    last_update: repo.updated_at,
    owner: {
      login: repo.owner.login,
      url: repo.owner.html_url,
      avatar: repo.owner.avatar_url,
    }
  }))

  fs.writeFile("./repos.json", JSON.stringify(repos), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File updated");
  });
}

const updateInterval = () => {
  setInterval(update, 1_800_000) // 30 minutes
}

const readline = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const commands = () => {
  readline.question("", async (com) => {
    switch (com) {
      case "update":
        await update();
        break;
      case "help":
        console.log("Commands: update, help");
        break;
      case "exit":
        process.exit(0);
      default:
        console.log("Unknown command");
        break;
    }
    commands();
  })
}

commands();
update()
updateInterval();
