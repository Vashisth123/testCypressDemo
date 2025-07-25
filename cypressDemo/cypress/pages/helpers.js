class helpers{

typeIntoField(locator, value){
cy.get(locator).clear().type(value);
};

}

export default new helpers;