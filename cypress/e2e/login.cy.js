import homePages from "./pages/homePage/homePage";

describe('login features', ()=>{

    it('Visits a webpage with valid credentials', () => {
      //  cy.visit("https://practice.expandtesting.com/login");
   //     cy.fillInput("input#username", "practice");
      //  cy.get("input#username").should("be.visible").type("practice");
     // fillInput("input#password", "SuperSecretPassword!");
        homePages.visitHome()
        cy.fillInput(homePages.userLocator, "practice")
        cy.log("Logged in Successfully");

        // function fillInput(locator ,value){

        //     cy.get(locator).type(value);
        //     cy.get("button[type='submit']").should("be.visible").click();
        // }
        
    })


});
