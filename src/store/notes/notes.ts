import { createSlice } from "@reduxjs/toolkit";
import { INote } from "../../types/Note.interface";

const initialState: INote[] = [
    {
        text: 'молоко, чай, хбеб',
        title: 'продукты',
        color: "blue",
        id: 1,
        createdAt: "2017-01-26",
        tags: [{ name: 'job' }]
    },
    {
        text: 'дщкуь*уауцсоспукцтршасргш руцагширывм гос силфорывшщйцрпагнуцр шд',
        title: 'занятие',
        color: "green",
        id: 2,
        createdAt: '2022-11-20',
        tags: [{ name: 'учеба' }, { name: 'JOB' }]
    },
    {
        text: 'TextArea is a controlled component. This means that the visible text will always match the contents of the value prop.In this example, notice how value is stored within this.state. The onChange function will set the new value when the user enters or removes a character in the textarea.',
        title: 'controlled',
        color: "yellow",
        id: 3,
        createdAt: '2002-06-25',
        tags: [{ name: 'учеба' }, { name: 'JOB' }]
    },
    {
        text: 'дщкуь*уауцсоспукцтршасргш руцагширывм гос силфорывшщйцрпагнуцр шд',
        title: 'means ',
        color: "green",
        id: 4,
        createdAt: '2022-11-20',
        tags: [{ name: 'учеба' }, { name: 'JOB' }]
    },
    {
        text: 'дщкуь*уауцсоспукцтршасргш руцагширывм гос силфорывшщйцрпагнуцр шд',
        title: 'will',
        color: "blue",
        id: 5,
        createdAt: '2022-11-20',
        tags: [{ name: 'учеба' }, { name: 'JOB' }]
    },
    {
        text: 'дщкуь*уауцсоспукцтршасргш руцагширывм гос силфорывшщйцрпагнуцр шд',
        title: 'character',
        color: "yellow",
        id: 6,
        createdAt: '2022-11-20',
        tags: [{ name: 'учеба' }, { name: 'продукты' },{ name: 'салон' }, { name: 'JOB' }]
    },

]

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addToNotes: (state, { payload: note }) => {
            if (state.some(n => n.title === note.title)) {
                return alert(`заметк c заголовком " ${note.title} " уже есть`);
            } else {
                state.push(note)
            }
        },
        deleteNote: (state, { payload: id }) => {
            state = state.filter(n => n.id !== id)
            return state
        },

    },
})

export const { actions, reducer } = notesSlice