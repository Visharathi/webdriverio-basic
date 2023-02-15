import loginObj from '../page/login.js'
import { username,password } from '../../utility/data.js';
import search from '../page/search.js'
import { expect as expectChai } from 'chai'
import homeObj from '../page/homepage.js'
import signObj from '../page/signup.js'
import allureReporter from '@wdio/allure-reporter'

describe('sign up test', async() => {
 
    it('check sign up is working', async() => {
      allureReporter.addSeverity('trivial')
      allureReporter.addFeature('validate signup')
      let signupText= await signObj.signup();
      //browser.debug()
      await expectChai(signupText).to.equal("23");
     
     
     })
    })