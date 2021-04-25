import createUserInterface from "../interfaces/createUserInterface";
import UserService from '../services/user.service'
import {ipcRenderer} from 'electron'

export default class UserController {
    private userService
    constructor (){
        this.userService = new UserService()
    }
    async create(data: createUserInterface){
        ipcRenderer.invoke('create-user',data)
       // await this.userService.createUser(data)
    }
}