document.getElementById('date').innerHTML = (new Date()).getFullYear();

const leftMenu = document.getElementById('mySidenav');
const rightMenu = document.getElementById('mySidenav2');

// Lista todos os itens da determinada classe, e se ele for clicado fecha o menu.
const leftItem = document.querySelectorAll('.left-item');
const rightItem = document.querySelectorAll('.right-item');

leftItem.forEach(target => {
    target.addEventListener('click', () => {
        // console.log(target);
        closeNav();
    });
});

rightItem.forEach(target => target.addEventListener('click', () => closeNav2()));


function openNav() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        leftMenu.style.width = '100%';
    } else {
        leftMenu.style.width = '40%';
    }
}
  
function closeNav() {
    leftMenu.style.width = '0';
}
  
function openNav2() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        rightMenu.style.width = '100%';
    } else {
        rightMenu.style.width = '40%';
    }
}
  
function closeNav2() {
    rightMenu.style.width = '0';
}


// Função Para Botão de voltar ao topo
const backToTopButton = document.querySelector('.back-to-top');

const backToTop = () => {
    if (window.scrollY >= 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', function () {
    backToTop();
});


//Scroll Suave
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

//Scroll para o topo
const topo = document.querySelectorAll('.back-to-top');
function getScrollTopByHrefTopo(element) {
	const id = '#top';
	return document.querySelector(id).offsetTop;
}

function scrollToIdOnClickTopo(event) {
	event.preventDefault();
	const to = getScrollTopByHrefTopo(event.currentTarget)- 80;
	scrollToPosition(to);
}

topo.forEach(item => {
	item.addEventListener('click', scrollToIdOnClickTopo);
});