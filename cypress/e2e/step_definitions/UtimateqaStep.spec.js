import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I visit the ultimateqa site$/, () => {
	cy.LunchApp();
});

Then(/^I click on the courses tab$/, () => {
	return cy.CourseClick();
});

Then(/^I click on the sign in button$/, () => {
	return cy.SignIn();
});

Then(/^I should see an empty form with a sign-up text below$/, () => {
	return cy.SignUpTextVerification();
});

Then(/^I click on the sign-up button$/, () => {
	return cy.SignUp();
});

Then(/^I enter my First Name and LastName$/, () => {
	return cy.NameInput();
});

Then(/^I enter my Email address$/, () => {
	return cy.EmailInput();
});

Then(/^I enter my correct Password$/, () => {
	return cy.PasswordInput();
});

Then(/^I check the checkbox$/, () => {
	return cy.CheckboxInput();
});

When(/^I click the submit button$/, () => {
	return cy.Submit();
});

Then(/^I should see the captcha popup$/, () => {
	return cy.Verifications();
});
