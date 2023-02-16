import utilObj from '../../utility/utility.js'


 class login {
public get email()
{
    return $('#login-username')
} 
public get pwd()
{
    return $('#login-password')
}
public get forgotPwd()
{
    return $('#reset-password-link')
}
public get rememberMe()
{
    return $('p=Remember me')
}
public get loginButton()
{
    return $("//span[text()='Log In']")
}
public get webplayerButton()
{
    return $("button[data-testid='web-player-link']")
}
public get acceptCookies()
{
    return $("//button[text()='Accept Cookies']")
}
public async signin(username, password)
{
    await browser.url("")
  //  await browser.url("https://accounts.spotify.com/en/login")
    await utilObj.setElementValue(this.email,username)
    await utilObj.setElementValue(this.pwd,password)
  //  await utilObj.ScrollForElement(this.loginButton)
    await utilObj.clickElement(this.loginButton)
    await utilObj.clickElement(this.webplayerButton)
   // await utilObj.clickElement(this.acceptCookies)

}
public async openURL()
{
    await browser.url("https://accounts.spotify.com/en/login")
}
public async pageTitle()
{
    return await utilObj.getPageTitle()
}
public async checkEmailDisplayed()
{
    return await utilObj.isElementDisplayed(this.email)
}
}
//export default login

export default new login()