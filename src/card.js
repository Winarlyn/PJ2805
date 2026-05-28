export default function card(elem){
    const card = document.createElement('div');
    card.innerHTML = `<div class="card border-1 border-myred-500">
        <img class="w-full"  src="${elem.path}" alt="стул">
        <h2 class="font-bold">${elem.title}</h2>
        <p>Цена: ${elem.price} 1000 &#8381;</p>
        <button class="flex w-24 h-8 bg-red-400 items-center justify-center rounded-lg hover:bg-amber-500 hover:rounded-none transition">купить</button>
      </div>`;

      
    return card;
}

