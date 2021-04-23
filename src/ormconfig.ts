const options=
{
    "type":"postgres", 
    "synchronize":true,
    "username": "root", 
    "password": "123456" , 
    "host":"localhost",
    "port": 5432,
    "logging": true, 
    "logger": "simple-console", 
    "database": "crud", 
    "entities": ["src/entity/*.entity.{js,ts}"]
}
export default options