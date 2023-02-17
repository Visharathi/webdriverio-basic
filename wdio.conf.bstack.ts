import  wdioConf  from './wdio.conf.js'
import _ from 'lodash'
export const config = _.defaultsDeep({
  capabilities: [
    {
        
      browserName: 'Chrome',
      'bstack:options': {
        os: 'Windows',
        osVersion: '11',
        browserVersion: '109.0'
      },
      
      maxInstances: 10,
},
{
  browserName: 'Chrome',
  'bstack:options': {
    os: 'Windows',
    osVersion: '8',
    browserVersion: '109.0'
  },
  maxInstances: 10
},

  ],

  // run tests on sauce instead locally
  /*user: 'visharathi_NJUmnx',
  key: 'm1K4tas2Vshqrkhh92zp',*/
  user : process.env.browser_user ,
  key : process.env.browser_pwd ,
  services: ['browserstack']
},wdioConf )

