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
    const listaComputadores = await fetchProductsList('computador')
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(listaComputadores.url).toBe(url)
  });

  it('fetchProductList retorna lista de computadores', async () => {
    const listaComputadores = await fetchProductsList('computador')
    expect(listaComputadores).toEqual(computadorSearch)
  });
  it(`se fetchProductList lança mensagem de erro 'Termo de busca não informado' quando executada sem argumento`, async () => {
    expect(await fetchProductsList()).toThrow('Termo de busca não informado')
  })
});
