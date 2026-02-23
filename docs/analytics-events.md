# Hydrogen Storefront – Analytics & Funnel Event Schema (Draft)

This document defines the initial GA4 event schema and instrumentation plan for the Hydrogen storefront, aligned with the Horse Store PRD.

## 1. Event Overview

Core funnel and discovery events:

- `view_home` – landing on the storefront home page.
- `view_collection` – viewing a PLP/collection (e.g., Tack, Grooming, Barn & Stable, Rider, Training).
- `view_item` – viewing a PDP for a single product.
- `add_to_cart` – adding an item to cart.
- `view_cart` – viewing the cart.
- `begin_checkout` – starting checkout from the cart.
- `purchase` – checkout completed.
- `search` – performing a search from site search.
- `filter_change` – applying/removing a filter on a collection page.

## 2. Common Parameters

For all commerce-related events, capture (when available):

- `product_id` / `item_id`
- `item_name`
- `item_category` (e.g., Tack, Rider Apparel)
- `item_brand` (where applicable)
- `price`
- `currency`
- `quantity`
- `source` (e.g., `topdawg`, `local_stock`)

For navigation and funnel context:

- `collection_id`
- `collection_name`
- `search_term`
- `filter_type` and `filter_value`
- `step` (for checkout steps if we extend beyond `begin_checkout`/`purchase`).

## 3. Event Definitions

### 3.1 `view_home`
- **When**: Hydrogen renders the home page.
- **Params**: none required; optionally `experiment_variant` if we A/B test hero layouts.

### 3.2 `view_collection`
- **When**: a collection/PLP route is rendered.
- **Params**:
  - `collection_id`
  - `collection_name`
  - `item_count` (number of visible items)

### 3.3 `view_item`
- **When**: a PDP is rendered.
- **Params** (per GA4 `view_item` recommendations):
  - `items: [{ item_id, item_name, item_category, item_brand, price, currency, quantity: 1, source }]`

### 3.4 `add_to_cart`
- **When**: user clicks Add to Cart on PDP or quick-add.
- **Params**:
  - `items: [{ item_id, item_name, item_category, item_brand, price, currency, quantity, source }]`

### 3.5 `view_cart`
- **When**: cart page or cart drawer is opened.
- **Params**:
  - `items: [...]` (current cart contents)

### 3.6 `begin_checkout`
- **When**: user clicks checkout from cart.
- **Params**:
  - `items: [...]`
  - `value` (cart total)
  - `currency`

### 3.7 `purchase`
- **When**: checkout completes and we get confirmation on the storefront side (if available) or via Shopify/GA integration.
- **Params**:
  - `transaction_id`
  - `value`
  - `currency`
  - `tax`
  - `shipping`
  - `coupon`
  - `items: [...]`

### 3.8 `search`
- **When**: user performs a search.
- **Params**:
  - `search_term`
  - `result_count`

### 3.9 `filter_change`
- **When**: user applies or clears a filter on PLP.
- **Params**:
  - `collection_id`
  - `collection_name`
  - `filter_type` (e.g., `category`, `price`, `discipline`, `brand`)
  - `filter_value`

## 4. Implementation Notes (Hydrogen)

- Introduce a small analytics module in the Hydrogen app (e.g., `apps/storefront/app/analytics.ts`) that:
  - Reads GA4 Measurement ID from env (e.g., `VITE_GA_MEASUREMENT_ID`).
  - Exposes helper functions: `trackPageView`, `trackEvent`.
  - No PII; respect Do Not Track if configured.
- Use React hooks/route-level loaders to fire `view_*` events on route transitions.
- Fire commerce events from add-to-cart handlers and cart/checkout actions.

## 5. Next Steps

- Confirm GA4 property and Measurement ID for the dev storefront.
- Wire the analytics module into the Hydrogen app shell.
- Validate events with GA4 DebugView and attach screenshots to the analytics task.
