import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tmdbApi } from './RTK TMDB api/tmdb_api'
import { imgCoverSliceReducer } from './ImgCoverSlice/ImgCoverSlice'

export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        imgCover : imgCoverSliceReducer
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
})


setupListeners(store.dispatch)