/// <reference types= "cypress" />

it ("google test", function() {

    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')

    // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()    
    cy.wait(4000)
    cy.contains('Videos').click()

})

it.only('login test', function() {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-form-actions').find('.oxd-button--secondary').click()

})