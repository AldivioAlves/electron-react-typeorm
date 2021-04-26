import { IpcMain } from 'electron'
import { Connection } from 'typeorm'
import { User } from '../entity/user.entity'
//@ts-ignore
const ipcMain: IpcMain = global.Object.global.ipcMain
//@ts-ignore
const con: Connection = global.Object.global.con
//appearance	Used by the default toast. One of success, error, warning, info.

ipcMain.on('create-user', (event, data) => {
    con.getRepository(User).save(data)
        .then(() => {
            event.reply('show-toast', {
                message:'Usuário cadastrado com sucesso!', 
                appearance: 'success'
            })
            event.returnValue = true
        })
        .catch((err: any) => {
            event.reply('show-toast', {
                message:'Ocorreu um erro ao cadastrar o usuário.', 
                appearance: 'error'
            })
            event.returnValue= false
        })

})

ipcMain.on('list-users', async (event) => {
    let users: User[] = []
    try {
        users = await con.getRepository(User).find()
        if(!users.length){
            event.reply('show-toast', {
                message:'Não tem usuários cadastrados', 
                appearance: 'warning'
            })
        }
    } catch (e) {
        console.log("error ", e)
    }
    event.reply('reply-list-users', users)
})

ipcMain.on('delete-user', async (event, id) => {
    try {
        const user = await con.getRepository(User).findOne(id)
        await user.remove()
        event.returnValue = true
        event.reply('show-toast', {
            message:'Usuário removido com sucesso', 
            appearance: 'success'
        })
    } catch (e) {
        event.reply('show-toast', {
            message:'Ocorreu um erro ao deletar o usuário!', 
            appearance: 'error'
        })
        event.returnValue = false
    }
})

ipcMain.on('get-user', async (event, id) => {
    try {
        const user = await con.getRepository(User).findOne(id)
        event.returnValue = user
    } catch (e) {
        event.returnValue = false
        console.log('erro no get-user', e)
    }
})

ipcMain.on('update-user', async (event, data:User) => {
    try {
        const user = await con.getRepository(User).findOne(data.id)
        user.nome = data.nome
        user.email = data.email
        user.senha = data.senha
        user.idade = data.idade
        await user.save()
        event.reply('show-toast', {
            message:'Usuário atualizado com sucesso!', 
            appearance: 'success'
        })
    } catch (e) {
        console.log("error ao atualizar o user ", e)
    }
})

