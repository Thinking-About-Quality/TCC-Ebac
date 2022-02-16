function generate_random_string(string_length) {
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

var random_string = generate_random_string(8)

Cypress.Commands.add("ListarCoupons", function () {
    cy.request({
        method: "GET",
            url: Cypress.env("urlbasecoupons") + "/wc/v3/coupons/5099",
    
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
              },    
        
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        body: {  
           

        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("ListarvariosCoupons", function () {
    cy.request({
        method: "GET",
            url: Cypress.env("urlbasecoupons") + "/wc/v3/coupons",
    
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
              },    
        
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        body: {
                    
          },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("CadastrarCoupons", function () {
    cy.request({
        method: "POST",
            url: Cypress.env("urlbasecoupons") + "/wc/v3/coupons",
    
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
              },    
        
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        body: {
            "code": "nometeste"+ random_string,
            "amount": "11",
            "discount_type": "fixed_product",
            "description": "Cupom de desconto de teste"          
          },
        failOnStatusCode: false
    })
})