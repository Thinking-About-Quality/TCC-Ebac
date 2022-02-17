/// <reference types="cypress" />

import validarlistarcouponschema from '../../contracts/validarlistarCoupons.contracts'
import validarlistacouponsFixtures from '../../fixtures/dadosListaCouponsAPI.json'

context('Funcionalidades de Coupons API ', () => {
  beforeEach(() => {
  });

  it('Deve validar contrato de cupons', () => {
          
    cy.ListarCoupons('cupons').then(response=>{
         return validarlistarcouponschema.validateAsync(response.headers.status)
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

  it('Cadastrar um Coupons', function () {
    cy.CadastrarCoupons().then(response => {
      cy.log(response.body)

    }).then((response) => {
      expect(response.status).to.equal(201)
    });

  });
});