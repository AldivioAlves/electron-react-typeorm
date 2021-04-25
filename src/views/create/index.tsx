import React, { useState } from 'react'
import * as C from './styles'
import {
    TextField, 
    Button
} from '@material-ui/core'
import UserController from '../../controllers/user'

export default () => {
    const [nome, setNome] = useState<any>('Aldivio Alves Lisboa')
    const [idade, setIdade] = useState<any>(32)
    const [senha, setSenha] = useState<any>('123456')
    const [email, setEmail] = useState<any>('aldivio89@hotmail.com')

    const handleSaveUser = ()=>{
        const user = new UserController()
        user.create({
            nome, 
            idade, 
            senha,
            email
        })
    }
    return (
        <>
            <h1>Cadastro de Usuarios:</h1>

            <C.Row>
                <TextField
                    value = {nome}
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
                    value= {email}
                    variant="outlined"
                    label="Email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    value= {senha}
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
                onClick = {handleSaveUser}
                >
                    Salvar
                </Button>
            </C.Row>

        </>
    )
}