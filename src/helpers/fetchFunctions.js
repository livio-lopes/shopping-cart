export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (QUERY) => {
  // seu código aqui
  if (!QUERY) throw new Error('Termo de busca não informado');
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const requisition = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);
  return requisition;
};
