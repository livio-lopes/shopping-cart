export const getAddress = (CEP) => {
  const awesomeURL = `https://cep.awesomeapi.com.br/json/${CEP}`;
  const brasilapi = `https://brasilapi.com.br/api/cep/v2/${CEP}`;
  const urls = [awesomeURL, brasilapi];
  const requisition = Promise.any(urls.map((url) => fetch(url)
    .then((response) => response.json())));
  return requisition;
};

const validCEP = (CEP) => {
  const lengthValid = 8;
  return CEP.length === lengthValid;
};

export const searchCep = async () => {
  const inputCEP = document.querySelector('.cep-input').value;
  const addressCart = document.querySelector('.cart__address');
  try {
    const info = validCEP(inputCEP) ? await getAddress(inputCEP) : 'CEP não encontrado';
    console.log(info);
    const { address, district, city, state } = info;
    addressCart.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  } catch (error) {
    addressCart.innerHTML = 'CEP não encontrado';
  }
};
