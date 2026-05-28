import './style.css'
import  card  from './card.js'

let data = [
  {
    id: 1,
    path: 'img/1.png',
    title: 'стул',
    price: 2450
  },
  {
    id: 2,
    path: 'img/2.png',
    title: 'кресло',
    price: 5450
  },
  {
    id: 3,
    path: 'img/3.png',
    title: 'стул дерево',
    price: 4450
  },
  {
    id: 4,
    path: 'img/4.png',
    title: 'стул металл',
    price: 3450
  },
  {
    id: 5,
    path: 'img/5.png',
    title: 'кресло мягкое',
    price: 6450
  },
  {
    id: 6,
    path: 'img/6.png',
    title: 'диван',
    price: 22450
  },


];


const container = document.querySelector(".container");

data.forEach((item)=>{
  container.append(card(item));
})

container.append(card());