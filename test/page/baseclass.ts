  class base {
    public async openURL(param)
    {
        await browser.url(`https://www.spotify.com/${param}`)
       
    
    }
}
export default new base();