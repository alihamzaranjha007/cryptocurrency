import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '6137adde53mshedf9852aec16262p17a33ejsn059b4df89f3b'            
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const creatRequest = (url) => ({url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> creatRequest(`/?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6137adde53mshedf9852aec16262p17a33ejsn059b4df89f3b',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };
