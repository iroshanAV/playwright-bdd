import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

Feature("Zero Bank Application - E2E tests");

Before(({ I }) => {
    console.log("Before Hook")
    I.amOnPage("http://zero.webappsecurity.com/index.html")
});



Scenario("Login Test - Negative", ({ I }) =>{
 HomePage.clickSignIn();
//  I.seeElement("#loginForm");
 LoginPage.submitLogin("Invalid username","Invalid Password");
 I.seeElement(".alert-error");
});



After(({ I }) => {
    console.log("After Hook") 
});