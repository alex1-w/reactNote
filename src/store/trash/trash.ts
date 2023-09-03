import { INote } from './../../types/Note.interface';
import { createSlice } from "@reduxjs/toolkit";

const initialState: INote[] = [{
    text: 'TextArea is a controlled component. This means that the visible text will always match the contents of the value prop.In this example, notice how value is stored within this.state. The onChange function will set the new value when the user enters or removes a character in the textarea.',
    title: 'controlled',
    color: "yellow",
    id: 3,
    createdAt: '2002-06-25',
    tags: [{ name: 'учеба' }, { name: 'JOB' }]
},]

export const trashSlice = createSlice({
    name: 'trash',
    initialState,
    reducers: {
        addToTrash: (state, { payload: note }) => {
            state.push(note)
        }
    }
})

export const { actions: trashActions, reducer } = trashSlice