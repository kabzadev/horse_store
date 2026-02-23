# Hydrogen Storefront Routes (MVP)

Planned route structure for the Hydrogen MVP storefront, derived from `docs/prd.md`.

## Top-Level
- `/` – Home: hero, featured collections, and key Learn content.
- `/search` – Search results with filters and sort.

## Shop by Category
- `/c/tack` – Tack & Equipment collection (PLP).
- `/c/grooming` – Horse Health & Grooming collection.
- `/c/barn` – Barn & Stable Supplies collection.
- `/c/rider` – Rider Apparel & Safety Gear collection.
- `/c/training` – Training Aids collection.

## Shop by Role
- `/r/rider`
- `/r/trainer`
- `/r/owner`
- `/r/gift-buyer`

## Shop by Use Case
- `/u/new-horse-starter`
- `/u/everyday-barn-essentials`
- `/u/show-ready`

## Product & Cart
- `/products/:handle` – Product detail page (PDP).
- `/cart` – Cart page.
- `/checkout` – Checkout handoff to Shopify (`mydevstore-8182`).

## Learn / Guides
- `/learn` – Learn hub.
- `/learn/new-horse-owner-checklist`
- `/learn/sizing-fit-guides`
- `/learn/seasonal-prep`
