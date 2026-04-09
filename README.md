github=shuvro18

repo link = https://github.com/shuvro18/digitools-platform
<br>
live link : https://my-digitools-platform-a6.netlify.app/


# 🛠️ DigiTools - Premium Digital Workflow Platform

DigiTools is a modern React application designed for creators and professionals to access premium digital tools, AI-powered software, and design assets. The platform provides a seamless shopping experience where users can browse products, manage a cart, and explore transparent pricing plans.

## 🚀 Key Features

* **Dynamic Product Catalog**: Browse through a curated collection of digital tools with detailed features and tags (e.g., "Best Seller").
* **Interactive Shopping Cart**: Add tools to your cart with real-time feedback using `react-toastify`. Manage selections by removing items or clearing the entire cart.
* **Price Calculation**: Automatically calculates the total price of all selected digital products.
* **Toggle Views**: Easily switch between the "Products" grid and your "Cart" view.
* **Responsive Landing Page**: Includes a professional Hero section, Step-by-step guides, Rating statistics, and a full Footer.
* **Pricing Tiers**: Transparent "Starter", "Pro", and "Enterprise" pricing sections for different user needs.

## 🛠️ Technologies Used

* **React.js**: For building a component-based, high-performance UI.
* **Tailwind CSS**: For utility-first styling and a modern look.
* **DaisyUI**: For pre-designed, accessible UI components like buttons and cards.
* **React Icons**: For intuitive visual elements (BiDollar, FaCartPlus, etc.).
* **React-Toastify**: For professional success and error notifications.

## 📂 File Structure

```text
├── src/
│   ├── components/
│   │   ├── NavBar/          # Navigation with cart indicator
│   │   ├── Hero/            # Hero section with demo triggers
│   │   ├── Products/        # Product listing and cards
│   │   ├── CartSection/     # Cart management and pricing
│   │   ├── Pricing/         # Plan comparison section
│   │   └── Footer/          # Comprehensive multi-link footer
│   └── App.jsx              # Application entry point
└── README.md
```

⚙️ Core Logic
1. State Management: Uses React useState to track selected products and toggle between browsing and checkout.

2. Selection Validation: Prevents adding the same product twice and provides immediate visual warnings.

3. Data Filtering: Uses the .filter() method for efficient item removal from the cart.

4. Summary Logic: Uses .reduce() to calculate the final checkout amount dynamically.

🛠️ Installation
Clone the repository:


1. Clone the repository:
```bash
git clone [https://github.com/your-username/digitools-platform.git](https://github.com/your-username/digitools-platform.git)
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/402587f0-e48b-41bf-a3a9-045fda25262b" />
<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/af844c4c-e10c-4122-9b59-3922c4ae59ea" />
<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/3c6da67f-37a2-45e9-bb66-b81c76a5d62c" />


