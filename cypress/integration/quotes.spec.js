// write tests here
describe('Quotes app', () => {
  beforeEach(() => {
    // arbitrary code you want running
    // before each test
    cy.visit('http://localhost:1234')
  })

  // "it" is a test
  it('sanity check to make sure tests work', () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3)
    expect(2 + 2).not.to.equal(5)
  })

  it('selecting elements from the DOM', () => {
    cy.get('input[name="text"]').should('exist')
  })
})
