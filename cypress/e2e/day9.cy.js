

describe('Hooks', ()=>{
    let id;
before('url', ()=>{
    cy.log("Inside Before block");
});
beforeEach(() => {
  cy.log("Inside BeforeEach block");
});
it('First test case', ()=>{

cy.log("Inside First test cases");
id = "token"
});
it('Second test case', ()=>{

cy.log("Inside Second test case");
cy.log('global', id)
})
it('Third test case', ()=>{

cy.log("Inside Third test case");
})

afterEach('aftereach', ()=>{
    cy.log("Inside AfterEach block");
});
after('after', ()=>{
    cy.log("Inside after block")
})

})