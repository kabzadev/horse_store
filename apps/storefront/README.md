# Hydrogen Storefront (MVP)

This app will implement the MVP Hydrogen React storefront for the horse/equine Shopify store described in `docs/prd.md`.

## Planned MVP Scope
- Header + nav + footer per PRD (Shop by Role, Shop by Category, Shop by Use Case).
- Collection (PLP) pages for key categories: tack, grooming, barn & stable, rider, training.
- PDP layout with images, key attributes, sizing/fit section, and related products.
- Cart page and checkout handoff to the Shopify dev store `mydevstore-8182`.

## Next Steps
- Scaffold a Hydrogen application in this directory (e.g. using Shopify Hydrogen templates).
- Wire environment variables for the dev store domain and Storefront API token (not committed).
- Implement the IA, PLP, PDP, and cart/checkout flows per `docs/prd.md`.

## Proposed Route & Layout Structure (MVP)

- `app/root.tsx` – global layout shell (header/nav/footer), GA4 wiring, cart context.
- `app/routes/_index.tsx` – homepage with featured collections and Learn content entry points.
- `app/routes/collections.$handle.tsx` – generic PLP for collections (tack, grooming, barn & stable, rider, training) with filters/sort.
- `app/routes/products.$handle.tsx` – PDP template (images, attributes, sizing/fit, related products).
- `app/routes/cart.tsx` – cart summary and checkout CTA (handoff to Shopify checkout).

## Environment Configuration (Dev Store)

Expected env vars for `mydevstore-8182` (not committed):

- `SHOPIFY_STORE_DOMAIN` – e.g., `mydevstore-8182.myshopify.com`.
- `SHOPIFY_STOREFRONT_API_TOKEN` – Storefront API access token for Hydrogen.
- `SHOPIFY_STOREFRONT_API_VERSION` – e.g., `2024-10` (or current stable).
