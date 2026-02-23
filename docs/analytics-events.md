# Hydrogen Storefront – Analytics & Funnel Events (GA4)

This document defines the core GA4 events and parameters for the horse/equine Hydrogen storefront.

## 1. Page View
- **Event name**: `page_view`
- **When**: On route change.
- **Params**:
  - `page_location`
  - `page_referrer`

## 2. Search
- **Event name**: `search`
- **When**: User submits a search.
- **Params**:
  - `search_term`
  - `results_count`

## 3. Filter Change
- **Event name**: `filter_change`
- **When**: User applies or clears a filter on a collection/PLP.
- **Params**:
  - `collection_id`
  - `collection_name`
  - `filter_type` (e.g., `discipline`, `price`, `brand`)
  - `filter_value`

## 4. Product Detail View (PDP)
- **Event name**: `view_item`
- **When**: PDP is viewed.
- **Params**:
  - `item_id` (Shopify product/variant id)
  - `item_name`
  - `item_category`
  - `price`
  - `source` (e.g., `topdawg`, `local_stock`)

## 5. Add to Cart
- **Event name**: `add_to_cart`
- **When**: User adds an item to cart.
- **Params**:
  - `item_id`
  - `item_name`
  - `item_category`
  - `quantity`
  - `price`
  - `source`

## 6. Cart View
- **Event name**: `view_cart`
- **When**: Cart page is viewed.
- **Params**:
  - `items_count`
  - `cart_value`

## 7. Checkout Start
- **Event name**: `begin_checkout`
- **When**: User clicks checkout from cart.
- **Params**:
  - `items_count`
  - `cart_value`

## 8. Purchase / Checkout Complete
- **Event name**: `purchase`
- **When**: Checkout completes and Shopify confirms order.
- **Params**:
  - `transaction_id`
  - `value`
  - `currency`
  - `items_count`

## Implementation Notes
- GA4 measurement ID and config will be provided via environment variables in the Hydrogen app.
- A small analytics utility module will be added to the app to send these events from React components and route handlers.
