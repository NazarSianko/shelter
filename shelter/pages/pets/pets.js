function burgerMenu() {
    /*let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');*/
    let menu = document.querySelector('.burger-menu');
    let button = document.querySelector('.burger-menu_button');
    //let lines = document.querySelector('.burger-menu_lines');
    let links = document.querySelectorAll('.burger-menu_link');
    let overlay = document.querySelector('.burger-menu_overlay');
  
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    links.forEach((e) => e.addEventListener('click', () => toggleMenu()));
   
  
    links.addEventListener('click', () => toggleMenu());
    overlay.addEventListener('click', () => toggleMenu());
  
    function toggleMenu() {
      menu.classList.toggle('burger-menu_active');
  
      if (menu.classList.contains('burger-menu_active')) {
        document.body.style.overflow ="hidden";
      } else {
        document.body.style.overflow ="visible";
      }
    }
  }
  
  burgerMenu();
 let data;
async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/stage1/stream1/shelter/pets.json')
 data = await res.json();
 
 let arr = [0, 1, 2, 3, 4, 5, 6, 7];
 /*
  const a = arr.splice(Math.floor(Math.random() * arr.length), 1);
  const b = arr.splice(Math.floor(Math.random() * arr.length), 1);
  const c = arr.splice(Math.floor(Math.random() * arr.length), 1);
const d  = arr.splice(Math.floor(Math.random() * arr.length), 1);
const e = arr.splice(Math.floor(Math.random() * arr.length), 1);
const f = arr.splice(Math.floor(Math.random() * arr.length), 1);
const j = arr.splice(Math.floor(Math.random() * arr.length), 1);
const k = arr.splice(Math.floor(Math.random() * arr.length), 1);
document.querySelector('.pets-list').innerHTML='';
document.querySelector('.pets-list').append(createCardTemplate(a))
document.querySelector('.pets-list').append(createCardTemplate(b))
document.querySelector('.pets-list').append(createCardTemplate(c))
document.querySelector('.pets-list').append(createCardTemplate(d))
document.querySelector('.pets-list').append(createCardTemplate(e))
document.querySelector('.pets-list').append(createCardTemplate(f))
document.querySelector('.pets-list').append(createCardTemplate(j))
document.querySelector('.pets-list').append(createCardTemplate(k))*/

}

getData();
/*
const createCardTemplate = (n) => {
    let card = document.createElement("div");
    card.classList.add("friends-card");
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    imageDiv.classList.add('card-img');
    image.classList.add('image');
    let cardName = document.createElement('div');
    cardName.classList.add('card-name');
    let cardPName = document.createElement('p');
    let cardBtn = document.createElement('button');
    cardBtn.innerText = "Learn more";
    cardBtn.classList.add('card-btn');
    card.append(imageDiv);
    imageDiv.append(image);
    card.append(cardName);
    cardPName.classList.add('pet-name');
    cardPName.innerText = data[n].name;
    image.src = data[n].img;
    cardName.append(cardPName);
    card.append(cardBtn);
    card.setAttribute('data',`${n}`);
    image.setAttribute('data',`${n}`);
  cardBtn.setAttribute('data',`${n}`);
  cardPName.setAttribute('data',`${n}`);
    return card;
    
  } */
  const modalWindow = document.querySelector('.modal-window');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const main = document.querySelector('.modal');
let cardPet = document.querySelector(".friends-card");

