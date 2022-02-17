///<reference types="cypress" />

describe('Adicionar item ao carrinho', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/#')
        cy.get('#primary-menu > .menu-item-629 > a').click()
    })
    it('Deve adicionar varios produtos no carrinho', () => {
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', 1)
        cy.addProdutos('Aether Gym Pant', '34', 'Blue', 1)
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XL', 'Blue', 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
    });
    it.only('Adicionar produto no carrinho com sucesso', () => {
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', 10)
        
    });
    
});