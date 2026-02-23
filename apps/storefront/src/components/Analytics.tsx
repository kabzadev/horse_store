import {useEffect} from 'react';

export function Analytics() {
  useEffect(() => {
    // Initial GA4 / tracking placeholder
    const measurementId = process.env.VITE_GA4_MEASUREMENT_ID;
    if (measurementId) {
      console.log(`[Analytics] Initializing GA4 with ID: ${measurementId}`);
    }
  }, []);

  return null;
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  console.log(`[Analytics Event] ${eventName}`, params);
  // Implementation for GA4 / chosen provider
};
