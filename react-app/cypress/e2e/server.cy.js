
describe("registers a new user", () => {
  it("registers a new user", () => {
    cy.request("POST", "http://localhost:8000/form", {
      fname: "Mike",
      lname: "wise",
      email: "xyz@gmail.com",
      phone: "012 345 6789"
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body.message).to.exist;
      expect(response.body.message).eq("Form Submitted Successfully!");
    });
    cy.wait(1000);
  });
});
