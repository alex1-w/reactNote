import { ITag } from "./ITag"

export interface INote {
    title: string
    text: string
    color: string
    id: number
    createdAt: string
    tags: ITag[]
}


export type INoteForm = Omit<INote, 'id'>
