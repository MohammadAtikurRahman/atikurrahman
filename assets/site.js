(() => {
  'use strict';

  const root = document.documentElement;
  const nav = document.getElementById('site-nav');
  const menu = document.querySelector('.menu-toggle');
  // Only collapse navigation after its working toggle is available.
  if (menu && nav) {
    menu.hidden = false;
    root.classList.add('js');
    const closeMenu = (returnFocus = false) => {
      const wasOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
      if (returnFocus && wasOpen) menu.focus();
    };
    menu.setAttribute('aria-label', 'Open navigation');
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
    });
    if (typeof window.matchMedia === 'function') {
      const desktop = window.matchMedia('(min-width: 761px)');
      desktop.addEventListener?.('change', event => {
        if (event.matches) closeMenu();
      });
    }
  }

  const showcase = document.querySelector('.showcase-tabs');
  if (showcase) {
    const tabs = Array.from(showcase.querySelectorAll('[data-showcase]'));
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    // Keep every panel available when JavaScript is unavailable.
    if (tabs.length && panels.every(Boolean)) {
      showcase.setAttribute('role', 'tablist');
      showcase.hidden = false;
      const activate = (index, focus = false) => {
        tabs.forEach((tab, i) => {
          const selected = i === index;
          tab.setAttribute('role', 'tab');
          tab.setAttribute('aria-selected', String(selected));
          tab.tabIndex = selected ? 0 : -1;
          panels[i].setAttribute('role', 'tabpanel');
          panels[i].setAttribute('aria-labelledby', tab.id);
          panels[i].hidden = !selected;
        });
        if (focus) tabs[index].focus();
      };
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => activate(index));
        tab.addEventListener('keydown', event => {
          let next;
          if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
          if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = tabs.length - 1;
          if (next !== undefined) {
            event.preventDefault();
            activate(next, true);
          }
        });
      });
      activate(0);
    }
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const status = document.getElementById('copy-status');
  const message = document.getElementById('copy-message');
  const manual = document.getElementById('manual-copy');
  const dismiss = document.getElementById('dismiss-copy');
  let statusTimer;
  const hideStatus = () => {
    clearTimeout(statusTimer);
    if (status) status.hidden = true;
    if (manual) {
      manual.hidden = true;
      manual.value = '';
    }
  };
  dismiss?.addEventListener('click', hideStatus);

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.copy;
      if (!text || !status || !message || !manual) return;
      clearTimeout(statusTimer);
      button.disabled = true;
      let copied = false;
      try {
        if (!window.isSecureContext || !navigator.clipboard?.writeText) {
          throw new Error('Clipboard unavailable');
        }
        await navigator.clipboard.writeText(text);
        copied = true;
      } catch {
        // Keep an accessible, selectable fallback on insecure hosts or denied permission.
      } finally {
        button.disabled = false;
      }
      manual.hidden = copied;
      manual.value = copied ? '' : text;
      status.hidden = false;
      message.textContent = copied
        ? (text.includes('@') ? 'Email address copied.' : 'Install command copied.')
        : 'Select the text below and copy it.';
      if (copied) {
        statusTimer = setTimeout(hideStatus, 4500);
      } else {
        manual.focus();
        manual.select();
      }
    });
  });
})();
