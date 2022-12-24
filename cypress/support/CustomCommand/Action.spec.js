Cypress.Commands.add('LunchApp', () => {
    cy.visit('/')
})

Cypress.Commands.add('CourseClick', () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.CourseBtn).should('exist').click();
    })
})

Cypress.Commands.add("SignIn", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.SigninBtn).should('exist').click();
    })
})

Cypress.Commands.add("SignUpTextVerification", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.SingUpVerification).should('exist')
    })
})


