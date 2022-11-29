import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

function loading() {
  const container = document.querySelector('.container');
  const msgLoading = document.createElement('h2');
  msgLoading.id = 'msgLoading';
  msgLoading.innerHTML = 'carregando...';
  container.appendChild(msgLoading);
}
function load() {
  const msgLoading = document.querySelector('#msgLoading');
  msgLoading.innerHTML = '';
}

document.querySelector('.cep-button').addEventListener('click', searchCep);
const listProducts = document.querySelector('.products');
loading();
const listComputers = await fetchProductsList('computador');
load();
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
