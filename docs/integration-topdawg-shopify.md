# TopDawg <> Shopify Integration Plan (`mydevstore-8182`)

This document tracks the integration steps for connecting TopDawg to the `mydevstore-8182` Shopify dev store, importing a starter equine catalog, and running a full test order end-to-end.

## Checklist (High-Level)
1. Install and authorize the TopDawg app on `mydevstore-8182`.
2. Connect the existing TopDawg reseller account to the Shopify app.
3. Configure catalog import settings (equine-focused suppliers/categories only).
4. Import 20–30 horse/equine SKUs as draft products into Shopify and tag them appropriately (e.g., `source:topdawg`, `category:horse`, discipline tags).
5. Verify inventory, pricing, and shipping methods.
6. Place a test order from the Hydrogen storefront (or a standard theme) using one of the imported SKUs.
7. Confirm order appears in TopDawg, is processed, and returns tracking information to Shopify.
8. Document any integration quirks, limitations, or required manual steps.

## Access Needed
- Shopify admin access for `mydevstore-8182` (to install apps and view orders).
- TopDawg account access (or a shared session) to connect and configure the integration.

## Open Questions
- Preferred tags/collections for imported TopDawg SKUs.
- Whether test orders should use a specific address/payment method.