let overlay = document.querySelector('.modal-overlay');
const modalAbout = document.querySelector('.modal-about');
function activeModal (e) {
  if (e.target.classList.contains('friends-card') || e.target.classList.contains('image') ||  e.target.classList.contains('pet-name') || e.target.classList.contains('card-btn')) {
    modalWindow.classList.add('modal-active');
   // modalOverlay.classList.add('modal-active');
    closeBtn.classList.add('active-closebtn');
    main.classList.add('display-flex');
    $('body').css('overflow', 'hidden');
    
    const modalAbout = document.createElement('div');
    const modalFlex = document.createElement('div');
    const modalImg = document.createElement('img');
    const modalName = document.createElement('div');
    const modalText = document.createElement('p');
    const dogType = document.createElement('div');
    const modalDescription = document.createElement('div');
    const modalList = document.createElement('ul');
    modalList.classList.add('modal-list');
    const firstLi = document.createElement('li');
    const secondLi = document.createElement('li');
    const thirdLi = document.createElement('li');
    const fourthLi = document.createElement('li');
    modalFlex.classList.add('modal-flex');
    modalAbout.classList.add('modal-about');
 
    
    modalImg.classList.add('modal-img');
    modalImg.style.order = -5;
    modalAbout.order = 5;
    modalImg.src = data[e.target.getAttribute('data')].img;

   
    modalName.classList.add('modal-name');
   dogType.classList.add('dog-type');
   modalText.classList.add('pet');
   modalText.innerHTML = data[e.target.getAttribute('data')].name;
   dogType.textContent = data[e.target.getAttribute('data')].type + " - " + data[e.target.getAttribute('data')].breed;
   modalAbout.append(modalName,dogType);
   modalName.append(modalText);
    modalDescription.textContent= data[e.target.getAttribute('data')].description;
    modalDescription.classList.add('modal-text');
    modalAbout.append(modalDescription,modalList);
    modalWindow.append(modalFlex);
    modalFlex.append(modalImg,modalAbout);
    modalAbout.append(modalDescription,modalList);
    modalList.append(firstLi,secondLi,thirdLi,fourthLi);
    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');
    const thirdSpan = document.createElement('span');
    const fourthSpan = document.createElement('span');
    firstLi.append(firstSpan);
    secondLi.append(secondSpan);
   thirdLi.append(thirdSpan);
    fourthLi.append(fourthSpan);
    firstSpan.textContent = "Age: " + data[e.target.getAttribute('data')].age;
    secondSpan.textContent = "Inoculations: " + data[e.target.getAttribute('data')].inoculations;
    thirdSpan.textContent = "Diseases: " + data[e.target.getAttribute('data')].diseases;
    fourthSpan.textContent = "Parasites: " + data[e.target.getAttribute('data')].parasites;
   
  
  }

}

addEventListener('click',activeModal);

main.addEventListener('click', () => closeModal());
closeBtn.addEventListener('click', () => closeModal() );
modalWindow.addEventListener('click', (e) => {
  
  e.stopPropagation();

})
  function closeModal() {
   

    if (modalWindow.classList.contains('modal-active')) {
 
      modalWindow.classList.remove('modal-active');
     // modalOverlay.classList.remove('modal-active');
      closeBtn.classList.remove('active-closebtn');
      main.classList.remove('display-flex');
      $('body').css('overflow', 'visible');
      modalWindow.innerHTML = '';
  
    } 
  }
 
let activePage = document.querySelector('.pets-list');
// Узнать ширину экрана
let pageWidth =  activePage.clientWidth;
console.log(pageWidth)
let item1 = document.querySelector('.card-1');
let item2 = document.querySelector('.card-2');
let item3 = document.querySelector('.card-3');
let item4 = document.querySelector('.card-4');
let item5 = document.querySelector('.card-5');
let item6 = document.querySelector('.card-6');
let item7 = document.querySelector('.card-7');
let item8 = document.querySelector('.card-8');

let source = [item1, item2, item3, item4, item5, item6, item7, item8];

//Функция генерации случайного массива длиной 48, состоящего из 8 уникальных элементов
function generateArray(source) {
  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }

  let elements = source.slice();

  let result = [];
  for (let i = 1; i <= 6; i++) {
    shuffleArray(elements);
    result.push(...elements.slice()); //Из 6 маленьких массивов по 8 элементов делаем один большой 48 элементов
  }
  return result;
}

let array48 = generateArray(source); // Наш массив из 48 элементов

let pagination = {
  state: array48,
  pageSize: countCard(pageWidth), // Количество элементов на странице
  currentPage: 1,
  maxPage: Math.floor(array48.length / countCard(pageWidth)) // Считаем количество страниц
};


