// const offer__slide = document.querySelectorAll(".offer__slide");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");
// const photo =document.querySelector(".photo");
// const photos = Array.from(photo.querySelectorAll('img'));
// const PhotoCount = photo.length;
// let i =0;

// prev.addEventListener('click' , showPreviousPhoto);
// next.addEventListener('click' , showNextPhoto);


// function showPreviousPhoto() {
//     i =( i -1 + PhotoCount) % PhotoCount;
//     updatephoto();
// }


// function showNextPhoto() {
//     i =( i + 1) % PhotoCount;
//     updatephoto();
// }


// function updatephoto (){
//     photos.forEach((slide, index) => {
//         if ( index === i ) {
//             slide.style.display = 'block';

//         }else{
//             slide.style.display = 'none'; 
//         }
//     })
// }

// updatephoto();


// Получаем элементы слайдера и изображения
const offer__slide = document.querySelectorAll(".offer__slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const photo = document.querySelector(".photo");
const photos = Array.from(photo.querySelectorAll('img')); // Массив всех изображений
const PhotoCount = photos.length; // Количество изображений

let i = 0; // Индекс текущего изображения

// Обработчики для кнопок "Prev" и "Next"
prev.addEventListener('click', showPreviousPhoto);
next.addEventListener('click', showNextPhoto);

// Функция для отображения предыдущего фото
function showPreviousPhoto() {
    i = (i - 1 + PhotoCount) % PhotoCount; // Переходим к предыдущему фото с учетом цикла
    updatephoto();
}

// Функция для отображения следующего фото
function showNextPhoto() {
    i = (i + 1) % PhotoCount; // Переходим к следующему фото с учетом цикла
    updatephoto();
}

// Функция для обновления отображаемого фото
function updatephoto() {
    photos.forEach((slide, index) => {
        if (index === i) {
            slide.style.display = 'block'; // Показываем текущий слайд
        } else {
            slide.style.display = 'none'; // Скрываем остальные
        }
    });
}

// Инициализация: показываем первый слайд
updatephoto();



// for (let i = 0; i < offer__slide.length; i++) {
//   offer__slide[i].style.display = `none`;
// }
// offer__slide[0].style.display = `block`;

// next.addEventListener("click", () => {
//   if (i < 3) {
//     offer__slide[i].style.display = "none";
//     i++
//     offer__slide[i].style.display = "block";
//   } else {
//     offer__slide[i].style.display = `none`;
//     offer__slide[i].style.display = `block`;
//   }
// });

// prev.addEventListener("click", () => {
//   if (i > 0) {
//     offer__slide[i].style.display = `none`;
//     i--;
//     offer__slide[i].style.display = `block`;
//   } else {
//     offer__slide[i].style.display = `none`;
//     i=3;
//     offer__slide[i].style.display = `block`;
//   }
// });



