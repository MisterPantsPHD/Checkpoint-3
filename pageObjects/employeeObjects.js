var employeeCommands ={
        employeeRun: function(data){
            this
            .navigate()
            .waitForElementVisible('@employeeList')
            .setValue('@employeeSearch' , 'New Employee')
            .click('@addEmployee')
            .pause(1000)
            .click('@firstEmployee')
            .pause(1000)
            .clearValue('@editorName')
            .setValue('@editorName' , data.nam)
            .clearValue('@editorPhone')
            .setValue('@editorPhone' , data.num)
            .clearValue('@editorEmail')
            .setValue('@editorEmail' , data.mail)
            .clearValue('@editorTitle')
            .setValue('@editorTitle' , data.title)
            .click('@editorSave')
            .click('@clearSearch')
            .assert.containsText('@employeeList' , data.nam)
            .setValue('@employeeSearch' , data.nam)
            .click('@firstEmployee')
            .clearValue('@editorName')
            .setValue('@editorName' , data.new)
            .click('@editorCancel')
            .assert.containsText('@employeeList' , data.nam)
            .clearValue('@editorName')
            .setValue('@editorName' , data.new)
            .click('@editorSave')
            .click('@clearSearch')
            .assert.containsText('@employeeList' , data.new)
            .click('@editorDelete')
            .pause(500)
            .api.acceptAlert()
            this
            .assert.not.containsText('@employeeList' , data.new)
            return this
        }

}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeCommands],
    elements: {
        employeeList: 'ul.listContainer',
        firstEmployee: {
            selector: '(//li[@class="listText"])[2]',
            locateStrategy: 'xpath'
        },
        employeeSearch: 'input[name="searchBox"]',
        clearSearch: 'button[name="clearSearch"]',
        addEmployee: 'li[name="addEmployee"]',
        editorSave: 'button#saveBtn',
        editorCancel: 'button[name="cancel"]',
        editorDelete: 'button[name="delete"]',
        editorID: 'span#employeeID',
        editorName: 'input[name="nameEntry"]',
        editorPhone: 'input[name="phoneEntry"]',
        editorEmail: 'input[name="emailEntry"]',
        editorTitle: 'input[name="titleEntry"]',







    }

}