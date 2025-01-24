"use client"

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import PeersReducer from '@redux/features/peersSlice';
import HealthCheckReducer from '@redux/features/healthCheckSlice';

const rootReducer = combineReducers({
    peersReducer: PeersReducer,
    healthCheckReducer: HealthCheckReducer
})

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['peersReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);