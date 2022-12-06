import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCustomElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const getInfoProduct = async (id) => {
  const inforById = await fetchProduct(id);
  const resumeInfo = {
    id: inforById.id,
    title: inforById.title,
    price: inforById.price,
    pictures: inforById.pictures,
  };
  return resumeInfo;
};

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listComputers = async () => {
  try {
    const listProducts = document.querySelector('.products');
    const msgLoading = 'carregando...';
    const loading = createCustomElement('h2', 'loading', msgLoading);
    listProducts.appendChild(loading);
    const list = await fetchProductsList('computador');
    listProducts.removeChild(loading);
    list.forEach((computer) => {
      const product = {
        id: computer.id,
        title: computer.title,
        thumbnail: computer.thumbnail,
        price: computer.price,
      };
      const item = createProductElement(product);
      listProducts.appendChild(item);
    });
  } catch (error) {
    error.message = 'Algum erro ocorreu, recarregue a página e tente novamente';
    error.className = 'error';
    const listProducts = document.querySelector('.products');
    const errorElement = createCustomElement('h2', error.className, error.message);
    listProducts.appendChild(errorElement);
  }
};
window.onload = async () => {
  listComputers();
  const idsLS = getSavedCartIDs();
  const myCart = document.querySelector('.cart__products');
  const listCart = await Promise.all(idsLS.map((id) => getInfoProduct(id)))
    .then((v) => v);
  listCart.forEach((infoItem) => {
    const itemCart = createProductElement(infoItem, true);
    myCart.appendChild(itemCart);
  });
};
