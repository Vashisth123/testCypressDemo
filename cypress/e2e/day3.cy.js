describe("day 3", ()=>{

    it("first program", ()=>{
        // function sayHello(){
        //     cy.log("Hello");
        // }

        
    //    cy.log(add(3 ,-1))
        
    //     function add(a ,b){
    //         return a+b;
    //     };
          
        // let add = function(a ,b){
        //     return a +b
        // }; 
        //   cy.log(add(3, 8))
          
        // const add = (a, b)=>{
        //     return a+b;
        // }  
        // cy.log(add(3, 8));

        cy.get('a').click({timeout:4000}).then(($ele)=>{
            //callback
            cy.wait(6000)
            cy.wrap($ele).click();
        })

        
    })
})