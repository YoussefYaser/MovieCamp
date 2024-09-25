import { useGetAllSeriesQuery } from "../libs/RTK TMDB api/tmdb_api";

export default function useAllSeries(parm) {
    return (useGetAllSeriesQuery(parm, {
        selectFromResult: ({ data, isLoading, isFetching, isSuccess, isError, error }) => ({
            responseAllseries: data?.results,
            isLoadingAllseries: isLoading,
            isFetchingAllseries: isFetching,
            isSuccessAllseries: isSuccess,
            isErrorAllseries: isError,
            errorAllseries: error
        })
    }))
}
