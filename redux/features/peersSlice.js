
import { createSlice } from '@reduxjs/toolkit';

export const peersSlice = createSlice({
    name: 'peersSlice',
    initialState: {},
    reducers: {
        setPeer: (state, action) => {
            return { ...state, ...action.payload };
        },
        getSelfPeer: (state) => {
            const selfPeer = Object.values(state).find(peer => peer.self);
            console.log(selfPeer);
            return { ...selfPeer };
        },
        removePeer: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearPeers: () => {
            return {};
        }
    }
});

export const { setPeer, removePeer, clearPeers } = peersSlice.actions;
export default peersSlice.reducer;