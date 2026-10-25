'use strict';
const translations = [...document.querySelectorAll('[data-en], [data-en-label], [data-en-alt]')].map(el => ({el, html:el.innerHTML, label:el.getAttribute('aria-label'), alt:el.getAttribute('alt')}));
const languageControls = document.querySelector('.languages');
const sections = [...document.querySelectorAll('main section')];
languageControls.hidden = false;
function setLanguage(lang) {
  const anchor = sections.find(section => section.getBoundingClientRect().bottom > document.querySelector("header").getBoundingClientRect().bottom + 40);
  const offset = anchor?.getBoundingClientRect().top;
  document.documentElement.lang = lang;
  document.title = lang === 'en' ? 'Różanka 1a — Rainbow trout farm' : 'Różanka 1a — Hodowla pstrągów tęczowych';
  document.querySelector('meta[name="description"]').content = lang === 'en' ? 'Różanka 1a — rainbow trout farm. Website design for owner review.' : 'Różanka 1a — hodowla pstrągów tęczowych. Projekt strony do akceptacji.';
  translations.forEach(({el,html,label,alt}) => {
    if(el.hasAttribute('data-en')) el.innerHTML = lang === 'en' ? el.dataset.en : html;
    if(label !== null) el.setAttribute('aria-label',lang === 'en' ? el.dataset.enLabel : label);
    if(alt !== null) el.alt = lang === 'en' ? el.dataset.enAlt : alt;
  });
  languageControls.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === lang)));
  if(anchor) window.scrollBy({top:anchor.getBoundingClientRect().top-offset,behavior:'instant'});
}
languageControls.addEventListener('click',event => {
  const button = event.target.closest('button[data-lang]');
  if(button) setLanguage(button.dataset.lang);
});
