import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCustomElement } from './helpers/shopFunctions';

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
window.onload = () => {
  listComputers();
};
