/**
 * Safe Google Analytics 4 custom event tracking helper
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...eventParams,
      timestamp: new Date().toISOString()
    });
  }
};
