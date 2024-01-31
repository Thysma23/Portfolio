/** 
    Copyright (C) 2024 Mathys Meunier

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

import { useState, useEffect } from 'react';
import defaultProject from "@/data/defaultProjects.json";
import overrideProject from "@/data/overrideProjects.json";
import { RepositoryInterface } from '@/interface/RepositoryInterface';

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

const repo_json_to_object = (json: RepoJson): RepositoryInterface => {
    const overp = overrideProject.find((p) => p.name === json.name) || null;
    return overp ? {
        ...json, ...overp, last_update:
            new Date(("last_update" in overp && typeof overp.last_update === "string")
                ? overp.last_update : json.last_update)
    } :
        ({ ...json, last_update: new Date(json.last_update) })
};

export default function useRepos() {
    const [repos, setRepos] = useState<RepositoryInterface[]>(defaultProject.map(repo_json_to_object));

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
