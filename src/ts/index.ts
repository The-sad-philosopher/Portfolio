import mixitup from 'mixitup';
import { gsap } from 'gsap';

// *  toggle menu  * //

const toggle_menu = () => {
  const menu_btn = document.getElementById('nav-toggle');
  const nav_menu = document.getElementById('nav-menu');

  menu_btn?.addEventListener('click', () =>
    nav_menu?.classList.toggle('show-menu')
  );
};

toggle_menu();

// * Remove menu * //

const nav_links = document.querySelectorAll('.nav__link');

const on_navlink_click = () => {
  const nav_menu = document.getElementById('nav-menu');
  nav_menu?.classList.remove('show-menu');
};

nav_links.forEach((navlink) =>
  navlink.addEventListener('click', on_navlink_click)
);

// *  Decorate link on scroll  * //

const sections = document.querySelectorAll<HTMLElement>('section[id]');

const on_window_scroll = () => {
  const scroll_y = window.pageYOffset;

  sections.forEach((section) => {
    const section_height = section.offsetHeight;
    const section_top = section.offsetTop - 50;
    const section_id = section.getAttribute('id');
    const active_link = document.querySelector(
      `.nav__menu a[href="#${section_id}"]`
    );

    if (scroll_y > section_top && scroll_y <= section_top + section_height)
      active_link?.classList.add('active-link');
    else active_link?.classList.remove('active-link');
  });
};

window.addEventListener('scroll', on_window_scroll);

// *  Change header theme  on scroll  * //

function scroll_header(this: Window) {
  const header = document.getElementById('header');
  if (this.scrollY >= 200) header?.classList.add('light-theme');
  else header?.classList.remove('light-theme');
}

window.addEventListener('scroll', scroll_header);

// *   Show scroll to top btn  * //

function scroll_top(this: Window) {
  const scroll_top_btn = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scroll_top_btn?.classList.add('show-scroll');
  else scroll_top_btn?.classList.remove('show-scroll');
}

window.addEventListener('scroll', scroll_top);

// *  Mix it Up  * //

const mixer = mixitup('.projects__container', {
  selectors: {
    target: '.projects__content',
  },
  animation: {
    duration: 400,
  },
});

// *  Set active project category * //

const projectCategories = document.querySelectorAll('.projects__item');

function setActiveProjectCategory(this: HTMLElement) {
  if (projectCategories) {
    projectCategories.forEach((projectCategory) =>
      projectCategory.classList.remove('active-project-category')
    );
    this.classList.add('active-project-category');
  }
}

projectCategories.forEach((projectCategory) =>
  projectCategory.addEventListener('click', setActiveProjectCategory)
);

// *  gsap  * //

gsap.from('.home__img', { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from('.home__intro', { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from('.home__greeting, .home__name, .home__profession', {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
});
gsap.from('.nav__logo, .nav__toggle', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
});
gsap.from('.nav__item', {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
});
gsap.from('.home__social-icon', {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2,
});
