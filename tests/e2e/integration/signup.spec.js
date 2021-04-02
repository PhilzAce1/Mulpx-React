describe('User should be able to Signup', () => {
	beforeEach(() => {
		cy.visit('/signup');
	});
	it('should focus on the email input field', () => {
		cy.focused().attribute('placeholder').should('contain', 'Email');
	});
	it.only('validate input wrong fields', () => {
		const wrongEmail = 'adanafnadidadf';
		const emailErrorMessage = 'Please input a correct email';
		const password = '16';
		const passwordErrorMessage = 'min of 4 text';
		const fullname = 'je';
		const fullnameErrorMessage = 'min of 4 text';
		const phonenumber = '09';
		const phoneNumberErrorMessage = 'min of 4 text';

		cy.get('#email').type(wrongEmail);
		cy.contains(emailErrorMessage);
		cy.get('#password').type(password);
		cy.contains(passwordErrorMessage);
		cy.get('#fullname').type(fullname);
		cy.contains(fullnameErrorMessage);
		cy.get('#phonenumber').type(phonenumber);
		cy.contains(phoneNumberErrorMessage);
	});

	it.only('validate empty input field', () => {
		const emailErrorMessage = 'Please input your email!';
		const passwordErrorMessage = 'Please input your Password!';
		const fullnameErrorMessage = 'Please input your Full name!';
		const phoneNumberErrorMessage = 'Please input your Phone number!';

		cy.get('#email').type('hello world').clear();
		cy.contains(emailErrorMessage);
		cy.get('#password').type('hello world').clear();
		cy.contains(passwordErrorMessage);
		cy.get('#fullname').type('hello world').clear();
		cy.contains(fullnameErrorMessage);
		cy.get('#phonenumber').type('hello world').clear();
		cy.contains(phoneNumberErrorMessage);
	});
	it.only('accepts input', () => {
		const email = 'johndoe@gmail.com';
		const password = '123456';
		const fullname = 'john doe';
		const phonenumber = '091234566';

		cy.get('#email').type(email).should('have.value', email);
		cy.get('#password').type(password).should('have.value', password);
		cy.get('#fullname').type(fullname).should('have.value', fullname);
		cy.get('#phonenumber').type(phonenumber).should('have.value', phonenumber);
	});
	it.only('Register user in on correct credentials submitted', () => {
		cy.server();
		cy.route('POST', '/api/v1/signup', {
			data: {
				data: {
					success: true,
				},
			},
		});

		const email = 'johndoe@gmail.com';
		const password = '123456';
		const fullname = 'john doe';
		const phonenumber = '091234566';

		cy.get('#email').type(email).should('have.value', email);
		cy.get('#password').type(password).should('have.value', password);
		cy.get('#fullname').type(fullname).should('have.value', fullname);
		cy.get('#phonenumber').type(phonenumber).should('have.value', phonenumber);

		cy.get('#email').type(email);
		cy.get('#password').type(password).type('{enter}');
	});

	//check for when we are unable to register
});
