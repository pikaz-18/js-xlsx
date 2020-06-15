/*
 * @Author: zouzheng
 * @Date: 2020-06-15 10:57:21
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-15 11:03:27
 * @Description: 这是XXX组件（页面）
 */ 
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './xlsx.js',
  output: {
    filename: 'pikaz-xlsx-style.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  node :{ fs: 'empty' }
};