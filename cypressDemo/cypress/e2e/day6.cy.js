import login from "../fixtures/login.json";

describe('day 6', ()=>{
let userData;
// beforeEach('getting fixture', ()=>{
//  cy.fixture('login').then((user)=>{
//     userData = user;   
//         })


//})

    it('concept of fixture', ()=>{
        //cy.fixture('login').then((user)=>{

    //         cy.visit("https://practice.expandtesting.com/login");
    //     cy.fillInput("input#username", user.username);
    //   //  cy.get("input#username").should("be.visible").type("practice");
    //   cy.fillInput("input#password", user.password);
            // cy.log(user.username)
            // cy.log(user.password)
     //   })
 cy.log(login.Punit)
         cy.log(login.Tanuj)


    })

    it('UI checkbox', ()=>{
        cy.visit('https://practice.expandtesting.com/checkboxes');
        cy.get('.form-check-label').eq(0).prev().check().should('be.checked');
        cy.get('.form-check-label').eq(1).prev().uncheck().should('not.be.checked');

    })
    it('radio', ()=>{
        cy.visit('https://practice.expandtesting.com/radio-buttons');
        cy.contains('Black').prev().check().should('be.checked');
        cy.contains('Red').prev().should('not.be.checked');
    });
    it.only('dropdown', ()=>{
    cy.visit('https://practice.expandtesting.com/dropdown');
    //    cy.get('select#country').select('IN').should('have.value', 'IN');
        cy.get('select#country > option').each(($option) => {
      cy.log($option.text());        
      cy.log($option.val());         
    });
})
    it('scroll', ()=>{

        cy.visit('https://practice.expandtesting.com/scrollbars')
        cy.get('#hidingButton').scrollIntoView();
    })
})