function getContent() { 
  let from = (pagination.currentPage - 1) * pagination.pageSize; // С какого индекса начинается отрисовка
  let to = from + pagination.pageSize; // По какой индекс отрисовывать

  return pagination.state.slice(from, to); //ВОзвращаем 
}

//Инициализация кнопок
let currentPage = document.querySelector('.stick-current');
let firstPage = document.querySelector('.stick-double-left');
let lastPage = document.querySelector('.stick-double-right');
let previousPage = document.querySelector('.stick-one-left');
let nextPage = document.querySelector('.stick-one-right');

//Функция для получения числа страничек
function countPage(width) {
  if (width >= 1200) {
    return 6
  }
  else if (  width < 1200) {
    return 8
  }
 else  {
    return 16
  }
}

//Функция для получения количества карточек на страничке
function countCard(width) {
  if (width >= 1200) {
    return 8
  }
else  if (708 <= width < 1200) {
    return 6
  }
else   {
    return 3
  }
}
console.log(countCard(pageWidth))
// Количество страничек в зависимости от ширины
let countPages = countPage(pageWidth)
console.log(countPages)
//Функции разных страничек
function STATEfirstPage() {
  pagination.currentPage = 1;
}

function STATElastPage() {
  pagination.currentPage = pagination.maxPage;
}

function STATEhasNextPage() {
  return pagination.currentPage !== pagination.maxPage;
}

function STATEnextPage() {
  if (STATEhasNextPage()) {
    pagination.currentPage += 1;
  } else {
    throw new Error(`Next page is not allowed at ${pagination.currentPage}`);
  }
}

function STATEhasPreviousPage() {
  return pagination.currentPage !== 1;
}

function STATEpreviousPage() {
  if (STATEhasPreviousPage()) {
    pagination.currentPage -= 1;
  } else {
    throw new Error(
      `Previous page is not allowed at ${pagination.currentPage}`
    );
  }
}

//Первая страничка
function setFirstPage() {
  STATEfirstPage()
  currentPage.textContent = '1';
  firstPage.classList.add('stick-off');
  previousPage.classList.add('stick-off');
  lastPage.classList.add('stick-on');
  nextPage.classList.add('stick-on');

  firstPage.classList.remove('stick-on');
  previousPage.classList.remove('stick-on');
  lastPage.classList.remove('stick-off');
  nextPage.classList.remove('stick-off');
}

//Последняя страничка страничка
function setLastPage() {
  STATElastPage()
  currentPage.textContent = countPages;
  firstPage.classList.add('stick-on');
  previousPage.classList.add('stick-on');
  lastPage.classList.add('stick-off');
  nextPage.classList.add('stick-off');

  firstPage.classList.remove('stick-off');
  previousPage.classList.remove('stick-off');
  lastPage.classList.remove('stick-on');
  nextPage.classList.remove('stick-on');
}

//Страничка вперед
function setNextPage() {
  STATEhasNextPage()
  STATEnextPage()
  if (Number(currentPage.textContent) === countPages) {
    setLastPage()
  }
  else {
    firstPage.classList.remove('stick-off');
    previousPage.classList.remove('stick-off');
    lastPage.classList.remove('stick-off');
    nextPage.classList.remove('stick-off');
    firstPage.classList.add('stick-on');
    previousPage.classList.add('stick-on');
    lastPage.classList.add('stick-on');
    nextPage.classList.add('stick-on');

    let current = Number(currentPage.textContent);
    current++
    currentPage.textContent = current;
    if (Number(currentPage.textContent) === countPages) {
      setLastPage()
    }
  }
}

//Страничка назад
function setPreviousPage() {
  STATEhasPreviousPage()
  STATEpreviousPage()
  if (currentPage.textContent === '1') {
    setLastPage()
  }
  else {
    firstPage.classList.remove('stick-off');
    previousPage.classList.remove('stick-off');
    lastPage.classList.remove('stick-off');
    nextPage.classList.remove('stick-off');
    firstPage.classList.add('stick-on');
    previousPage.classList.add('stick-on');
    lastPage.classList.add('stick-on');
    nextPage.classList.add('stick-on');

    let current = Number(currentPage.textContent);
    current--
    currentPage.textContent = current;
    if (currentPage.textContent === '1') {
      setFirstPage()
    }
  }
}

