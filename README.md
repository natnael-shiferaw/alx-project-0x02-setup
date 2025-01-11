# Next.js Project Setup and Basics

## Introduction
This repository, `alx-project-0x02-setup`, is designed to demonstrate the foundational setup and structure of a Next.js project using TypeScript, ESLint, and Tailwind CSS. The project focuses on understanding a streamlined approach to building a scalable Airbnb clone without the `src` directory or App Router, while leveraging custom aliasing for cleaner imports.

## Project Setup
The project setup involves initializing a Next.js application using the following command:

```bash
npx create-next-app@latest airbnb-clone --typescript --eslint --tailwind
```

### Selected Options:
- `src` directory: No  
- App Router: No  
- Customize default import alias: Yes (`@/*` for simpler imports)  

This setup scaffolds a Next.js project, ensuring a robust foundation for developing an Airbnb clone with modular, reusable components and an optimized file structure.

---

## Project Structure Overview
The project is divided into specific directories, each fulfilling a dedicated role:

### 1. Root Directory
The root directory contains the essential folders and files necessary to run the application:
- **`pages/`**: Defines application routes.
- **`components/`**: Houses reusable UI components.
- **`public/`**: Stores static assets like images and icons.
- **`styles/`**: Manages global and component-specific CSS using Tailwind CSS.
- **`utils/`**: Contains helper functions for tasks such as API calls and formatting.
- **`hooks/`**: Custom React hooks for reusable logic and state management.
- **`context/`**: Implements global state management using the React Context API.
- **`assets/`**: Stores additional static assets like fonts and SVG icons.

---

### 2. Key Folders and Their Roles

#### **`pages/`**
Purpose: Defines the main application pages.  
Files:
- `index.tsx`: Home - Listing Page showcasing available properties.
- `[slug].tsx`: Dynamic Detail Page for property-specific information.
- `checkout.tsx`: Checkout Page for reviewing and confirming bookings.

#### **`components/`**
Purpose: Contains modular components for building the UI.  
Examples:
- `ListingCard.tsx`: Displays property details on the Home Page.
- `Navbar.tsx` & `Footer.tsx`: Layout components for navigation and footer.
- `DetailView.tsx`: Shows detailed property information.
- `CheckoutForm.tsx`: Form for handling checkout details.
- `ImageGallery.tsx`: Displays images in a gallery format.
- `ReviewSection.tsx`: Lists user reviews.

#### **`styles/`**
Purpose: CSS management with Tailwind CSS.  
Files:
- `globals.css`: Global styles and configurations.
- `tailwind.config.js` & `postcss.config.js`: Configuration files for Tailwind CSS.

#### **`utils/`**
Purpose: Utility functions for logic reuse.  
Files:
- `apiClient.ts`: Handles API requests.
- `formatPrice.ts`: Formats prices for display.

#### **`hooks/`**
Purpose: Custom hooks for logic reuse.  
Examples:
- `useListings.ts`: Fetches property listings.
- `useCart.ts`: Manages cart state.

#### **`context/`**
Purpose: Manages global state using React Context API.  
Examples:
- `CartContext.tsx`: Handles cart-related state.
- `UserContext.tsx`: Manages user authentication state.

---

### 3. Essential Configuration Files

#### **`tsconfig.json`**
Purpose: Configures TypeScript paths and aliases.  
Example Aliases:
```json
"paths": {
  "@/components/*": ["components/*"],
  "@/hooks/*": ["hooks/*"],
  "@/utils/*": ["utils/*"],
  "@/context/*": ["context/*"],
  "@/assets/*": ["assets/*"]
}
```

#### **`tailwind.config.js` & `postcss.config.js`**
Purpose: Tailwind CSS and PostCSS configuration for efficient styling.

---

