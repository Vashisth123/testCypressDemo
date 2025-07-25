import loginPage from "../pages/loginPage";
import login from "../fixtures/login.json";
import notesPage from "../pages/notesPage";

describe('Page object', ()=>{
    it.only('login', ()=>{

        loginPage.loginUrl();
       loginPage.loginAction(login.Punit.username, login.Punit.password);
         notesPage.notesUrl();

    });

    it('notes validation', ()=>{
        notesPage.notesUrl();
    })
})