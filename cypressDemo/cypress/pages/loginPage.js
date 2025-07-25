import helpers from "./helpers";
class loginPage{
    usernameLocator ="input#username";
    passwordLocator = "input#password";
    loginButton = "button[type='submit']";


    loginUrl(){
            cy.visit('/login');
    };

    loginAction(userName, password){
        helpers.typeIntoField(this.usernameLocator, userName)
        helpers.typeIntoField(this.passwordLocator, password)
     cy.get(this.loginButton).should("be.visible").click();

    }
   

}
export default new loginPage();