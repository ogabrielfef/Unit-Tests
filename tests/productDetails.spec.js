const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails())).toBeTruthy();
    expect(productDetails.length).toBe(2);
    expect(typeof Object.values(productDetails())).toEqual('object');
    expect(Object.values(productDetails())[1] !== Object.values(productDetails())[0]).toBeTruthy();
    expect(Object.values(productDetails()[0].details.productId).includes('1', '2', '3')).toEqual(true)
  });
});
