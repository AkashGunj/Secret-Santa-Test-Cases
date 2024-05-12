///<reference types = "cypress"/>

describe('Homepage Verification Test Cases',function(){

  beforeEach('Open application url',function(){
      cy.visit("http://localhost:8080/")
  })

  it('Verify homepage url and title of the page',function(){

    //cy.url().should('be.equal','http://localhost:8080')
    //cy.url().then((url)=>{
      //expect(url).to.equal('http://localhost:8080')
      //cy.url().should('eq', `${baseUrl}/`);
    })
    
  it('Verify Homepage heading welcome page',function(){
    //cy.visit("http://localhost:8080/")
    //cy.wait(5000) 
    cy.get('h2').should('be.visible')
    cy.get('h2').invoke('text').then((text)=>{
      expect(text).to.equal('Welcome to Secret Santa Matchmaking for the very popular Secret Santa game!')
    })

  })

  it('Verify Homepage click below to start page',function(){
    cy.get('p').should('be.visible')
    cy.get('p').invoke('text').then((text)=>{
      expect(text).to.equal('Click below to start!')
    })
  })

    it('Verify Homepage start button',function(){
      cy.get('a').should('be.visible')
      cy.get('a').click()
      //cy.url().should('have.text','http://localhost:8080/addpeople')
      cy.get('[action="addpeople"] > [type="submit"]').should('be.visible')
      
      })

    
  
})



