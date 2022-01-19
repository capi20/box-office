import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'

function Home() {
    const [input, setInput] = useState('')
    const [results, setResults] = useState(null)
    const [searchOption, setSearchOption] = useState('shows')

    const isShowsSearch = searchOption === 'shows' 

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => setResults(result))
    }

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            onSearch()
        }
    }

    const onRadioChange = e => {
        setSearchOption(e.target.value)
    }

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>
        }

        if (results && results.length > 0) {
            return results[0].show
                ? results.map(el => <div key={el.show.id}>{el.show.name}</div>)
                : results.map(el => <div key={el.person.id}>{el.person.name}</div>) 
        }

        return null;
    }

    return (
        <MainPageLayout>
            <input type="text" 
                placeholder="Search for something"
                onChange={onInputChange} 
                onKeyDown={onKeyDown} 
                value={input}/>

            <div>
                <label htmlFor="shows-search">
                    Shows
                    <input 
                        id="shows-search" 
                        type="radio" 
                        value="shows" 
                        checked={isShowsSearch}
                        onChange={onRadioChange}/>
                </label>
                <label htmlFor="actors-search">
                    Actors
                    <input 
                        id="actors-search" 
                        type="radio" 
                        value="people"
                        checked={!isShowsSearch}
                        onChange={onRadioChange}/>
                </label>
            </div>

            <button 
                type="button" 
                onClick={onSearch}>Search</button>

            {renderResults()}
        </MainPageLayout>
    )
}

export default Home
