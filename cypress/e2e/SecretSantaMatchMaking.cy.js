//<reference types = "cypress"/>

describe('Homepage Verification Test Cases',function(){

    beforeEach('Open application url',function(){
        cy.visit("http://localhost:8080/addpeople")
    })
  
    it('Add multiple persons - Tests ',function(){
        cy.get('[action="addpeople"] > [type="submit"]').should('be.visible')
        cy.get('[type="text"]').type("Akash")
        cy.get('[action="addpeople"] > [type="submit"]').click()

        cy.get('[type="text"]').type("Rudra")
        cy.get('[action="addpeople"] > [type="submit"]').click()

        cy.get('[type="text"]').type("Punam")
        cy.get('[action="addpeople"] > [type="submit"]').click()

        cy.get('[type="text"]').type("Kamini")
        cy.get('[action="addpeople"] > [type="submit"]').click()

      })
      
    it('Verify People added - Tests',function(){
        cy.get(':nth-child(5) > .second > [type="submit"]').should('be.visible')
      
      })

    it('Verify Gengrate matches functionality',function(){
        cy.get('[action="generate"] > input').should('be.visible')

    })

    it('Verify matches functionality',function(){
        cy.get('[action="generate"] > input').click()
        cy.get(':nth-child(5) > .second').should('be.visible')
        cy.get('body > :nth-child(2)').should('be.visible')
    })
  
    })   
    
  
  
  
  
  