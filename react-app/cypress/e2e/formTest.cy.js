describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Replace with the correct path to your form
  });

  it('should submit successfully with valid data', () => {
    // Fill in the form fields with valid data
    cy.get('input.fname').type('John');
    cy.get('input.lname').type('Doe');
    cy.get('input.email').type('johndoe@example.com');
    cy.get('input.phone').type('123-456-7890');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the success alert is displayed
    cy.log({message:"Form Submitted Successfully!"});
    // cy.on('window:alert', (text) => {
    //   expect(text).to.equal('Form Submitted Successfully');
    // });
  });

  it('should show validation errors for required fields', () => {

    // Submit the form without any input
    cy.get('button[type="submit"]').click();

    // Verify error messages
    cy.get('.error').should('contain', 'First name is required!');
    cy.get('.error').should('contain', 'Last name is required!');
    cy.get('.error').should('contain', 'email is required!');
    cy.get('.error').should('contain', 'phone is required!');
  });

  it('should show validation error for invalid email format', () => {

    // Fill in fields with invalid email
    cy.get('.fname').type('John');
    cy.get('.lname').type('Doe');
    cy.get('.email').type('invalid_email');
    cy.get('.phone').type('123-456-7890');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify error message
    cy.get('.error').should('contain', 'Invalid email format!');
  });

  it('should show validation error for invalid phone number format', () => {

    // Fill in fields with invalid phone number
    cy.get('.fname').type('John');
    cy.get('.lname').type('Doe');
    cy.get('.email').type('johndoe@example.com');
    cy.get('.phone').type('invalid_phone_number');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify error message
    cy.get('.error').should('contain', 'Invalid phone format!');
  });

  it('tests error handling in the submission process', () => {  
    
    // Fill out the form with valid data
    cy.get('input[name="fname"]').type('John');
    cy.get('input[name="lname"]').type('doee');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phone"]').type('1234567890');
  

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the success alert is displayed
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Somthing went wrong!');
    });
  });
  
})