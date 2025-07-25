describe('cypress locators', ()=>{
    beforeEach(()=>{
        cy.visit('https://practice.expandtesting.com/login');

    })
    it('select by id and class', ()=>{
        cy.get('#username').type('practice');
        cy.get('.form-control').eq(1).type("SuperSecretPassword!");
        cy.get('[type="submit"]').click();
        cy.url().should('include', '/secure');
        cy.get('b').invoke('text').should('include','You logged into');
        cy.get('b').then(($ele)=>{
            expect($ele.text()).to.eq('You logged into a secure area!');
        })


    })
    it.only('Home page', ()=>{
        cy.contains('Home').click();
      //  cy.get('[id="search-input"]').type('test');
       cy.get('[id="search-input"]').next().click();
      cy.get('div#search-bar').find('#search-input').type('abcd')

    })
    // it('select by id and class', ()=>{
    //     cy.get('#username').type('practice');
    // })
})