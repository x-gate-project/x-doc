// src/clientModules/browserLanguageDetection.js

export function onRouteDidUpdate({location, previousLocation}) {
  // Don't run on initial page load or on subsequent page navigations
  if (previousLocation && !window.localStorage.getItem('docusaurus-browser-language-detected')) {
    return;
  }

  // Don't redirect if we've already been here
  if (window.localStorage.getItem('docusaurus-browser-language-detected')) {
    return;
  }

  const supportedLocales = [
    'en',
    'de',
    'es',
    'fr',
    'ru',
    'zh',
    'ja',
    'ko',
    'hi',
    'ar'
  ];

  // Get browser languages
  const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
  
  // Find the first matching locale
  const matchedLocale = browserLanguages
    .map(lang => lang.split('-')[0]) // Convert formats like 'en-US' to 'en'
    .find(lang => supportedLocales.includes(lang));

  // If we have a match and it's not the current locale
  if (matchedLocale && matchedLocale !== 'en' && !location.pathname.startsWith(`/${matchedLocale}/`)) {
    // Set flag to avoid future redirects
    window.localStorage.setItem('docusaurus-browser-language-detected', 'true');
    
    // Redirect to the matched locale version
    window.location.pathname = `/${matchedLocale}${location.pathname}`;
  } else {
    // Mark as detected even if we don't redirect
    window.localStorage.setItem('docusaurus-browser-language-detected', 'true');
  }
}
