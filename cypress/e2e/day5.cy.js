import helper from '../e2e/pages/helper'
describe('custom Commands', ()=>{

    // it('Visits a webpage with valid credentials', () => {
    //     cy.visit("https://practice.expandtesting.com/login");
    //     cy.get('#username').fillInput("#username", "practice");
    //     cy.get('#password').fillInput("input#password", "SuperSecretPassword!");
    //     cy.log("Logged in Successfully");

     
        
    // })
    it('concept of intercept', ()=>{
        cy.intercept('GET','/notes/api/swagger.json').as('notesAPI');
        cy.visit("https://practice.expandtesting.com/");
       // cy.intercept('GET','/notes/api/swagger.json').as('notesAPI');



        cy.get('a[href="/notes/api/api-docs/"]').eq(0).click();
        cy.wait('@notesAPI').then((res)=>{
            cy.log(res.response.statusCode)
        });


    })


});
