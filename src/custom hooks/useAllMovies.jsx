import { useGetAllMoviesQuery } from "../libs/RTK TMDB api/tmdb_api";

export default function useAllMovies(parm) {

    
    return (useGetAllMoviesQuery(parm, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseAllMovies: data?.results,
            isLoadingAllMovies: isLoading,
            isFetchingAllMovies: isFetching,
            isSuccessAllMovies: isSuccess,
            isErrorAllMovies: isError,
            errorAllMovies: error
        })
    }))
}
