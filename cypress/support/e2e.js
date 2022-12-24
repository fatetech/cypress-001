import './commands'
import './CustomCommand/Action.spec'
import './CustomCommand/SignUp.spec'


Cypress.on('uncaught:exception', () => {
    return false
})

