/*
 * @Author: shenpeng 
 * @Date: 2019-02-21 20:25:56 
 * @Last Modified by:   shenpeng 
 * @Last Modified time: 2019-02-21 20:25:56 
 */
// 支持es6 import
require('babel-register')({
  presets: [ 'env' ]
})
require('babel-polyfill')
require('./server.js')