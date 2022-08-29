import React, { useEffect } from 'react'
import useFetchAPI from './useFetchAPI'

export default function FetchAPIData() {
    const [data, loading, fetchData] = useFetchAPI('https://v2.jokeapi.dev/joke/Any')
    if(loading) return <h1>Loading .....</h1>
    return (
        <div>
            <h1>
            {data?.setup} : {data?.delivery}
        </h1>
        <button onClick={fetchData}>Refresh Joke</button>
        </div>
    )
}
