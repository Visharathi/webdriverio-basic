import loginObj from '../page/login.js'
//import { username,password } from '../../utility/data.js';
import search from '../page/search.js'
import { expect as expectChai } from 'chai'
import data2 from '../../utility/data2.js'
import allureReporter from '@wdio/allure-reporter'

import base from '../page/baseclass.js';

describe('loginPage test', async() => {
   
   it('check page login', async() => {
    allureReporter.addSeverity('critical')
   allureReporter.addFeature('validate login')
      const username = await data2.getUsername()
      const password = await data2.getPassword()
      await loginObj.signin(username, password)
      
      let title = await loginObj.pageTitle()
     await console.log("the page title is",title);
     expectChai(await loginObj.pageTitle()).to.equal(title)
    
    })
    it('search page', async() => {
      allureReporter.addSeverity('trivial')
      allureReporter.addFeature('validate search')
        await search.open()
        
        
      })


   
})