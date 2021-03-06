export class GameInfo {
    order: number;
    title: string;
    type: string;
    date: string;
    team: { ecole: string, membres: string[] }[];
    shortDesc: { style: string, team: string };
    pitch: string[];
    context: string[];
    work: string[];
    return: string[];
    download: {
        link: string,
        text: string
    };
    git: {
        icon: string,
        url: string,
        text: string
    };
    itchio: string;
    youtube: string;
    website: { icon: string, text: string, url: string };
    img: {
        imgCard: {
            src: string
            alt: string
        },
        list: {
            src: string,
            miniature: string,
            alt: string
        }[]
    }
}