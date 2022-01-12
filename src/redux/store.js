import { configureStore } from '@reduxjs/toolkit';
import { codingNinjaApi } from '../services/codingNinjaApi';



export default configureStore({
    reducer: {
        [codingNinjaApi.reducerPath]: codingNinjaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(codingNinjaApi.middleware),
})