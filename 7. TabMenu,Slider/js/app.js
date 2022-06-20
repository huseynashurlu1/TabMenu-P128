// let buttons = document.querySelectorAll('.tab-links button');
// let content = document.querySelectorAll('.tab-content div');
// // console.log(buttons);


// for(let btn of buttons) {
//     btn.addEventListener('click',function() {
//         let active = document.querySelector('.active');
//         active.classList.remove('active');
        
//         this.classList.add('active');

//         let index = this.getAttribute('id');
      
//         for(let div of content) {
//             if(div.getAttribute('id') === index) {
//                 div.classList.remove('d-none')
//             }
//             else{
//                 div.classList.add('d-none');
//             }
//         }

//     })
// }


// let mySlider = [
//     'photos/image1.jpg',
//     'photos/image2.png',
//     'photos/image3.jpg',
// ]

// let image = document.querySelector('.slider img');
// image.src = mySlider[0]; 


// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');

// let currentSlide = 0;
// next.onclick = function() {
//     currentSlide++;

//     if(currentSlide > mySlider.length - 1) {
//         currentSlide = 0;
//     }
//     image.src = mySlider[currentSlide];
// }

// prev.onclick = function() {
//     currentSlide--;
//     if(currentSlide === -1) {
//         currentSlide = mySlider.length - 1;
//     }
//     image.src = mySlider[currentSlide];
// }


// function AutoPlay() {
//     currentSlide++;

//     if(currentSlide > mySlider.length - 1) {
//         currentSlide = 0;
//     }
//     image.src = mySlider[currentSlide];
// }

// setInterval(() => {
//     AutoPlay(); 
// }, 2000);


// let div = document.getElementById('first');

// div.addEventListener('dragstart',function() {
//     console.log('Drag basladi');
// })

// div.addEventListener('dragend',function() {
//     console.log('Drag bitdi');
// })

// div.addEventListener('drag',function() {
//     console.log('Drag davam edir');
// })


// let area = document.getElementById('area');
// let icon = document.getElementById('icon');

// area.addEventListener('dragenter',function() {
//     area.style.border =  '5px dashed red';
//     icon.style.opacity = '1'
// })

// area.addEventListener('dragleave',function() {
//     area.style.border = '5px solid red';
//     icon.style.opacity = '0'
// })


// area.addEventListener('drop',function(e) {
//     // e.preventDefault();
//     console.log('salam');
// })


let dropArea = document.getElementById('DropArea');
let dragItem = document.querySelectorAll('.box');

dropArea.addEventListener('dragover',function(e) {
    e.preventDefault();
    this.style.border = '5px dashed black'
})

dropArea.addEventListener('dragleave',function(e) {
    e.preventDefault(); 
    this.style.border = '5px double black'
})


for(let i=0;i<dragItem.length;i++) {
    dragItem[i].addEventListener('dragstart',function(param){
        param.dataTransfer.setData('param',this.id);
        console.log(param);
    })
}

// let num = [1,4,8,2,15];

// num.sort((x,y) => {
//     return x+y
// })


// dropArea.addEventListener('drop',function(param) {
//     let index = param.dataTransfer.getData('param')
//     let x = document.getElementById(index);
//     dropArea.appendChild(x)
// })




// function Hello() {
//     let value = document.getElementById('input').value;
//     let Speech = new SpeechSynthesisUtterance('Hello dear user');
//     Speech.volume = 5;
//     Speech.rate = 0.5;
//     Speech.pitch = 0.1;
//     window.speechSynthesis.speak(Speech);
// }

// Hello();



function Generate() {
     let value = document.getElementById('input').value;
     let img = document.getElementById('qr');
     let api = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&amp;size=100x100`
     img.src = api;
    }