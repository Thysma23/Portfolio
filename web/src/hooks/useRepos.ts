import { useState, useEffect } from 'react';
import defaultProject from "../data/defaultProjects.json";
import overrideProject from "../data/overrideProjects.json";

export type Repo = {
    name: string,
    description: string,
    url?: string,
    language: string,
    owner?: {
        login: string,
        url: string,
        avatar: string
    },
    last_update: Date,
    is_university_project?: boolean
};

type RepoJson = {
    name: string,
    description: string,
    url?: string,
    language: string,
    owner?: {
        login: string,
        url: string,
        avatar: string
    }
    last_update: string
};
type RepoJsons = RepoJson[];

const repo_json_to_object = (json: RepoJson): Repo => {
    const overp = overrideProject.find((p) => p.name === json.name) || null;
    return overp ? {
        ...json, ...overp, last_update:
            new Date(("last_update" in overp && typeof overp.last_update === "string")
                ? overp.last_update : json.last_update)
    } :
        ({ ...json, last_update: new Date(json.last_update) })
};

export default function useRepos() {
    const [repos, setRepos] = useState<Repo[]>(defaultProject.map(repo_json_to_object));

    useEffect(() => {
        fetch('http://localhost:8080/', {
            mode: "cors",
        }).then((response) => {
            console.log(response);
            response.json().then((datas: RepoJsons) => {
                setRepos(datas.map(repo_json_to_object).concat(defaultProject.map(repo_json_to_object)));
            });
        });
    }, []);

    return repos;
};  
