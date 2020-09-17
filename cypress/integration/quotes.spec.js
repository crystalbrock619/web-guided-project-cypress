// write tests here
describe('Quotes app', () => {
  beforeEach(() => {
    // arbitrary code you want running
    // before each test
    cy.visit('http://localhost:1234')
  })

  const textInput = () => cy.get('input[name="text"]')
  const authorInput = () => cy.get('input[name="author"]')

  // "it" is a test
  it('sanity check to make sure tests work', () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3)
    expect(2 + 2).not.to.equal(5) // strict ===
    expect({}).not.to.equal({})   // strict ===
    expect({}).to.eql({})         // not strict
  })

  it('the proper elements are showing', () => {
    cy.get('input[name="text"]').should('exist')
    cy.get('input[name="foobar"]').should('not.exist')
    cy.get('input[name="author"]').should('exist')
    cy.get('#submitBtn').should('exist')
    cy.get('#cancelBtn').should('exist')

    cy.contains('Submit Quote').should('exist')
    cy.contains(/submit quote/i).should('exist')
  })

  it('can type in the inputs', () => {
    // grab the inputs
    // assert they're empty
    // type in em
    // assert that the thing we typed is there
    textInput()
      .should('have.value', '')
      .type('Be nice to the CSS expert')
      .should('have.value', 'Be nice to the CSS expert')

    authorInput()
      .should("have.value", "")
      .type("Gabe!")
      .should('have.value', 'Gabe!')
  })
})
