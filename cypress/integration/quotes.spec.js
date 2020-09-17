// write tests here
describe('Quotes app', () => {
  beforeEach(() => {
    // arbitrary code you want running
    // before each test
    cy.visit('http://localhost:1234')
  })

  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3)
  })
})