//Активность кнопочек на первой страничке
firstPage.addEventListener("click", function(e) {
  setFirstPage();
  render()
});

//Активность кнопочек на последней страничке
lastPage.addEventListener("click", function(e) {
  setLastPage()
  render()
});

//Активность кнопочек на следующей странице
nextPage.addEventListener("click", function(e) {
  setNextPage()
  render()
});

//Активность кнопочек на предыдущей
previousPage.addEventListener("click", function(e) {
  setPreviousPage()
  render()
});


// Отрисовка страничек
function render() {
  activePage.innerHTML = ''

  for (let card of getContent()) {
    activePage.append(card.cloneNode(true))
  }
}

// JSON И ДАННЫЕ

document.addEventListener('DOMContentLoaded', async () => {
  render()
});
  /*let count = 1;

  
  
   firstButton.classList.add('stick-off');
   secondButton.classList.add('stick-off');



   
 
 thirdButton.addEventListener('click',third
 )
 function third() {
  if (count <6) {
    getData();
    count++;
    countButton.textContent = count;
    firstButton.classList.remove('stick-off');
    secondButton.classList.remove('stick-off');
  }
  if (count == 6) {
    thirdButton.classList.add('stick-off');
    fourthButton.classList.add('stick-off');
   
  }
 }
 fourthButton.addEventListener('click',() => {
   count = 6;
   getData();
   countButton.textContent = count;
   fourthButton.classList.add('stick-off');
   thirdButton.classList.add('stick-off');
   firstButton.classList.remove('stick-off');
   secondButton.classList.remove('stick-off');
 }) 
 firstButton.addEventListener ('click', () => {
   if ( count >1) {
     
     getData();
     count = 1;
     countButton.textContent = count;
     firstButton.classList.add('stick-off');
     secondButton.classList.add('stick-off');
     thirdButton.classList.remove('stick-off');
     fourthButton.classList.remove('stick-off');
     
   }
 })
 secondButton.addEventListener('click', ()=> {
   if (count >= 1) {
     count--;
     getData();
     countButton.textContent = count;
     thirdButton.classList.remove('stick-off');
     fourthButton.classList.remove('stick-off');

   }
   if (count == 1) {
    firstButton.classList.add('stick-off');
    secondButton.classList.add('stick-off');
   }
 })
 const mediaQuery = window.matchMedia('(max-width: 1280px)')
if (mediaQuery.matches) {
  console.log(1);
  fourthButton.addEventListener('click',() => {
    count = 8;
    getData();
    countButton.textContent = count;
    fourthButton.classList.add('stick-off');
    thirdButton.classList.add('stick-off');
    firstButton.classList.remove('stick-off');
    secondButton.classList.remove('stick-off');
  }) 
    
 
  thirdButton.removeEventListener('click',third
  )
  function thirdPaginator() {
    if (count <8) {
    getData();
    count++;
    countButton.textContent = count;
    firstButton.classList.remove('stick-off');
    secondButton.classList.remove('stick-off');
  }
  if (count == 8) {
    thirdButton.classList.add('stick-off');
    fourthButton.classList.add('stick-off');
   
  }

  }
 thirdButton.addEventListener('click',thirdPaginator)
}
const secondMediaQuery = window.matchMedia('(max-width: 768px)')
if (secondMediaQuery.matches) {
  fourthButton.addEventListener('click',() => {
    count = 16;
    getData();
    countButton.textContent = count;
    fourthButton.classList.add('stick-off');
    thirdButton.classList.add('stick-off');
    firstButton.classList.remove('stick-off');
    secondButton.classList.remove('stick-off');
  }) 
  thirdButton.removeEventListener('click',thirdPaginator);
  thirdButton.addEventListener('click',()=> {
    if (count <16) {
      getData();
      count++;
      countButton.textContent = count;
      firstButton.classList.remove('stick-off');
      secondButton.classList.remove('stick-off');
    }
    if (count == 16) {
      thirdButton.classList.add('stick-off');
      fourthButton.classList.add('stick-off');
     
    }
  })
}*/