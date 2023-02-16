import { config } from './wdio.conf'
var _= require('lodash')

var property =
{
    user: 'visharathi_NJUmnx',
  key: 'm1K4tas2Vshqrkhh92zp',

  capabilities: [
    {
        
            browserName: 'Chrome',
            'bstack:options': {
              os: 'Windows',
              osVersion: '11',
              browserVersion: '109.0'
            },
            commonCapabilities: {
                'bstack:options': {
                  buildName: 'browserstack-build-1'
                }
              },
    maxInstances: 5,
    
   
},
],

services: 
    [['browserstack', {
       // browserstackLocal: true
    }]],

  }

exports.config= _.defaultsDeep(property,config)