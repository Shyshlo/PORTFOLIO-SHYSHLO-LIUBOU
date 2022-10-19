gsap.from(".navbar-brand", {opacity:0, duration: 10})
gsap.from(".navbar", {y:-50, opacity:0, duration: 3})




const myTags = [
    'Responsible', 'Reliables', 'Helpful',
    'Honest', 'Positive', 'Optimistic',
    'Hardworking', 'Attentive', 'Willing', 'Goal-Oriented', 'Careful', 'Self-Motivated'
];

var tagCloud = TagCloud('.content', myTags,{


    radius: 230,


    maxSpeed: 'slowly',
    initSpeed: 'slowly',


    direction: 165,


    keep: true

});






const myTagsReverse = [
    'JavaScript', 'CSS', 'HTML',
    'Bootstrap', 'Github', 'React',
    'Figma', 'GSAP', 'Node.js', 'Flexbox', 'SASS', 'SCSS'
];

var tagCloudReverse1 = TagCloud('.contentReverse', myTagsReverse,{


    radius: 240,
 // radius in px

    maxSpeed: 'slow',
    initSpeed: 'slow',
 // animation speed
  // slow, normal, fast

    direction: 165,


    keep: true

});



const myTagsRus1 = [
  'Ответственная', 'Надежная', 'Трудолюбивая',
  'Честная', 'Позитивная', 'Оптимист',
  'Усидчивая', 'Внимательная', 'Стрессоустойчивая', 'Целеустремленная', 'Заботливая', 'Саморазвивающаяся'
];

var tagCloudRus = TagCloud('.contentRus', myTagsRus1,{


  radius: 240,


  maxSpeed: 'slow',
  initSpeed: 'slow',


  direction: 165,


  keep: true

});




//далее стрелка подн вверх
const scrollTop = document.querySelector('#scrollTop');
window.onscroll = () => {
    if (window.scrollY > 600){
        scrollTop.classList.remove('scrollUp_hide');
    }
    else {scrollTop.classList.add('scrollUp_hide')}
};

scrollTop.onclick = ()=>{
    window.scrollTo(0,0);
}





