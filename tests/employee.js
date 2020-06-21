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