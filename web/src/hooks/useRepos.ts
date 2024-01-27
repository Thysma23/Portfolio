import { useState, useEffect } from 'react';

type Repo = {
    name: string,
    description: string,
    url: string,
    language: string,
    last_update: Date
};

type FetchReponse = {
    name: string,
    description: string,
    url: string,
    language: string,
    last_update: string
}[];
export default function useRepos() {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/', {
            mode: "cors",
        }).then((response) => {
            console.log(response);
            response.json().then((datas: FetchReponse) => {
                setRepos(datas.map((data) => ({ ...data, last_update: new Date(data.last_update) })));
            });
        });
    }, []);

    return repos;
};  