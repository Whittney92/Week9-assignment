var expect = chai.expect;

describe('MyFunction', function(){
    describe('#doSomething', function(){
        it('should concatenate the two parameters', function(){
            var x = doSomething('Hello', S);
            expect(x).to.equal('Hello5');
        });
        it('should throw an error if first parameter is not a string',function(){
          expect(function() {
            doSomething(5, 5);
          }) .to.throw(Errow); 
        });
    });
});