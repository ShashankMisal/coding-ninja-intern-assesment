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
            query: ({ event_category, event_sub_category, tag_list, offset }) => (`/events?event_category=${event_category}&event_sub_category=${event_sub_category}&tag_list=${tag_list}&offset=${offset}`)
        }),
    })
})

export const { useGetEventTagsQuery, useGetEventsQuery} = codingNinjaApi;