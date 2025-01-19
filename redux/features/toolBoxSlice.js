
import { createSlice } from '@reduxjs/toolkit';

export const toolBoxSlice = createSlice({
    name: 'toolBox',
    initialState: {},
    reducers: {
        setToolBox: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetSetToolBox: () => {
            return {};
        }
    }
});

export const { setToolBox, resetSetToolBox } = toolBoxSlice.actions;
export default toolBoxSlice.reducer;