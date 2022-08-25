import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isPlayer: false,
    isOwner: false,
    otherSideOnline: false,
    playerIndex: -1,
}


export const onlineSlice = createSlice({
    name: 'online',
    initialState,
    reducers: {
        updatePlayer(state, {payload}) {
            state.isPlayer = payload;
        },
        updateOwner(state, {payload}) {
            state.isOwner = payload;
        },
        updateOnline(state, {payload}) {
            state.otherSideOnline = payload;
        },
        updateIndex(state, {payload}) {
            state.playerIndex = payload;
        },

    },
})

export const {
    updatePlayer,
    updateOwner,
    updateOnline,
    updateIndex
} = onlineSlice.actions

export default onlineSlice.reducer
