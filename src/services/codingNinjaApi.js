import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = "https://api.codingninjas.com/api/v3";

export const codingNinjaApi = createApi({
    reducerPath: 'codingNinjaApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getEventTags: builder.query({
            query: () => ("/event_tags")
        }),
        getEvents: builder.query({
            query: ({ coinId, timeperiod }) => `events/${coinId}/history/${timeperiod}`,
        }),
    })
})

export const { useGetEventTagsQuery, useGetEventsQuery} = codingNinjaApi;