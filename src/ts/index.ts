// *  toggle menu  * //
const toggle_menu = (menu_btn_id: string, nav_id: string) => {
  const menu_btn = document.getElementById(menu_btn_id);
  const nav = document.getElementById(nav_id);

  if (menu_btn && nav)
    menu_btn.addEventListener('click', () => nav.classList.toggle('show-menu'));
};

toggle_menu('nav-toggle', 'nav-menu');
