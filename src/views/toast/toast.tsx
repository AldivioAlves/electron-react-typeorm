import React, {useEffect} from 'react'
import {useToasts } from 'react-toast-notifications';
import {ipcRenderer} from 'electron'

interface Props{
    children: JSX.Element
}

const Toast: React.FC<Props> = ({ children }) => {
    const {addToast} = useToasts()
    useEffect(()=>{
        ipcRenderer.on('show-toast',(event, data)=>{
           addToast(data.message, {
               appearance: data.appearance, 
               autoDismiss: true, 
               autoDismissTimeout: 2000
           }) 
        })
    },[])
    return (
        <div>
            {children}
        </div>
    )
}
export default Toast

