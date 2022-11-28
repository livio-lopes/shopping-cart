import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const listComputers = await fetchProductsList('computador');
const listProducts = document.querySelector('.products');

listComputers.forEach((computer) => {
  const product = {
    id: computer.id,
    title: computer.title,
    thumbnail: computer.thumbnail,
    price: computer.price,
  };
  const item = createProductElement(product);
  listProducts.appendChild(item);
});
