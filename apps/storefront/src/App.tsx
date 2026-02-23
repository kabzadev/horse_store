import React from 'react';
import { Analytics, trackEvent } from './components/Analytics';

export function App() {
  const handleNavClick = (role: string) => {
    trackEvent('nav_click', { role });
  };

  return (
    <div>
      <Analytics />
      <header>
        <h1>Horse Store – Hydrogen MVP</h1>
        <nav>
          <ul>
            <li onClick={() => handleNavClick('Shop by Role')}>Shop by Role</li>
            <li onClick={() => handleNavClick('Shop by Category')}>Shop by Category</li>
            <li onClick={() => handleNavClick('Shop by Use Case')}>Shop by Use Case</li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Placeholder Hydrogen storefront shell. Next steps: wire to Shopify dev store
          `mydevstore-8182` and implement real collections, PDPs, cart, and checkout
          per docs/prd.md.
        </p>
      </main>
    </div>
  );
}
