export default new class Utility {

    async clickElement(element)
    {
        element.scrollIntoView()
await element.waitForDisplayed({ timeout: 15000})
await element.click()

    }
    async setElementValue(element,value)
    {
        element.scrollIntoView()
await element.waitForDisplayed({ timeout: 15000})
await element.isEnabled()
await element.clearValue()
await element.setValue(value)
    }
    async getElementValue(element)
    {
await element.waitForDisplayed()
 return await element.getValue()
    }
    async getElementAttribute(element,attribute)
    {
await element.waitForDisplayed()
 return await element.getAttribute(attribute)
    }

    async getPageTitle()
    {
return browser.getTitle()
    }
    async isElementDisplayed(element)
    {
        element.scrollIntoView()
return await element.isDisplayed()
    }
    async ScrollForElement(element)
    {
element.scrollIntoView({behavior:"smooth"})
    }


}
