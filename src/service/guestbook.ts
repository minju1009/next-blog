import { readFile } from "fs/promises";
import path from "path";

export type Guestbook = {
    id:number
    content: string;
    color:string;
    date:Date;
}

export async function getAllGuestBooks():Promise<Guestbook[]>{
    const filePath = path.join(process.cwd(), 'data', 'guestbooks.json');
    return readFile(filePath, 'utf-8')
    .then<Guestbook[]>(JSON.parse)
    .then(guestbooks => guestbooks.sort((a,b) => (a.date > b.date? -1 : 1)))
}