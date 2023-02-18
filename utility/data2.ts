import JsonData from "./JsonData.json" assert { type: 'json' };
import * as dotenv from 'dotenv'
dotenv.config()
 class data2{
    getEnv()
    {
        return process.env.ENV

    }
    getURL()
    {
       return JsonData.urls[this.getEnv()]
       
    }
    getUsername()
    {
        let username
JsonData.Users.filter(async user =>{
    if((user.env).includes(this.getEnv()))
    {
        username = user.username
      //  password = user.password;
       
    }
})
return username

    }
    getPassword()
    {
        let password
JsonData.Users.filter(async user =>{
    if((user.env).includes(this.getEnv()))
    {
        password = user.password
      
       
    }
})
return password

    }
}
export default new data2()