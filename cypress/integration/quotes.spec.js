// write tests here
describe('Quotes app', () => {
  beforeEach(() => {
    // arbitrary code you want running
    // before each test
    cy.visit('http://localhost:1234')
  })

  const textInput = () => cy.get('input[name=text]')
  const authorInput = () => cy.get('input[name=author]')
  const foobarInput = () => cy.get('input[name=foobar]')
  const submitBtn = () => cy.get(`button[id="submitBtn"]`)
  const cancelBtn = () => cy.get(`button[id="cancelBtn"]`)

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
    textInput().should('exist')
    foobarInput().should('not.exist')
    authorInput().should('exist')
    submitBtn().should('exist')
    cancelBtn().should('exist')

    cy.contains('Submit Quote').should('exist')
    cy.contains(/submit quote/i).should('exist')
  })

  it('can type in the inputs', () => {
    textInput()
      .should('have.value', '')
      .type('Be nice to the CSS expert')
      .should('have.value', 'Be nice to the CSS expert')

    authorInput()
      .should("have.value", "")
      .type("Gabe!")
      .should('have.value', 'Gabe!')
  })

  it('submit button disabled until both inputs are filled out', () => {
    // set up, sanity checks (the initial state is legit)
    // act (like typing or clicking)
    // assert that the action has the effect we expect

    // button is disabled is true,
    // type in text field
    // button is disable is true
    // empty text field
    // type in author field
    // button disables is true
    // type in text fields
    // button is disabled is false

    // should('be.disabled')
  
    submitBtn().should('be.disabled')
    textInput().type('gaga')
    submitBtn().should('be.disabled')
    textInput().clear()
    authorInput().type('gaga')
    submitBtn().should('be.disabled')
    textInput().type('gaga')
    submitBtn().should('not.be.disabled')
  })
})
