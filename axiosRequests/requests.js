const { default: Axios } = require("axios");

axios({
    method: 'post',
    url: 'https://peaceful-inlet-88854.herokuapp.com/api/employees',
    data:{
        id: "765",
        name: "Susan Furrabrusin",
        phone: "4206980085",
        email: "sfbrusin@gmail.com",
        title: "HR Director"
    },
})