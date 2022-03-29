const clist = require("clist-node"); // import the installed package

clist()
    .then((res) => {
        // If the function successfully retrieves the data, it enters this block
        console.log(res); // Print the contest data on the console
    })
    .catch((err) => {
        console.log(err); // Error handler
    });