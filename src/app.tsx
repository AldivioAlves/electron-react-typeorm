import React from 'react'
import * as ReactDOM from 'react-dom'
import Routes from './views'



const render = ()=>{
    ReactDOM.render(
        <Routes/>, document.getElementById('root')
    )
}

render()