import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import Toast from '../views/toast/toast'
import Create from './create'
import Update from './update'
import List from './list'
const Routes = () => (
    <ToastProvider>
        <Toast>
            <HashRouter>
                <Route exact path='/' component={List} />
                <Route exact path='/create' component={Create} />
                <Route exact path='/update/:id' component={Update} />
            </HashRouter>
        </Toast>
    </ToastProvider>
)
export default Routes