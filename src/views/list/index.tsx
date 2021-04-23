import React from 'react'
import {Link} from 'react-router-dom'
import * as C from './styles'
import {
    Users
} from './interfaces'
import {
    DeleteOutline,
    Edit
} from '@material-ui/icons'
import {
    IconButton, 
    Button
} from '@material-ui/core'

const mock: Array<Users> = [
    {
        id: 1,
        nome: 'Aldivio',
        email: 'aldiviof89@hotmail.com',
        idade: 32
    },
    {
        id: 2,
        nome: 'Thais Nascimento',
        email: 'thais@hotmail.com',
        idade: 32
    },
    {
        id: 3,
        nome: 'Luciene',
        email: 'luciene@hotmail.com',
        idade: 33
    },
]
export default () => {
    return (
        <>
        <C.Header>
            <h1 style ={{marginRight:20}}>listagem de usuários:</h1>
            <Link to='/create' style ={{textDecoration:'none'}}>
            <Button color = 'primary' variant="contained"
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
            {
                mock.map(user => (
                    <C.Row key = {user.id}>
                        <C.ContInfoUser
                            style={{ flex: 0.2 }}
                        >
                            <h4>{user.id}</h4>
                        </C.ContInfoUser>
                        <C.ContInfoUser>
                            <h4>{user.nome}</h4>
                        </C.ContInfoUser>
                        <C.ContInfoUser
                            style={{
                                justifyContent: 'flex-start',
                            }}
                        >
                            <h4>{user.email}</h4>
                        </C.ContInfoUser>
                        <C.ContInfoUser
                            style={{ flex: 0.5 }}
                        >
                            <h4>{user.idade}</h4>
                        </C.ContInfoUser>
                        <C.ContInfoUser>
                            <C.ContButtons>
                                <IconButton >
                                    <Edit color='primary' />
                                </IconButton>
                                <IconButton>
                                    <DeleteOutline
                                        color='secondary'
                                    />
                                </IconButton>
                            </C.ContButtons>
                        </C.ContInfoUser>
                    </C.Row>
                ))
            }
        </>
    )
}