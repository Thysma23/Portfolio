import express from "express";
import { Octokit } from "octokit";
import * as fs from "fs";

const app = express();

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

const updateRepos = () => {
  setInterval(async () => {
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
    }))

    fs.writeFile("./repos.json", JSON.stringify(repos), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File updated");
    });
  }, 1_800_000) // 30 minutes
}


updateRepos();
