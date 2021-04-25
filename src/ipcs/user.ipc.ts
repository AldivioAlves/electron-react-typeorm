import {IpcMain} from 'electron'
import {Connection} from 'typeorm'
//@ts-ignore
const ipcMain: IpcMain= global.Object.global.ipcMain
//@ts-ignore
const con: Connection = global.Object.global.con

console.log('valor de con ', con)

ipcMain.handle('create-user', (event, data) => {
    con.getRepository('User').save(data)
        .then(() => {
            console.log('salvo!! ')
        })
        .catch((err: any) => {
            console.log("error ", err)
        })

})

