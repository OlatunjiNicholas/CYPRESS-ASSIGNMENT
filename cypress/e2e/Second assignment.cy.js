describe('verify login with vaild credential',()=>{
    it('first username and password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('second username and password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it('third username and password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it('forth username and password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it('fifth username and password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="usernmse"]').type('error_user')
        cy.get('[data-test="pass"]').type('secret_sauceccalss')
        cy.get('[data-test="login-button"]').click()
    })
    it('sixth username and password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('visual_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
})