import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const listaComputadores = await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const listaComputadores = await fetchProductsList('computador');
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(fetch).toHaveBeenCalledWith(URL);
  });
  it(`fetchProductList('computador)  retorna lista de computadores`, async () => {
    const listaComputadores = await fetchProductsList('computador')
    expect(listaComputadores).toEqual(computadorSearch)
  });

  it(`fetchProductList() lança mensagem de erro 'Termo de busca não informado' quando executada sem argumento`,    async () =>  {
    await expect(fetchProductsList()).rejects.toThrow(/^Termo de busca não informado$/);
  })
  //bode
});
