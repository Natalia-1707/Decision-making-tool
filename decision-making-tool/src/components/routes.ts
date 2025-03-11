export const routes = {
  firstPage: '#options',
  secondPage: '#decision-picker',
};

let firstPage: HTMLElement | null = null;
let secondPage: HTMLElement | null = null;

export function setPages(first: HTMLElement, second: HTMLElement) {
  firstPage = first;
  secondPage = second;
}

export function navigateToPage(page: 'first' | 'second') {
  window.location.hash = routes[`${page}Page`];
  updatePageView();
}

export function updatePageView() {
  const hash = window.location.hash;

  if (hash === routes.firstPage) {
    if (firstPage) firstPage.style.display = 'flex';
    if (secondPage) secondPage.style.display = 'none';
  } else if (hash === routes.secondPage) {
    if (firstPage) firstPage.style.display = 'none';
    if (secondPage) secondPage.style.display = 'flex';
  }
}

window.addEventListener('hashchange', updatePageView);

document.addEventListener('DOMContentLoaded', updatePageView);
