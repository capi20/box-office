import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

function Home() {
    const [input, setInput] = useState('')

    const onSearch = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(result => result.json())
            .then(data => console.log(data))
    }
    
    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
            <button type="button" onClick={onSearch}>Search</button>
        </MainPageLayout>
    )
}

export default Home
