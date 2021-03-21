describe('Pizza Order Form App', () => {
    const orderName = () => cy.get('[name="name"]')
    const sizeOption = () => cy.get('[name="size"]')
    const pepperoniCheck = () => cy.get('[name="pepperoni"]')
    const mushroomsCheck = () => cy.get('[name="mushrooms"]')
    const specialInstructions = () => cy.get(':nth-child(8) > label > input')
    const orderButton = () => cy.get('.add-order-button')

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('example test', () => {
        expect(2 + 2).to.equal(4)
    })

    it('renders name input properly', () => {
        orderName().should('exist')
    })

    describe('Fills out and selects the input fields', () => {
        it('can type in and select the input fields', () => {
            orderName()
            .should('have.value', '')
            .type('My awesome pizza')
            .should('have.value', 'My awesome pizza')

            sizeOption()
            .should('have.value', '')
            .select('small')
            .should('have.value', 'small')

            pepperoniCheck().click()
            mushroomsCheck().click()
            
            specialInstructions()
            .should('have.value', '')
            .type('Extra saucy please! :)')
            .should('have.value', 'Extra saucy please! :)')

            orderButton().click()
        })
    })

})