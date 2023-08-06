const { I } = inject();

class HomePage {
  lnkSignIn: string;
  lblLoginForm: string;

  constructor() {
    //insert your locators
    this.lnkSignIn = "#signin_button";
   
  }
  // insert your methods here
  clickSignIn(){
    I.click(this.lnkSignIn);
  }

  
}

// For inheritance
export default new HomePage();
