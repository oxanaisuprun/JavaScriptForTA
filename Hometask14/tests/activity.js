module.exports ={
    "first element is disabled": function(browser){
        browser.url("http://the-internet.herokuapp.com/dropdown");
        // browser.pause(2000);
        browser.assert.attributeEquals("#dropdown > option:nth-child(1)", "disabled", "true");
        browser.end();
    },
    "second element is active": function(browser){
        browser.url("http://the-internet.herokuapp.com/dropdown");
        browser.assert.not.attributeEquals("#dropdown > option:nth-child(2)", "disabled", "true");
        browser.end();
    }
}