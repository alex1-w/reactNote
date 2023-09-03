import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from './notes/notes'
import { trashActions } from './trash/trash'


const rootActions = {
    ...actions,
    ...trashActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}