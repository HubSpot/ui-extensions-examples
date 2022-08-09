export interface InternalCard {
    objectId: number;
    title: string;
    firstname: string;
}

export interface ExternalCard {
    objectId: number;
    link: string;
    title: string;
    quote: string;
    author: string;
}

export interface StaticCard {
    objectId: number;
    title: string;
    desc: string;
}

export interface ServerlessResponse {
    results: Array<StaticCard | InternalCard | ExternalCard>;
    primaryAction: {
        type: string;
        serverlessFunction: string;
        label: string;
    }
}

export interface ServerlessAction {
    context: any;
    sendResponse: (response: ServerlessResponse) => void;
}
