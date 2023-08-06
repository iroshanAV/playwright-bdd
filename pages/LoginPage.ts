
const { I } = inject();

class LoginPage {
  txtUsername: string;
  loginForm: string;
  txtPassword: string;
  btnSubmit: string;
  lblLoginError: string;

  constructor() {
    //insert your locators
    this.loginForm = "#loginForm";
    this.txtUsername = "#user_login";
    this.txtPassword= "#user_password";
    this.btnSubmit= ".btn-primary";
    this.lblLoginError =".alert-error";
  }


  // insert your methods here
  submitLogin(username,password){
    I.fillField(this.txtUsername,username);
    I.fillField(this.txtPassword,password);
    I.click(this.btnSubmit);
  }

  assertLoginFormIsVisible(){
    I.seeElement(this.loginForm);
  }

  assertLoginError(){
   I.seeElement(this.lblLoginError);
  }

}

export default new LoginPage();
