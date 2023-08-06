Feature('My test suite');

Scenario('Should load the example.com website',  ({ I }) => {
  I.amOnPage("https://www.example.com");
  I.see("Example");

  I.dontSee("Google");
  I.seeElement("h1");

});


Scenario('Should load the example.com website - second test',  ({ I }) => {
    I.amOnPage("https://www.example.com");
    I.see("Example");
  
    I.dontSee("Google");
    I.seeElement("h1");
  
  });


  Scenario('Should load the example.com website - third test',  ({ I }) => {
    I.amOnPage("https://www.example.com");
    I.see("Example");
  
    I.dontSee("Google");
    I.seeElement("h1");
  
  });