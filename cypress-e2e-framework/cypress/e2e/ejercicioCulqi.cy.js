import indexPage from '../support/pages/index';

describe('Test para Culqi', function(){
    beforeEach(function(){
        cy.visit('https://www.automationexercise.com/');
    })

    it('Login Correcto',function(){
        
        indexPage.entryLogin();
        indexPage.putUsername('enilser.munoz.soto@gmail.com');
        indexPage.putPassword('Teamo111');
        indexPage.clicLogin();
        indexPage.verifyLogout();
    })

    it('Login Incorrecto',function(){
        
        indexPage.entryLogin();
        indexPage.putUsername('enilser.munoz.soto@gmail.com');
        indexPage.putPassword('Teamo11');
        indexPage.clicLogin();
        indexPage.verifyLogout();
    })
    
})