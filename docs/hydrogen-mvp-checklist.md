# Hydrogen Storefront MVP Checklist

This checklist tracks the minimum implementation required for the Hydrogen MVP storefront against the Shopify dev store `mydevstore-8182`.

## 1. Environment & Config
- [ ] `.env` file created (not committed) with:
  - [ ] `SHOPIFY_STORE_DOMAIN=mydevstore-8182.myshopify.com` (or confirmed domain)
  - [ ] `SHOPIFY_STOREFRONT_API_TOKEN=<storefront_token>`
- [ ] Hydrogen app configured to read these values for Storefront API calls.

## 2. App Structure
- [ ] Hydrogen app scaffolded under `apps/storefront`.
- [ ] Layout component with header/nav/footer using PRD IA.
- [ ] Route structure for:
  - [ ] Home page.
  - [ ] Collections/PLP pages (tack, grooming, barn & stable, rider, training).
  - [ ] PDP (product detail) pages.
  - [ ] Cart page.

## 3. Navigation & IA
- [ ] Header navigation:
  - [ ] Shop by Role.
  - [ ] Shop by Category.
  - [ ] Shop by Use Case.
- [ ] Footer with basic links (policies, Learn content, contact).

## 4. Collections / PLP
- [ ] At least 3 key collections wired to real Shopify collections:
  - [ ] Tack & Equipment.
  - [ ] Horse Health & Grooming.
  - [ ] Barn & Stable (or similar per PRD).
- [ ] Filters and sorting implemented for PLP (e.g., price, brand, discipline).

## 5. PDP (Product Detail Page)
- [ ] Product data sourced from Shopify Storefront API.
- [ ] Display:
  - [ ] Images.
  - [ ] Title, price, availability.
  - [ ] Key attributes.
  - [ ] Sizing/fit section (for relevant products).
- [ ] Related products module wired (even if basic for MVP).

## 6. Cart & Checkout
- [ ] Add-to-cart from PDP.
- [ ] Cart page with line items, quantity updates, and totals.
- [ ] Checkout handoff to Shopify dev store working end-to-end.

## 7. Analytics Hooks (Stubs)
- [ ] Central analytics module ready to send GA4 events.
- [ ] Event call sites identified for:
  - [ ] Search.
  - [ ] Filter change.
  - [ ] PDP view.
  - [ ] Add-to-cart.
  - [ ] Cart view.
  - [ ] Checkout start.
  - [ ] Checkout complete.

## 8. Readme / Developer Experience
- [ ] `apps/storefront/README.md` updated with:
  - [ ] Setup instructions (env vars, Node version, npm commands).
  - [ ] How to run dev server.
  - [ ] How to run a basic manual test of nav → PLP → PDP → cart → checkout.

