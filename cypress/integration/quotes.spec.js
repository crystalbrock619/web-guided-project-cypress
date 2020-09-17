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
    // set up
    // act
    // assert

    // button is disabled is true,
    // type in text field
    // button is disable is true
    // empty text field
    // type in author field
    // button disables is true
    // type in text fields
    // button is disabled is false

    // should('be.disabled') --> to assert that an element is disabled
    // clear()               --> to clear an input

    submitBtn().should('be.disabled')
    textInput().type('TEXT INPUT')
    submitBtn().should('be.disabled')
    textInput().clear()
    authorInput().type('AUTHOR INPUT')
    submitBtn().should('be.disabled')
    textInput().type('TEXT INPUT')
    submitBtn().should('not.be.disabled')
  })

  it("cancel inputs", () => {
    // should('have.value' '') --> to assert that an input is empty
    // click()                 --> to click on an element
    textInput().type("TEXT INPUT")
    authorInput().type("AUTHOR INPUT")
    cancelBtn().click()
    authorInput().should("have.value", "")
    textInput().should("have.value", "")
  })

  it('can submit a new quote', () => {
    // assert that "have fun (Gabe)" is not in the DOM
    // create quote "have fun (Gabe)"
    // assert that the text is now in the DOM
    // clean up by deleting the newly created quote
  })
  
  it('can submit a new quote', () => {
    // make a new quote
    // delete it
    // assert it was successfuly deleted
    cy.contains('have fun (Gabe)').should('not.exist')
    textInput().type('have fun')
    authorInput().type('Gabe')
    submitBtn().click()
    cy.contains('have fun (Gabe)').should('exist')
  })
})
