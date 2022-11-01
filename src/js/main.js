AOS.init();

const swiperPopularCourse = new Swiper('.popular-course__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: '.swiper-button-prev-popular-course',
    nextEl: '.swiper-button-next-popular-course',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
      navigation: {
        prevEl: '',
        nextEl: '',
      },
    },
    685: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
        slidesPerView: 4,
    }
  }
});
 
const swiper = new Swiper('.instructors__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: '.swiper-button-prev-instructors',
    nextEl: '.swiper-button-next-instructors',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
      navigation: {
        prevEl: '',
        nextEl: '',
      },
    },
    685: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    }
  }
});

const swiperFeedBack = new Swiper('.feedback__swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: '.swiper-button-prev-feedback',
    nextEl: '.swiper-button-next-feedback',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
    },
    940: {
      slidesPerView: 2,
    },
    1375: {
      slidesPerView: 3,
    }
  }
});


const burgerButton = document.querySelector('.menu-burger-btn');
const blur = document.querySelector('.header__menu-blur');
const topInner = document.querySelector('.header__top-inner');

burgerButton.onclick = () => {
  burgerButton.classList.toggle('menu-burger-btn--active');
  topInner.classList.toggle('header__top-inner--active');
  blur.classList.toggle('header__menu-blur--active');
};

blur.onclick = () => {
  burgerButton.classList.remove('menu-burger-btn--active');
  topInner.classList.remove('header__top-inner--active');
  blur.classList.remove('header__menu-blur--active');
};


const buttonUp = {
  el: document.querySelector('.button-up'),
  show() {
    this.el.classList.remove('button-up_hide');
  },
  hide() {
    this.el.classList.add('button-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.button-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

buttonUp.addEventListener();
