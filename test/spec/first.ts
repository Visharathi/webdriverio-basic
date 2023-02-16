import { username } from '../../utility/data.js';
import data2 from '../../utility/data2.js'
import fetch from 'node-fetch';
import allureReporter from '@wdio/allure-reporter'

describe('my first suite', async() => {
    xit('first test', async() => {
        await browser.url("https://www.linkedin.com/")
        await browser.scroll(0, 200)
      const button = await $('button*=Sign')
      
      // await button.click()
      let attribute = await button.getAttribute('data-tracking-control-name')
      console.log(attribute);
      
       await browser.debug()
    });
    it('second test', async() => {
      allureReporter.addSeverity('trivial')
      allureReporter.addFeature('validate signup')
        await browser.url("https://www.spotify.com/uk/signup")
      //  await (await $("//button[text()='Accept Cookies']")).click()
        await browser.scroll(0, 500)
      const month = await $('#month')
      const options = await month.$$('option')
      await month.selectByAttribute("value","04")
     expect(await (await $("option[value='04']")).isSelected()).toBe(true)
    //  console.log('the option length is',options.length);
      //expect(options.length).toBe(13)
      
      
 
      
      
      
    })
    xit('third test', async() => {
        await browser.url("https://www.spotify.com/uk/signup")
        console.log(await browser.getWindowRect());
        await browser.setWindowRect(40,40,2000,800)
        await browser.debug()
      
    })
    xit('fourth test', async() => {
        await browser.url("https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert");
        await (await $('#accept-choices')).click()
        const iframe = await $('#iframeResult')
       await browser.switchToFrame(iframe)
        await (await $("//button[text()='Try it']")).click()
       console.log('the alert is',await browser.getAlertText());
       await browser.acceptAlert()
        await browser.debug()
})
xit('fifthe test', async() => {
  await browser.url("");
  
  await browser.debug()
})
xit('sixth test', async() => {
  await browser.url("");
   //await data2.getCredentials();
 // console.log("the urls are",await data2.getCredentials())
 const username = await data2.getUsername()
 const password = await data2.getPassword()
  //console.log('the credentials are',await credentials)
 /* const username = await credentials.filter(obj => {
    return obj.username
  })*/

  console.log('the username is',  username)
  console.log('the password is',  password)
})

it('seventh test', async() => {
  allureReporter.addSeverity('blocker')
  allureReporter.addFeature('validate login')
  await browser.url('https://accounts.spotify.com/en/login')
  //await $("//button[text()='ACCEPT ALL']")
  const anchors = await $$('a')
  await anchors.forEach((async anchor =>{
    await anchor.getAttribute('href').then(async(anchor)=>{
      await fetch(anchor).then(async(response)=>{
        await  expect(await response.status).toBeLessThan(500)
      })
    })
}))
 // const response =await fetch('https://www.boohoo.com/')
 // console.log('the status is', response.status);
  
})
xit('eight test', async() => {
  await browser.url("https://accounts.google.com/signin")
  await (await $("div[role='combobox']")).click()
  await browser.pause(3000)
  //const fulldropdown= await $("div[data-menu-uid='ucj-1']")
  /*while(!await(await $("li[data-value='ga']")).isDisplayedInViewport()){
await browser.execute(()=>{
var el = document.querySelector("div[data-menu-uid='ucj-1']")
el.scrollTop = el.scrollTop+100
})
  }*/
  //const language = await $("li[data-value='ga']")
  async function scroll(language){
  await browser.execute((language)=>{
    document.querySelector(`${language}`).scrollIntoView()
    
    },language)}
    scroll("li[data-value='ga']")
    await  browser.pause(13000)
await browser.debug

})
})