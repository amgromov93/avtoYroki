const sliderContainer = document.getElementById('#sliderContainer');

const usersRewiews = [
  {
    name: 'Микита',
    item: 'Рекомендую! Чудовий інструктор, доступно подає всю інформацію, можна і посміятися і отримати за неуважність. Задоволений на всі сто відсотків.',
  },
  {
    name: 'Павло',
    item: 'Рекомендую! Чудовий інструктор, доступно подає всю інформацію, можна і посміятися і отримати за неуважність. Задоволений на всі сто відсотків.',
  },
  {
    name: 'Олена',
    item: 'Рекомендую! Чудовий інструктор, доступно подає всю інформацію, можна і посміятися і отримати за неуважність. Задоволений на всі сто відсотків.',
  }
]

export default function sliderItem() {  
  return sliderContainer.innerHTML(usersRewiews.map(generateItemsHtml));
}

function generateItemsHtml(usersRewiews) {
    return `
      <div class="rewiews__box">
      <div class="rewiews__item">
        <div class="rewiews__item__logo">
          <svg style="opacity: 0.8" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="person">
            <g data-name="Layer 2">
              <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person" fill="#4252CF"></path>
            </g>
          </svg>
        </div>
        <p class="rewiews__item__name">${usersRewiews.name}</p>
        <p class="rewiews__item__rewiew">${usersRewiews.item}</p>
      </div>
    `
}