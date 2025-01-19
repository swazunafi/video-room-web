"use client"

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import ToolBoxReducer from '@redux/features/toolBoxSlice';


const rootReducer = combineReducers({
    toolBoxReducer: ToolBoxReducer
})

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);