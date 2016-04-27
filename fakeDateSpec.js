describe('Test date mocking', function() {
    beforeEach(function() {
        browser.addMockModule('myApp', function () {
            var oldDate = Date;Date = function(){return new oldDate(2016,3,1)};
        })
    });
    it('should show the fake date', function() {
        browser.get('http://localhost:8080/');

        expect($('div').getText()).toEqual('2016-04-01');
    });
});