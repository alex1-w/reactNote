import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INote, INoteForm } from '../../types/Note.interface';
import { initialNotes } from './notes.data';

const initialState: { notes: INote[] } = {
  notes: initialNotes,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addToNotes: (state, { payload: note }: PayloadAction<INoteForm>) => {
      if (state.notes.some((noteItem) => noteItem.title === note.title)) {
        return alert(`заметка c заголовком " ${note.title} " уже есть`);
      }
      state.notes.push({ ...note, id: Date.now() });
    },
    editNote: (state, { payload: note }: PayloadAction<INote>) => {
      // console.log(state.notes);
      state.notes = state.notes.map((noteItem) => {
        if (noteItem.id === note.id) {
          return note;
        } else {
          return noteItem;
        }
      });
      console.log(state.notes);

      // return state
    },
    deleteNote: (state, { payload: id }) => {
      state.notes = state.notes.filter((n) => n.id !== id);
    },
    recoverFromTrash: (state, payload) => { },
  },
});

export const { actions, reducer } = notesSlice;
