import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'

function Home() {
    const [input, setInput] = useState('')
    const [results, setResults] = useState(null)

    const onSearch = () => {
        apiGet(`/search/shows?q=${input}`).then(result => setResults(result))
    }

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>
        }

        if (results && results.length > 0) {
            return (
                <div>
                    {results.map(el => <div key={el.show.id}>{el.show.name}</div>)}
                </div>
            )
        }

        return null;
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
            <button type="button" onClick={onSearch}>Search</button>
            {renderResults()}
        </MainPageLayout>
    )
}

export default Home
