import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

function loading() {
  const container = document.querySelector('.products');
  const msgLoading = document.createElement('h2');
  msgLoading.classList.add('loading');
  msgLoading.innerHTML = 'carregando...';
  container.appendChild(msgLoading);
}
function loaded() {
  const container = document.querySelector('.products');
  const msgLoading = document.querySelector('.loading');
  container.removeChild(msgLoading);
}
loading();
const listComputers = await fetchProductsList('computador');
loaded();
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