//далее анимация
/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 90, //изменяется количество фигурок
        "density": {
          "enable": true,
          "value_area": 868
        }
      },
      "color": {
        "value": "#000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  








  
  /*//const english = document.querySelector('#english');
  //const russian = document.querySelector('#russian');


const aboutme = document.querySelector('.nav-link');
const skills = document.querySelector('.skills');
//const projects = document.querySelector('');
//const contact = document.querySelector('');

const letterl = document.querySelector('.letterl');
const letterI = document.querySelector('.letterI');
const letterU = document.querySelector('.letterU');
const letterB = document.querySelector('.letterB');
const letterO = document.querySelector('.letterO');
const letterUU = document.querySelector('.letterUU');
const letterS = document.querySelector('.letterS');
const letterH = document.querySelector('.letterH');
const letterY = document.querySelector('.letterY');
const letterSS = document.querySelector('.letterSS');
const letterHH = document.querySelector('.letterHH');
const letterLL = document.querySelector('.letterLL');
const letterOO = document.querySelector('.letterOO');

const titleQuotes = document.querySelector('.titleQuotes');
const prase1 = document.querySelector('.prase1');
const prase2 = document.querySelector('.prase2');
const prase3 = document.querySelector('.prase3');

const parAbout1 = document.querySelector('.parAbout1');

const projectsTitle = document.querySelector('.projectsTitle');

const app1 = document.querySelector('.app1');
const app2 = document.querySelector('.app2');
const app3 = document.querySelector('.app3');
const app4 = document.querySelector('.app4');
const app5 = document.querySelector('.app5');
const app6 = document.querySelector('.app6');
const app7 = document.querySelector('.app7');
const app8 = document.querySelector('.app8');
const app9 = document.querySelector('.app9');
const app10 = document.querySelector('.app10');

const contactTitle = document.querySelector('.contactTitle');

const phone = document.querySelector('.phone');




const myTagsRus = [
    'Ответственная', 'Надежная', 'Трудолюбивая',
    'Честная', 'Позитивная', 'Оптимист',
    'Усидчивая', 'Внимательная', 'Стрессоустойчивая', 'Целеустремленная', 'Заботливая', 'Саморазвивающаяся',
];

var tagCloudRus = TagCloud('.contentRus', myTagsRus,{


    radius: 240,


    maxSpeed: 'normal',
    initSpeed: 'normal',


    direction: 165,


    keep: true

});



//const content = document.querySelector('.content');


/*function removeClass(){
    content.classList.remove('content');
}
*/
/*function addClass(){
    skills.classList.add('contentRus');
}


english.addEventListener('click', () => {
 //skills.classList.add('content');
  
    aboutme.textContent = 'ABOUT ME';
    //skills.textContent = 'SKILLS';
    //projects.textContent = 'PROJECTS';
    //contact.textContent = 'CONTACT';
    letterl.textContent = 'L';
    letterI.textContent = 'I';
    letterU.textContent = 'U';
    letterB.textContent = 'B';
    letterO.textContent = 'O';
    letterUU.textContent = 'U';
    letterS.textContent = 'S';
    letterH.textContent = 'H';
    letterY.textContent = 'Y';
    letterSS.textContent = 'S';
    letterHH.textContent = 'H';
    letterLL.textContent = 'L';
    letterOO.textContent = 'O';

    titleQuotes.textContent = 'Favorite phrase:';
    prase1.textContent = 'No pain no gain';
    prase2.textContent = 'Sound body sound mind';
    prase3.textContent = 'Sky`s the limit!';

    parAbout1.textContent = 'I`m a junior front-end developer. I study programming and practice every day. I`m constantly working on improving my skills, learning new things, I bring any project I have started to the end, improving my professional level. At this moment I`ve been studying React.js and Node.js.';

    projectsTitle.textContent = 'MY PROJECTS';

    app1.textContent = 'LEARNING ENGLISH';
    app2.textContent = 'BARSELONA';
    app3.textContent = 'LET`S PLAY';
    app4.textContent = 'PIZZERIA';
    app5.textContent = 'MEDITATION';
    app6.textContent = 'RITCHEN TIMER';
    app7.textContent = 'SUSHI BAR';
    app8.textContent = 'APP FOR HUSBAND';
    app9.textContent = 'DREAM SALARY';
    app10.textContent = 'RESTAURANT';

    contactTitle.textContent = 'CONTACT';

    phone.textContent = 'phone: +375295580304';




});







russian.addEventListener('click', () => {
    /*removeClass();
    contentRus.classList('contectRus');
    contentRus.style.display = 'block';
    //addClass();

    aboutme.textContent = 'OБО МНЕ';
    //skills.textContent = 'НАВЫКИ';
    //projects.textContent = 'ПРОЕКТЫ';
    //contact.textContent = 'КОНТАКТЫ';
    
    letterl.textContent = 'Л';
    letterI.textContent = 'Ю';
    letterU.textContent = 'Б';
    letterB.textContent = 'О';
    letterO.textContent = 'В';
    letterUU.textContent = 'Ь';
    letterS.textContent = '➖';
    letterH.textContent = '➖';
    letterY.textContent = 'Ш';
    letterSS.textContent = 'И';
    letterHH.textContent = 'Ш';
    letterLL.textContent = 'Л';
    prase3.textContent = 'О';

    titleQuotes.textContent = 'Любимые фразы';
    prase1.textContent = 'Без труда не вытащишь и рыбку из пруда';
    prase2.textContent = 'В здоровом теле здоровый дух';
    prase3.textContent = 'Нет ничего невозможного!';

    parAbout1.textContent = 'Я младший фронтенд-разработчик. Я изучаю программирование и практикуюсь каждый день. Постоянно работаю над повышением своих навыков, учусь новому, довожу до конца любой начатый проект, повышая свой профессиональный уровень. На данный момент  изучаю React.js и Node.js.';
  
    projectsTitle.textContent = 'МОИ ПРОЕКТЫ';

    app1.textContent = 'ИЗУЧАЕМ АНГЛИЙСКИЙ';
    app2.textContent = 'БАРСЕЛОНА';
    app3.textContent = 'ПОИГРАЕМ?';
    app4.textContent = 'ПИЦЦЕРИЯ';
    app5.textContent = 'МЕДИТАЦИЯ';
    app6.textContent = 'КУХОННЫЙ ТАЙМЕР';
    app7.textContent = 'СУШИ БАР';
    app8.textContent = 'ПРИЛОЖЕИЕ ДЛЯ МУЖА';
    app9.textContent = 'ЗАРПЛАТА МЕЧТЫ';
    app10.textContent = 'РЕСТОРАН';

    contactTitle.textContent = 'КОНТАКТЫ';

    phone.textContent = 'тел: +375295580304';

});

*/






