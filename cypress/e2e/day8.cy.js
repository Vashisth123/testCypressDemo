

describe('API concepts', ()=>{
    let accessToken;
    it('request',{tags: ['sanity ']}, ()=>{

    
        cy.request('GET', 'https://practice.expandtesting.com/notes/api/health-check').then((res)=>{
            cy.log(res.body.message);
            accessToken = res.body.token;
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq("Notes API is Running");
        })
    const apidata = {
            name: "rrggga",
            email: "ff@cc.cc",
            password: "ccceeww"
        }
        cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/register', apidata).then((res)=>{
            cy.log(res)
        })


    })
    it('Intercept socket.io traffic on dropdown page', () => {
  cy.intercept('GET', 'https://practice.expandtesting.com/socket.io/**', {
    statusCode: 200,
    body: [
      {
        countryCode: 'IN',
        countryName: 'India',
        users: 64
      },
      {
        countryCode: 'UA',
        countryName: 'Ukraine',
        users: 1
      },
      {
        countryCode: 'GB',
        countryName: 'United Kingdom',
        users: 1
      },
      {
        countryCode: 'UZ',
        countryName: 'Uzbekistan',
        users: 1
      },
      {
        countryCode: 'VN',
        countryName: 'Vietnam',
        users: 1
      }
    ]
  }).as('socketData');

  cy.visit('https://practice.expandtesting.com/dropdown');

  // Optional: wait or assert if app reacts to the socket data
  cy.wait('@socketData');
});

})