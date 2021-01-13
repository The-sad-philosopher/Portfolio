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

// *  Scroll  * //

const sections = document.querySelectorAll<HTMLElement>('section[id]');

const on_window_scroll = () => {
  const scroll_y = window.pageYOffset;

  sections.forEach((section) => {
    const section_height = section.offsetHeight;
    const section_top = section.offsetTop - 50;
    const section_id = section.getAttribute('id');
    const active_section = section.querySelector(
      `.nav__menu a[href*=${section_id}]`
    );

    if (scroll_y > section_top && scroll_y <= section_top + section_height)
      active_section?.classList.add('active-link');
    else active_section?.classList.remove('active-link');
  });
};

window.addEventListener('scroll', on_window_scroll);

// *  Change Background Header  * //

function scroll_header(this: Window) {
  const header = document.getElementById('header');
  if (this.scrollY >= 200) header?.classList.add('scroll-header');
  else header?.classList.remove('scroll-header');
}

window.addEventListener('scroll', scroll_header);

// *   Show scroll to top btn  * //

function scroll_top(this: Window) {
  const scroll_top_btn = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scroll_top_btn?.classList.add('show-scroll');
  else scroll_top_btn?.classList.remove('show-scroll');
}

window.addEventListener('scroll', scroll_top);
