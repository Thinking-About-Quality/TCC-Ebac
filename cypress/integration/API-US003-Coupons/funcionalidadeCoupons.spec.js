/// <reference types="cypress" />

import validarlistarcouponsschema from '../../contracts/validarlistarCoupons.contracts'
import validarlistacouponsFixtures from '../../fixtures/dadosListaCouponsAPI.json'

context('Funcionalidades de Coupons API ', () => {
  beforeEach(() => {
  });

  it('Deve validar contrato de cupons', () => {
          
    cy.request('cupons').then(response=>{
         return validarlistarcouponsschema.validateAsync(response.headers.status)
    })
});
  it('Listar um Coupons', function () {
    cy.ListarCoupons().then(response => {
      cy.log(response.body)
      expect(response.body.description).to.equal(validarlistacouponsFixtures.description)
      expect(response.status).to.equal(200)
    })
  });

  it('Listar varios Coupons', function () {
    cy.ListarvariosCoupons().then(response => {
      expect(response.status).to.equal(200)
    })
  });

  it('Cadastra um Coupons', function () {
    cy.CadastrarCoupons().then(response => {
      cy.log(response.body)

    }).then((response) => {
      expect(response.status).to.equal(201)
    });

  });
});