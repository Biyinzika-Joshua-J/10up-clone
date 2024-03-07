interface Button {
    text: string;
    link : string;
}

export interface MapInfo {
    name: string;
    buttons:Button[];
    info: string[];
    url: string;
}