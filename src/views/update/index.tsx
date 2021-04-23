import React, { useState } from 'react'
import * as C from '../create/styles'
import {
    TextField, 
    Button
} from '@material-ui/core'

export default () => {
    const [nome, setNome] = useState<String>('')
    const [idate, setIdade] = useState<String>('')
    const [senha, setSenha] = useState<String>('')
    const [email, setEmail] = useState<String>('')

    const handleUpdateUser = ()=>{
        console.log('deverá atualizar o user ')
    }
    return (
        <>
            <h1>Cadastro de Usuarios:</h1>

            <C.Row>
                <TextField
                    variant="outlined"
                    label="Nome"
                    id="name"
                    onChange={e => setNome(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    label="Idade"
                    id="idade"
                    onChange={e => setIdade(e.target.value)}
                />
            </C.Row>
            <C.Row>
                <TextField
                    variant="outlined"
                    label="Email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
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
                onClick = {handleUpdateUser}
                >
                    Atualizar
                </Button>
            </C.Row>

        </>
    )
}