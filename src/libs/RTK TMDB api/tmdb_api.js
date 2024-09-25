import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tmdbApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        getNowPlayingMovies: builder.query({
            query: () => ({
                url: `movie/now_playing?language=en-US&page=1`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getOnAirTVseries: builder.query({
            query: () => ({
                url: `tv/on_the_air?language=en-US&page=1`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getTopRatedMovies: builder.query({
            query: () => ({
                url: `movie/top_rated?language=en-US&page=1`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getTopRatedTVseries: builder.query({
            query: () => ({
                url: `tv/top_rated?language=en-US&page=1`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getAllMovies: builder.query({
            query: (page) => ({
                url: `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getAllSeries: builder.query({
            query: (page) => ({
                url: `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getAllPopulars: builder.query({
            query: (param) => ({
                url: `person/popular?language=en-US&page=${param}`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getMovieDetails: builder.query({
            query: (id) => ({
                url: `movie/${id}?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getMovieCrew: builder.query({
            query: (id) => ({
                url: `movie/${id}/credits?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getMovieImages: builder.query({
            query: (id) => ({
                url: `movie/${id}/images`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getMovieRecommendations: builder.query({
            query: (id) => ({
                url: `movie/${id}/recommendations?language=en-US&page=1`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getMovieVideos: builder.query({
            query: (id) => ({
                url: `movie/${id}/videos?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getSeriesDetails: builder.query({
            query: (id) => ({
                url: `tv/${id}?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getSeriesCrew: builder.query({
            query: (id) => ({
                url: `tv/${id}/credits?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getSeriesImages: builder.query({
            query: (id) => ({
                url: `tv/${id}/images`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getSeriesRecommendations: builder.query({
            query: (id) => ({
                url: `tv/${id}/recommendations?language=en-US&page=1`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getSeriesVideo: builder.query({
            query: (id) => ({
                url: `tv/${id}/videos?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getPersonDetails: builder.query({
            query: (id) => ({
                url: `person/${id}?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getPersonMovies: builder.query({
            query: (id) => ({
                url: `person/${id}/movie_credits?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
        getPersonSeries: builder.query({
            query: (id) => ({
                url: `person/${id}/tv_credits?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDdkOTJjNDQ2NGY3ZDBkNzA0NzQzNzI2YWYwMjIwOSIsIm5iZiI6MTcyNjQyOTk2NS41NDM1NjYsInN1YiI6IjY2ZTVjYzM1ZTgyMTFlY2QyMmIwMmRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKzkpo9kYQ43thKPkri0KM2UMzBJc-FI0aS_05RYYLw'
                }

            }),

        }),
    }),
})


export const { useGetNowPlayingMoviesQuery,
    useGetOnAirTVseriesQuery,
    useGetTopRatedMoviesQuery,
    useGetTopRatedTVseriesQuery,
    useGetAllMoviesQuery,
    useGetAllSeriesQuery,
    useGetAllPopularsQuery,
    useGetMovieDetailsQuery,
    useGetMovieCrewQuery,
    useGetMovieImagesQuery,
    useGetMovieRecommendationsQuery,
    useGetSeriesDetailsQuery,
    useGetSeriesCrewQuery,
    useGetSeriesImagesQuery,
    useGetSeriesRecommendationsQuery,
    useGetMovieVideosQuery,
    useGetSeriesVideoQuery,
    useGetPersonDetailsQuery,
    useGetPersonMoviesQuery,
    useGetPersonSeriesQuery } = tmdbApi;