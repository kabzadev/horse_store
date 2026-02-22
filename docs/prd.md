# Horse Store PRD (Hydrogen + Shopify + TopDawg)

> Canonical product requirements document for the horse/equine Shopify store using a Hydrogen (React) storefront + Shopify back office, with TopDawg as the primary dropshipper.

## 1. Overview & Objectives
- Build a dropshipping-first Shopify store focused on horse/equine products for owners, riders, trainers, and enthusiasts.
- Use a Hydrogen React storefront backed by Shopify for catalog, checkout, and admin.
- Primary KPIs (first 4 weeks post-launch):
  - Conversion rate (store-wide) uplift vs. baseline.
  - Average order value (AOV).
  - Email/SMS capture rate.
  - Repeat purchase rate for consumables.

## 2. Target Users & Personas
- New horse owner stocking essentials.
- Competitive rider (English/Western) buying specialized tack and show gear.
- Trainer/barn manager buying barn and training supplies in bulk.
- Gift buyer (family/friends of riders and owners).

## 3. Product Catalog & Taxonomy
- Core categories:
  - Tack & Equipment.
  - Horse Health & Grooming.
  - Barn & Stable Supplies.
  - Rider Apparel & Safety Gear.
  - Training Aids.
  - Gifts & Lifestyle.
- Model: dropship-first via TopDawg; local-stock SKUs are an edge case and clearly labeled as such.

## 4. Storefront Experience (Hydrogen React)
- Navigation and IA:
  - Shop by Role (Rider, Trainer, Owner, Gift Buyer).
  - Shop by Category (Tack, Horse Care, Barn & Stable, Rider Apparel, Training, Gifts).
  - Shop by Use Case (New Horse Starter Kits, Everyday Barn Essentials, Show & Competition Ready).
- Search and discovery:
  - On-site search with filters (discipline, size, color, brand, price, shipping speed).
  - Related products and bundles ("complete the look", starter kits).
- PDP requirements:
  - Rich images, specs, size/fit guides.
  - Clear shipping ETA, especially for dropship items.
  - Inventory/availability messaging.

## 5. Dropshipping & Inventory Model (TopDawg)
- TopDawg is the primary dropshipper.
- Requirements (to be detailed in later iterations):
  - Product and inventory sync.
  - Pricing rules and margins.
  - Shipping options and ETAs.
  - Order routing and fulfillment from Shopify to TopDawg.
- Local inventory:
  - Small subset of SKUs flagged as "Local Stock" with distinct shipping expectations.

## 6. Content & Education
- How-to guides and learning center content for new horse owners.
- Sizing and fit guides for tack and apparel.
- Safety checklists and basic care information to support purchasing decisions and reduce returns.

## 7. Non-Functional Requirements (Initial)
- Mobile-first experience.
- Reasonable performance targets (good Core Web Vitals, fast initial load for key pages).
- Basic accessibility and SEO baked into Hydrogen templates.

## 8. Analytics & KPIs
- Instrument events for:
  - Searches and filter usage.
  - Product views and add-to-cart.
  - Cart/checkout abandonment.
  - Bundle vs. single-item purchase behavior.
- Initial experiments: hero offers, starter kits vs. individual products, placement of educational content.

## 9. Risks & Open Questions (Initial)
- Dropshipper lead times and consistency.
- Product data quality (images, descriptions) from TopDawg.
- Handling out-of-stock or long-ETA items gracefully.
- Final decisions on launch categories and depth vs. breadth of catalog.

