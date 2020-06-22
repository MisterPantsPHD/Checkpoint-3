// Test Plan: https://docs.google.com/document/d/1Fs3pzWFceq_mAQhzwAzqiCm2ufa7FzHkBHqNDAuJqog/edit?usp=sharing
// Project Board: https://trello.com/b/z8n7MPdD/employee-manager-v2

var eObjects = {}
let eAssets = require('../pageAssets/employeeAssets')

module.exports = {
    beforeEach: browser =>{
        eObjects = browser.page.employeeObjects()
        eObjects.navigate
    },
    after: browser =>{
        browser.end
    },
    'Add, Save, Cancel Test': browser =>{
        eAssets.forEach(test =>{
            eObjects.employeeRun(test)
            console.log(test.nam)
            console.log(test.new)
        })

    }



}