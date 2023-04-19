class indexPage{
    constructor(){
        this.buttonLogin= '.shop-menu > .nav > :nth-child(4) > a';
        this.textUsername= '[data-qa="login-email"]';
        this.textPassword= '[data-qa="login-password"]';
        this.buttonJoinLogin= '[data-qa="login-button"]';
        this.buttonLogout= '.active > :nth-child(1) > h1 > span';
    }
    entryLogin=() =>{
        cy.get(this.buttonLogin).click();
    }
    putUsername=(element) =>{
        cy.get(this.textUsername).type(element);
    }
    putPassword=(element) =>{
        cy.get(this.textPassword).type(element);
    }
    clicLogin=() =>{
        cy.get(this.buttonJoinLogin).click();
    }
    verifyLogout=() =>{
        cy.get(this.buttonLogout).should('be.visible');
    }
}
export default new indexPage();