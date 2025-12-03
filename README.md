# CartSync Authentication System

A mini project that demonstrates how modern e-commerce platforms handle guest sessions, persistent carts, and automatic cart merging after login.

## 🚀 Overview

CartSync Authentication System allows a user to browse the site without logging in, add items to the cart, close the browser, revisit the site, and still retain the same guest cart. When the user logs in, the system merges the guest cart with their authenticated user cart.

## ✨ Features

* Guest session creation on first visit
* Persistent cart for non-logged-in users
* Cart stored in database / cache / cookie (configurable)
* Automatic cart merge after authentication
* Basic login & registration system
* Clean REST API structure

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB / Redis (optional for session store)
* JWT or Session-based Auth
* Cookie handling

## 📦 Core Flow

1. User visits website → system creates a guest session
2. User adds items → stored as guest cart
3. User closes & revisits → cart restored
4. User logs in → guest cart is merged into user cart
5. Guest session is deleted or linked to the user



* Persistent cart logic
* Real e-commerce backend flows
