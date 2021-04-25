import {createConnection} from 'typeorm';
import options from '../config/database'
import {User} from '../entity/user.entity'
import createUserInterface from '../interfaces/createUserInterface'


// createConnection().then(async connection => {
//     const posts = await connection.getRepository("Post").find();
//     console.log("posts:", posts);
// });

export default class UserService {

    async createUser(data:createUserInterface ){
        let user = new User()
        user.nome = data.nome
        user.idade = data.idade
        user.email = data.email 
        user.senha = data.senha
        try{
            createConnection(options).then(async(con)=>{
               await con.getRepository("User").save(user)
            }) 
        }catch(e){
            console.log("erro ao salvar o user!!", e)
        }
    }
}