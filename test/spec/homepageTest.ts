import loginObj from '../page/login.js'
import { username,password } from '../../utility/data.js';
import search from '../page/search.js'
import { expect as expectChai } from 'chai'
import homeObj from '../page/homepage.js'
import allureReporter from '@wdio/allure-reporter'
describe('homepage test', async() => {
 
    xit('check upgrade button is displayed', async() => {
      allureReporter.addSeverity('critical')
      allureReporter.addFeature('validate multiple window')
       await loginObj.signin(username, password)
       let parent = await browser.getWindowHandle()
       console.log('the parent window is',parent);
       await browser.newWindow("https://visualstudio.microsoft.com/downloads/")
       await  (await $("//button[text()='Accept']")).click()
       await  (await $("//a[text()='Free Visual Studio']")).click()
       let windows=await browser.getWindowHandles()
       await browser.switchToWindow(parent)
       await homeObj.clickUpgrade()
       //await  browser.debug()
      expectChai(await homeObj.checkupgradeDisplayed()).to.be.true;
     // await  browser.debug()
     
     })
     xit('check User button is displayed', async() => {
      allureReporter.addSeverity('trivial')
      allureReporter.addFeature('validate multiple window')
        expectChai(await homeObj.checkUserDisplayed()).to.be.true;
         
       })
       xit('verify element attribute', async() => {
         allureReporter.addSeverity('trivial')
         allureReporter.addFeature('validate multiple window')
         let text  = await homeObj.getUserAttribute()
         expectChai(text).to.equal("eager")
          
        })
 
 
    
 })