
import { createSlice } from '@reduxjs/toolkit';

export const healthCheckSlice = createSlice({
    name: 'healthCheck',
    initialState: {},
    reducers: {
        setHealthCheck: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setHealthCheck } = healthCheckSlice.actions;
export default healthCheckSlice.reducer;