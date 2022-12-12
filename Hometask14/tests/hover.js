module.exports ={
    "populate fields": function(browser){
        browser.url("http://formy-project.herokuapp.com/form");
        browser.pause(5000);
       
        
        browser.end();
    }
    
}