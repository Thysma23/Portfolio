import { useState, useEffect } from 'react';
import defaultProject from "../data/defaultProjects.json";

export type Repo = {
    name: string,
    description: string,
    url?: string, // Si le repo n'a pas d'url, alors il est considéré comme Projet Universitaire
    language: string,
    last_update: Date
};

type RepoJson = {
    name: string,
    description: string,
    url?: string,
    language: string,
    last_update: string
};
type RepoJsons = RepoJson[];

const repo_json_to_object = (json: RepoJson): Repo => ({ ...json, last_update: new Date(json.last_update) })

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
