
import * as dotenv from 'dotenv'
dotenv.config()
describe('test env', () => {
    it('testing', () => {
       let user = process.env.browser_user 
       let pwd = process.env.browser_pwd
       browser.url('')
       console.log('username is',user);
       console.log('pwd is',pwd);
       
    });
});