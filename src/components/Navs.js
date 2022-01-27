import React from 'react'
import { useLocation } from 'react-router-dom'
import { LinkStyled, NavList } from './Navs.styled'

const LINKS = [
    {to:'/', text:'Home'},
    {to:'/starred', text:'Starred'}
]

function Navs() {
    const location = useLocation()
    return (
        <div>
            <NavList>
                {
                    LINKS.map((el, i) => (
                        <li key={i}>
                            <LinkStyled 
                                to={el.to} 
                                className={el.to === location.pathname ? 'active' : ''}>
                                    {el.text}
                            </LinkStyled>
                        </li>
                    ))
                }
            </NavList>
        </div>
    )
}

export default Navs