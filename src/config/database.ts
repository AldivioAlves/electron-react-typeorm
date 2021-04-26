import {ConnectionOptions} from 'typeorm'
import {User} from '../entity/user.entity'

const entities = [
    User
]


const  options:ConnectionOptions ={
    "type":"postgres", 
    "synchronize":true,
    "host":"localhost",
    "port": 5432,
    "username":"postgres", 
    "password": "123456", 
    "logging": false,
    "database": "crud", 
    "entities": entities
}
export default options;
