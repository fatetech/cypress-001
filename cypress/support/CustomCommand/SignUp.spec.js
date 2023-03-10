Cypress.Commands.add("SignUp", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.SignupBtn).should('be.visible').click();
    })
})

Cypress.Commands.add("NameInput", () => {
    cy.fixture('elements').then(ele => {
    cy.get(ele.FirstNameInput).should('be.visible').fill(ele.FirstName);
        cy.get(ele.LastNameInput).fill(ele.LastName);
    })
})



Cypress.Commands.add("EmailInput", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.EmailInput).should('be.visible').fill(ele.Email);
    })
})



Cypress.Commands.add("PasswordInput", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.PasswordInput).should('be.visible').fill(ele.Password);
    })
})
Cypress.Commands.add("CheckboxInput", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.Checkbox).should('be.visible').check();
    })
})
Cypress.Commands.add("Submit", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.SubmitBtn).should('be.visible').click();
    })
})
Cypress.Commands.add("Verifications", () => {
    cy.fixture('elements').then(ele => {
        cy.get(ele.captcha).should('exist');
    })
})


