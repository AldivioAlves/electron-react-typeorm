import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Create from './create'
import Update from './update'
import List from './list'

const Routes = ()=>(
    <HashRouter>
        <Route exact path = '/' component = {List} />
        <Route exact path = '/create' component = {Create} />
        <Route exact path = '/update' component = {Update} />
    </HashRouter>
)
export default Routes