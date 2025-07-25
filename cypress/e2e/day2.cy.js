describe('JS basics', ()=>{
    let name;
it('JS variable', ()=>{
const arr =[1, 2, 3, 4];
 const name = "Punit";
// //name ="tanuj";
// cy.log(name);
var newVal = "Tanuj";


for(let i =0; i<arr.length; i++){
    // cy.log(arr[i]);
    // newVal = "Punit";
    // cy.log(newVal);
    if(i<2){
        
 //cy.log(arr[i]+1);

    }
   const j =4;
   cy.log(j)

}
newVal = "Punit";


});
it.skip('promise', ()=>{
//     cy.request('GET', 'https://api.example.com/data').then((response) => {
//     // Handle the response
    
//     expect(response.statuscode).to.eq(200)
// });
// cy.get('selector').click().then((txt)=>{
//     cy.wrap(txt).type('')
// })
cy.log("Second test case")
});

it.only('data type', ()=>{
    let arr = [1, 2, 3, 2, 5, 1];
    // const newArr = [1 ,2, 3, 5];
    // for(let i=0; i<arr.length; i++){
    //     if(!newArr.includes(arr[i])){
    //     newArr.push(arr[i]);
    //     }
    arr = [4,5];
      //  arr.push(6)
    // }
    cy.log(arr);
})
})