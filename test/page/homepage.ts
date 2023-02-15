import utilObj from '../../utility/utility.js'

 class homepage {
    public get upgrade()
{
    return $("button[title='Upgrade to Premium']")
} 
public get button()
{
    return $("span[data-encore-id='type']")
}
public get User()
{
    return $("img[alt='Visha Rathi']")
}

public async checkupgradeDisplayed()
{
    return await utilObj.isElementDisplayed(this.upgrade)
}
public async checkUserDisplayed()
{
    return await utilObj.isElementDisplayed(this.User)
}
public async getUserAttribute()
{
    return await utilObj.getElementAttribute(this.User,'loading')
}
public async clickUpgrade(){
await (await this.upgrade).click()
}
 }
 export default new homepage()