import React, { useEffect, useState } from 'react'
import { ipcRenderer } from 'electron'
import { Link } from 'react-router-dom'
import * as C from './styles'
import {
    User
} from './interfaces'
import {
    DeleteOutline,
    Edit
} from '@material-ui/icons'
import {
    IconButton,
    Button
} from '@material-ui/core'

export default () => {
    const [users, setUsers] = useState<User[] | []>([])

    const deleteUser = (id: number) => {

        const result = ipcRenderer.sendSync('delete-user', id)

        if (result) {
            setUsers(
                users.filter((user: User) => user.id != id)
            )
        }
    }

    useEffect(() => {
        ipcRenderer.send('list-users', 'list-users')
        ipcRenderer.on('reply-list-users', (event, data) => {
            setUsers(data)
        })
    }, [])

    return (
        <>
            <C.Header>
                <h1 style={{ marginRight: 20 }}>listagem de usuários:</h1>
                <Link to='/create' style={{ textDecoration: 'none' }}>
                    <Button color='primary' variant="contained"
                    >
                        Adicionar
            </Button>
                </Link>
            </C.Header>

            <C.Row>
                <C.ContInfoUser
                    style={{ flex: 0.2 }}
                >
                    <h2>Id</h2>
                </C.ContInfoUser>
                <C.ContInfoUser>
                    <h2>Nome</h2>
                </C.ContInfoUser>
                <C.ContInfoUser>
                    <h2>Email</h2>
                </C.ContInfoUser>
                <C.ContInfoUser
                    style={{ flex: 0.5 }}
                >
                    <h2>Idade</h2>
                </C.ContInfoUser>
                <C.ContInfoUser>
                    <h2>Ações</h2>
                </C.ContInfoUser>
            </C.Row>
            <div>
            {
                users.map((user: User) => (
                    <C.Row key={user.id}>
                        <C.ContInfoUser
                            style={{ flex: 0.2 }}
                        >
                            <p>{user.id}</p>
                        </C.ContInfoUser>
                        <C.ContInfoUser>
                            <p>{user.nome}</p>
                        </C.ContInfoUser>
                        <C.ContInfoUser
                            style={{
                                justifyContent: 'flex-start',
                            }}
                        >
                            <p>{user.email}</p>
                        </C.ContInfoUser>
                        <C.ContInfoUser
                            style={{ flex: 0.5 }}
                        >
                            <p>{user.idade}</p>
                        </C.ContInfoUser>
                        <C.ContInfoUser>
                            <C.ContButtons>
                                <Link
                                    to={`/update/${user.id}`}
                                >
                                    <IconButton >
                                        <Edit color='primary' />
                                    </IconButton>
                                </Link>
                                <IconButton
                                    onClick={() => { deleteUser(user.id) }}
                                >
                                    <DeleteOutline
                                        color='secondary'
                                    />
                                </IconButton>
                            </C.ContButtons>
                        </C.ContInfoUser>
                    </C.Row>
                ))
            }
        </div>
        </>
    )
}