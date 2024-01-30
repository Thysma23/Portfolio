export interface RepositoryInterface {
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
