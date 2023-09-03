import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reducer as NotesReducer } from './notes/notes'
import { reducer as trashReducer } from './trash/trash'

const rootReducer = combineReducers({
    notes: NotesReducer,
    trash: trashReducer
})

export const Store = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof Store>
export type AppDispatch = AppStore['dispatch']