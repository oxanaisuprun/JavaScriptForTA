module.exports ={
    "populate form": function(browser){
        browser.url("http://formy-project.herokuapp.com/form");
        browser.pause(2000);
        browser.end();
    }
}