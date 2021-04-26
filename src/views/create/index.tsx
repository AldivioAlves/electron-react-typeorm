import React, { useEffect, useState } from 'react'
import {
    TextField,
    Button
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { ipcRenderer } from 'electron'
import * as C from './styles'

export default () => {
    const [nome, setNome] = useState<String >('')
    const [idade, setIdade] = useState<String >('')
    const [senha, setSenha] = useState<String >('')
    const [email, setEmail] = useState<String >('')

    const handleSaveUser = () => {
        if(!nome || !idade || !senha || !email){
            console.log("oppa cade todos os dados??? ")
            return
        }
       const result =  ipcRenderer.sendSync('create-user', {
            nome,
            idade,
            senha,
            email
        })
        if(result){
            setNome('')
            setIdade('')
            setEmail('')
            setSenha('')
        }
    }
    return (
        <>
        <Link to = {'/'}>
            Inicio
        </Link>
            <h1>Cadastro de Usuarios:</h1>

            <C.Row>
                <TextField
                    value={nome}
                    variant="outlined"
                    label="Nome"
                    id="name"
                    onChange={e => setNome(e.target.value)}
                />
                <TextField
                    value= {idade}
                    variant="outlined"
                    label="Idade"
                    id="idade"
                    onChange={e => setIdade(e.target.value)}
                />
            </C.Row>
            <C.Row>
                <TextField
                    value ={email}
                    variant="outlined"
                    label="Email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    value = {senha}
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
                    onClick={handleSaveUser}
                >
                    Salvar
                </Button>
            </C.Row>

        </>
    )
}