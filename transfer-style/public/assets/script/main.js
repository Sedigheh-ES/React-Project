function box_menu_init(id) {
  const menu = document.getElementById(id);
  const menu_box = document.getElementById(id + '_box');
  const html = document.querySelector('html');
  let isOpen = false;

  menu.onclick = (e) => {
    e.stopPropagation();
    isOpen ? close() : open();
  };
  menu_box.onclick = (e) => {
    e.stopPropagation();
  };
  html.onclick = () => {
    close();
  };

  function close() {
    menu_box.classList.add('hidden');
    isOpen = false;
  }
  function open() {
    menu_box.classList.remove('hidden');
    isOpen = true;
  }
}

box_menu_init('all_categories');

new Swiper('#cat-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

new Swiper('.products_slider', {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: true,
  navigation: {
    nextEl: document.querySelector('.swiper-nav-left'),
    prevEl: document.querySelector('.swiper-nav-right')
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24
    }
  }
});
new Swiper('.products_slider2', {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: true,
  navigation: {
    nextEl: document.querySelector('.swiper-nav-left2'),
    prevEl: document.querySelector('.swiper-nav-right2')
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24
    }
  }
});
new Swiper('.best-seller-slider', {
  slidesPerView: 2,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 22
    }
  }
});

new Swiper('.deals-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 22
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 22
    }
  }
});

new Swiper('.top-sliders', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 22
    }
  }
});

document.querySelectorAll('.add-product').forEach((element) => {
  element.querySelector('button').addEventListener('click', function () {
    element.querySelector('.input-product__container').classList.remove('hidden');
    element.querySelector('.input-product__container').classList.add('flex');
    element.querySelector('button').classList.add('hidden');
    element.querySelector('input').value = 1;
  });
  element.querySelector('input').addEventListener('input', function (e) {
    if (Number(e.target.value) === 0) {
      element.querySelector('.input-product__container').classList.add('hidden');
      element.querySelector('.input-product__container').classList.remove('flex');
      element.querySelector('button').classList.remove('hidden');
    }
  });
  element.querySelector('.up').addEventListener('click', function (e) {
    element.querySelector('input').value = Number(element.querySelector('input').value) + 1;
  });
  element.querySelector('.down').addEventListener('click', function (e) {
    element.querySelector('input').value = Number(element.querySelector('input').value) - 1;
    if (Number(element.querySelector('input').value) === 0) {
      element.querySelector('.input-product__container').classList.add('hidden');
      element.querySelector('.input-product__container').classList.remove('flex');
      element.querySelector('button').classList.remove('hidden');
    }
  });
});

document.querySelectorAll('.toggle').forEach((element) => {
  element.onclick = () => {
    if (element.nextElementSibling.tagName === 'UL') {
      if (element.nextElementSibling.classList.contains('hidden')) {
        element.nextElementSibling.classList.remove('hidden');
        element.querySelector('i').classList.add('rotate-180');
        console.log(element.querySelector('i'));
      } else {
        element.nextElementSibling.classList.add('hidden');
        element.querySelector('i').classList.remove('rotate-180');
      }
    }
  };
});

document.getElementById('menu_btn').onclick = (e) => {
  e.stopPropagation();
  document.querySelector('.mobile-menu').style.left = 0;
  document.querySelector('body').classList.add('overflow-hidden');
};
document.querySelector('.mobile-menu').onclick = (e) => {
  e.stopPropagation();
};

document.querySelector('html').onclick = (e) => {
  document.querySelector('.mobile-menu').style.removeProperty('left');
  document.querySelector('body').classList.remove('overflow-hidden');
};

const timer = (selector, end) => {
  const calcRemaining = (end) => {
    const endDate = new Date(end).getTime();
    const currentDate = new Date().getTime();

    const timeRemaining = endDate - currentDate;

    const timeobj = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (timeRemaining > 0) {
      timeobj.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      timeobj.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      timeobj.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      timeobj.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    }
    return timeobj;
  };

  setInterval(() => {
    const remainTime = calcRemaining(end);
    const box = document.querySelector(selector);
    box.querySelector('.day').innerText = remainTime.days;
    box.querySelector('.hour').innerText = remainTime.hours;
    box.querySelector('.minute').innerText = remainTime.minutes;
    box.querySelector('.second').innerText = remainTime.seconds;
  }, 1000);
};

timer('.timer1', '2024-02-01 12:20:10');
