const { ConfigContext } = require('antd/lib/config-provider');

describe('User should be able to login', () => {
	beforeEach(() => {
		cy.visit('/signin');
	});
	it('should focus on the email input field', () => {
		cy.focused().attribute('placeholder').should('contain', 'Email');
	});

	it.only('validate input wrong fields', () => {
		const wrongEmail = 'adanafnadidadf';
		const emailErrorMessage = 'Please input a correct email';
		const password = '16';
		const passwordErrorMessage = 'min of 4 text';

		cy.get('#email').type(wrongEmail);
		cy.contains(emailErrorMessage);
		cy.get('#password').type(password);
		cy.contains(passwordErrorMessage);
	});

	it.only('validate empty input field', () => {
		const emailErrorMessage = 'Please input your Email!';
		const passwordErrorMessage = 'Please input your Password!';

		cy.get('#email').type('hello world').clear();
		cy.contains(emailErrorMessage);
		cy.get('#password').type('hello world').clear();
		cy.contains(passwordErrorMessage);
	});
	it.only('accepts input', () => {
		const email = 'johndoe@gmail.com';
		const password = '123456';

		cy.get('#email').type(email).should('have.value', email);
		cy.get('#password').type(password).should('have.value', password);
	});
	cy.server();
	it.only('Logs user in on correct credentials submitted', () => {
		const email = 'johndoe@gmail.com';
		const password = '123456';
		cy.route('POST', '/api/v1/login', {
			data: {
				data: {
					success: true,
				},
			},
		});
		cy.get('#email').type(email);
		cy.get('#password').type(password).type('{enter}');
	});

	// check for when we don't log in successfully
});
