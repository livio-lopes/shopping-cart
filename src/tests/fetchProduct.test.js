import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });
  it('fetch é chamado ao executar fetchProducts', async () => {
    const sandisk = await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProducts', async () => {
    const sandisk = await fetchProduct('MLB1405519561');
    const URL = 'https://api.mercadolibre.com/items/MLB1405519561'
    expect(fetch).toHaveBeenCalledWith(URL);
  });
  it(`fetchProduct('MLB1405519561')  retorna informações do produto`, async () => {
    const sandisk = await fetchProduct('MLB1405519561')
    expect(sandisk).toEqual(product)
  });

  it(`fetchProduct() lança mensagem de erro 'Termo de busca não informado' quando executada sem argumento`,    async () =>  {
    await expect(fetchProducts()).rejects.toThrow(/^Termo de busca não informado$/);
  })
});
