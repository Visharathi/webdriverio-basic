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
      
maxInstances: 5,


},
  ],

  // run tests on sauce instead locally
  user: 'visharathi_NJUmnx',
  key: 'm1K4tas2Vshqrkhh92zp',
  services: ['browserstack']
},wdioConf )

