# Hydrogen Storefront MVP – Implementation Checklist

This document tracks the concrete implementation steps for the Hydrogen React storefront MVP described in `docs/prd.md`.

## 1. Environment Configuration
- [ ] Create `.env` in `apps/storefront` (never commit):
  - [ ] `SHOPIFY_STORE_DOMAIN=mydevstore-8182.myshopify.com`
  - [ ] `SHOPIFY_STOREFRONT_API_TOKEN=<storefront_api_token>`
  - [ ] `GA4_MEASUREMENT_ID=<ga4_measurement_id>` (for analytics).
- [ ] Add `.env` to `.gitignore` (repo root or `apps/storefront/.gitignore`).

## 2. Hydrogen App Structure
- [ ] Replace simple React shell with Hydrogen app structure:
  - [ ] Root layout with header, nav, and footer.
  - [ ] Routes for:
    - [ ] Home (`/`).
    - [ ] Collections/PLPs (e.g. `/collections/tack`, `/collections/grooming`, `/collections/barn-stable`, `/collections/rider`, `/collections/training`).
    - [ ] Product detail pages (`/products/:handle`).
    - [ ] Cart (`/cart`).
- [ ] Configure Shopify Storefront client using env config.

## 3. Navigation & IA (per PRD)
- [ ] Implement header navigation with:
  - [ ] Shop by Role.
  - [ ] Shop by Category.
  - [ ] Shop by Use Case.
- [ ] Implement footer with key links (policies, contact, Learn content).

## 4. Collections (PLPs)
- [ ] Fetch collections and products from `mydevstore-8182` for:
  - [ ] Tack & equipment.
  - [ ] Horse health & grooming.
  - [ ] Barn & stable.
  - [ ] Rider apparel & safety.
  - [ ] Training aids.
- [ ] Implement PLPs with:
  - [ ] Sorting (e.g. price, newest).
  - [ ] Basic filters (e.g. price range, category/discipline tags).

## 5. Product Detail Page (PDP)
- [ ] Display:
  - [ ] Product title, price, images.
  - [ ] Key attributes (size, color, discipline, material).
  - [ ] Sizing/fit section placeholder (to be filled from content).
  - [ ] Shipping/availability messaging (dropship vs local where available).
- [ ] Add-to-cart button wired to Hydrogen cart state.
- [ ] Related products section (e.g., same collection, tag-based).

## 6. Cart & Checkout Handoff
- [ ] Implement cart page with line items, quantities, subtotal.
- [ ] Ensure checkout button hands off to Shopify checkout for `mydevstore-8182`.
- [ ] Handle edge cases (empty cart, error states).

## 7. Analytics Instrumentation (GA4)
- [ ] Integrate GA4 client using `GA4_MEASUREMENT_ID` from env.
- [ ] Fire events for:
  - [ ] `view_item` on PDP view.
  - [ ] `add_to_cart` on add-to-cart.
  - [ ] `view_cart` on cart page.
  - [ ] `begin_checkout` on checkout start.
  - [ ] `purchase` / `checkout_complete` after redirect completion (where feasible).
  - [ ] `search` and `filter_change` on PLPs.

## 8. Deployment & Verification
- [ ] Add `README` section for local dev and env configuration.
- [ ] Deploy Hydrogen app (e.g. to a preview environment) pointing at `mydevstore-8182`.
- [ ] Verify:
  - [ ] At least 3 key collections load with real data.
  - [ ] PDPs show correct information for TopDawg-backed products once imported.
  - [ ] Cart → checkout works end-to-end.
  - [ ] GA4 receives core funnel events.

