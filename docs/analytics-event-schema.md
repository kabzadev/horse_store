# Analytics & Funnel Event Schema (Hydrogen Storefront)

This document defines the core events and parameters to implement in the Hydrogen storefront for GA4 (or equivalent), aligned with the Horse Store PRD.

## Core Events

### 1. `search`
- **When**: User submits a search from any search box.
- **Params**:
  - `search_term` (string) – user query.
  - `results_count` (int) – number of results.
  - `is_autocomplete` (bool) – true if from typeahead/autocomplete.

### 2. `filter_change`
- **When**: User changes a filter or sort on a collection/PLP.
- **Params**:
  - `collection_id` / `collection_handle` (string).
  - `filter_type` (string) – e.g., `discipline`, `price`, `brand`, `size`.
  - `filter_value` (string) – selected value.
  - `sort_by` (string, optional) – current sort.

### 3. `view_item`
- **When**: PDP view.
- **Params** (GA4 item schema recommended):
  - `item_id` (string) – Shopify product/variant ID.
  - `item_name` (string).
  - `item_category` / `item_category2` (string) – e.g., `Tack`, `Horse Care`.
  - `price` (number).
  - `source` (string) – `topdawg` or `local`.

### 4. `add_to_cart`
- **When**: User adds an item to cart.
- **Params**:
  - `item_id`, `item_name`, `item_category*`, `source`.
  - `quantity` (int).
  - `price` (number).

### 5. `view_cart`
- **When**: Cart page viewed.
- **Params**:
  - `items` (array) – GA4 items list (ids, names, qty, price, category, source).
  - `cart_value` (number).

### 6. `begin_checkout`
- **When**: User clicks checkout from cart.
- **Params**:
  - Same as `view_cart` items payload.
  - `cart_value` (number).

### 7. `purchase`
- **When**: Checkout complete (on Shopify thank-you or via webhook/redirect signal).
- **Params**:
  - `transaction_id` (string).
  - `value` (number).
  - `currency` (string).
  - `items` (array) – final purchased items.

## Implementation Notes
- Implement a small analytics utility in the Hydrogen app (e.g., `apps/storefront/app/lib/analytics.ts`) responsible for:
  - Initializing GA4 with a measurement ID from env.
  - Exposing typed helpers (`trackSearch`, `trackFilterChange`, `trackViewItem`, etc.).
- Use route loaders/actions and React effects to call these helpers so events fire reliably on navigation.
- In dev, validate via GA4 DebugView and log events to the console when `NODE_ENV !== 'production'`.
