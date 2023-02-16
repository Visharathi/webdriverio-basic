import utilObj from '../../utility/utility.js'
import base from "./baseclass.js"
class signup {
    public get email()
    {
        return $("input[name='email']")
    }
    public get confirmemail()
    {
        return $("input[name='confirm']")
    }
    public get pwd()
    {
        return $("input[name='password']")
    }
    public get displayName()
    {
        return $("input[name='displayname']")
    }
    public get day()
    {
        return $("input[name='day']")
    }
    public get month()
    {
        return $("select[name='month']")
    }
    public get year()
    {
        return $("input[name='year']")
    }
    public get gender()
    {
        return $$("div[data-encore-id='formRadio']")
    }
    public get acceptCookies()
{
    return $("//button[text()='Accept Cookies']")
}
    public async signup()
    {
await base.openURL("uk/signup");
//await utilObj.clickElement(this.acceptCookies);
await utilObj.setElementValue(this.email,"ccc@delta.com");
await utilObj.setElementValue(this.confirmemail,"ccc@delta.com");
await utilObj.setElementValue(this.pwd,"Vish@2021");
await utilObj.setElementValue(this.day,"23");
await (this.month).selectByVisibleText("May");
//const genders = await $$("div[data-encore-id='formRadio']")
(await this.gender).filter(async el =>{
    if(await el.getText() ==="Female")
    {
        await el.click()
       
    };
})
return utilObj.getElementValue(this.day)
    }
}
export default new  signup ()

