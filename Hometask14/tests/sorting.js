module.exports ={
    "sort out": function(browser){
        browser.url("http://the-internet.herokuapp.com/tables");
        
        browser.useXpath();
        browser.click("//*[@id='table2']/thead/tr/th[4]/span");
        browser.pause(5000);
        
        browser.assert.containsText('//table[@id="table2"]//tbody//tr[1]//td[@class="dues"]', "$50.00");
        browser.assert.containsText('//table[@id="table2"]//tbody//tr[2]//td[@class="dues"]', "$50.00");
        browser.assert.containsText('//table[@id="table2"]//tbody//tr[3]//td[@class="dues"]', "$51.00");
        browser.assert.containsText('//table[@id="table2"]//tbody//tr[4]//td[@class="dues"]', "$100.00");

        browser.end();
    }
}