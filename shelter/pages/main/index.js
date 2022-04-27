//burger
function burgerMenu() {
  let menu = document.querySelector('.burger-menu');
  let button = document.querySelector('.burger-menu_button');

  let links = document.querySelectorAll('.burger-menu_link');
  let overlay = document.querySelector('.burger-menu_overlay');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });


  links.forEach((el) => el.addEventListener('click', () => toggleMenu()));
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
  //carousel
  const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector('#item-active');
let data;
async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/stage1/stream1/shelter/pets.json')
 data = await res.json();
 document.querySelector("#item-active").innerHTML = '';
 document.querySelector('#item-left').innerHTML='';
 document.querySelector('#item-right').innerHTML='';
 let arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const a = arr.splice(Math.floor(Math.random() * arr.length), 1);
  const b = arr.splice(Math.floor(Math.random() * arr.length), 1);
  const c = arr.splice(Math.floor(Math.random() * arr.length), 1);
 document.querySelector("#item-active").appendChild(createCardTemplate(a));
 document.querySelector("#item-active").appendChild(createCardTemplate(b));
 document.querySelector("#item-active").appendChild(createCardTemplate(c));
const d  = arr.splice(Math.floor(Math.random() * arr.length), 1);
const e = arr.splice(Math.floor(Math.random() * arr.length), 1);
const f = arr.splice(Math.floor(Math.random() * arr.length), 1);
 document.querySelector("#item-right").appendChild(createCardTemplate(d));
 document.querySelector("#item-right").appendChild(createCardTemplate(e));
 document.querySelector("#item-right").appendChild(createCardTemplate(f));
const j = arr.splice(Math.floor(Math.random() * arr.length), 1);
const k = arr.splice(Math.floor(Math.random() * arr.length), 1);
document.querySelector("#item-left").appendChild(createCardTemplate(j));
document.querySelector("#item-left").appendChild(createCardTemplate(k));
document.querySelector("#item-left").appendChild(createCardTemplate(b));
document.querySelector('.pets-list').innerHTML='';
}

getData();

let imageArray = document.querySelector('.image');

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
  
}





const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);

};


BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  }
   else
    {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  changedItem.innerHTML = "";
  let arr = [0, 1, 2, 3, 4, 5, 6, 7];
  const a = arr.splice(Math.floor(Math.random() * 8), 1);
  const b = arr.splice(Math.floor(Math.random() * 7), 1);
  const c = arr.splice(Math.floor(Math.random() * 6), 1);
  changedItem.appendChild(createCardTemplate(a));
  changedItem.appendChild(createCardTemplate(b));
  changedItem.appendChild(createCardTemplate(c));
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})

//Popup
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
    document.body.style.overflow ="hidden";
    
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
      document.body.style.overflow ="visible";
      modalWindow.innerHTML = '';
  
    } 
  }
  