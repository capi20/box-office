import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
    {to:'/', text:'Home'},
    {to:'/starred', text:'Starred'}
]

function Navs() {
    return (
        <div>
            <ul>
                {
                    LINKS.map((el, i) => <li key={i}><Link to={el.to}>{el.text}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Navs