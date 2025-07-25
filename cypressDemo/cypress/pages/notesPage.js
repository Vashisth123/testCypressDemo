class notesPage{
    notesUrl(){
        cy.visit('/notes/api/api-docs/');
    }

}

export default new notesPage()