describe('Login',()=>{
  it('use of assertion',()=>{
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').should('be.visible').type('standard_user')
  cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
  cy.get('[data-test="login-button"]').should('be.visible').click()
  cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.exist')
  cy.contains('Swag Labs').should('be.visible')
  cy.get('[data-test="shopping-cart-link"]').should('be.visible')
  cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]').should('be.visible')
  cy.screenshot()
  })
})