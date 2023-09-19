import { INote } from './../../types/Note.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {initialState} from './initialState'

export const trashSlice = createSlice({
  name: 'trash',
  initialState,
  reducers: {
    addToTrash: (state, { payload: note }: PayloadAction<INote>) => {
      state.push(note);
    },
    deleteFromTrash: (state, { payload: id }) => {
      return state.filter(note => note.id !== id)
    },
    cleanTrash: (state) => {
      state.length = 0
    },
  },
});

export const { actions: trashActions, reducer } = trashSlice;
