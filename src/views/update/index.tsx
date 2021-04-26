import React, { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'
import * as C from '../create/styles'
import { ipcRenderer } from 'electron'
import {
    TextField,
    Button
} from '@material-ui/core'
import { User } from '../list/interfaces'

export default () => {
    const { id }: any = useParams()
    console.log("valor de id", id)
    const [nome, setNome] = useState<String>('')
    const [idade, setIdade] = useState<String>('')
    const [senha, setSenha] = useState<String>('')
    const [email, setEmail] = useState<String>('')

    const handleUpdateUser = () => {
        if (!nome || !idade || !senha || !email) {
            console.log("ahh entao tu ta querendo bugar o bang ")
            return
        }
        ipcRenderer.send('update-user', {
            id,
            nome,
            idade,
            senha,
            email
        })
    }

    useEffect(() => {
        const user: User = ipcRenderer.sendSync('get-user', id)
        if (!!user) {
            setNome(user.nome)
            setIdade(user.idade)
            setSenha(user.senha)
            setEmail(user.email)
        }
    }, [id])
    return (
        <>
            <Link to={'/'}>
                Inicio
        </Link>
            <h1>Atualizar usuario:</h1>

            <C.Row>
                <TextField
                    value={nome}
                    variant="outlined"
                    label="Nome"
                    id="name"
                    onChange={e => setNome(e.target.value)}
                />
                <TextField
                    value={idade}
                    variant="outlined"
                    label="Idade"
                    id="idade"
                    onChange={e => setIdade(e.target.value)}
                />
            </C.Row>
            <C.Row>
                <TextField
                    value={email}
                    variant="outlined"
                    label="Email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    value={senha}
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    label="Senha"
                    id="senha"
                    onChange={e => setSenha(e.target.value)}
                />
            </C.Row>
            <C.Row
                style={{
                    justifyContent: 'flex-end',
                    marginTop: 40
                }}
            >
                <Button variant="contained" color="primary"
                    onClick={handleUpdateUser}
                >
                    Atualizar
                </Button>
            </C.Row>

        </>
    )
}