import loginObj from '../page/login.js'
import { username,password } from '../../utility/data.js';
import search from '../page/search.js'
import { expect as expectChai } from 'chai'
import homeObj from '../page/homepage.js'
import allureReporter from '@wdio/allure-reporter'
import data2 from '../../utility/data2.js'
describe('homepage test', async() => {
 
    it('check upgrade button is displayed', async() => {
      allureReporter.addSeverity('critical')
      allureReporter.addFeature('validate multiple window')
      const username = await data2.getUsername()
      const password = await data2.getPassword()
       await loginObj.signin(username, password)
       let parent = await browser.getWindowHandle()
       //console.log('the parent window is',parent);
      // await browser.newWindow("https://visualstudio.microsoft.com/downloads/")
       //console.log('the title is',await browser.getTitle())
   //   const button=   await $("//button[text()='Reject']")
   //   await button.click()
      // await  (await $("//a[text()='Free Visual Studio']")).click()
       
     //  await  (await $("//button[text()='Accept Cookies']")).click()
      
       await homeObj.clickUpgrade()
       await  browser.pause(3000)
     //  let windows=await browser.getWindowHandles()
       await browser.switchToWindow(parent)
       await browser.pause(3000)
       
      // await  browser.debug()
      expectChai(await homeObj.checkupgradeDisplayed()).to.be.true;
     // await  browser.debug()
     
     })
     it('check User button is displayed', async() => {
      allureReporter.addSeverity('trivial')
      allureReporter.addFeature('validate multiple window')
        expectChai(await homeObj.checkUserDisplayed()).to.be.true;
         
       })
       it('verify element attribute', async() => {
         allureReporter.addSeverity('trivial')
         allureReporter.addFeature('validate multiple window')
         let text  = await homeObj.getUserAttribute()
         expectChai(text).to.equal("eager")
          
        })
 
 
    
 })