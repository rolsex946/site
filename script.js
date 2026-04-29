/* ============================================
   GroceryList Pro — Complete Application Logic
   ============================================ */

(function () {
  "use strict";

  /* ---------- PRODUCT DATABASE ---------- */
  const PRODUCT_DB = {
    "Fresh Vegetables": {
      icon: "fa-carrot",
      color: "#E76F51",
      items: [
        { name: "Tomato", amount: 500, unit: "gm", priority: "high" },
        { name: "Potato", amount: 1, unit: "kg", priority: "high" },
        { name: "Onion", amount: 1, unit: "kg", priority: "high" },
        { name: "Green Chili", amount: 100, unit: "gm", priority: "medium" },
        {
          name: "Capsicum (Green)",
          amount: 250,
          unit: "gm",
          priority: "medium",
        },
        { name: "Capsicum (Red)", amount: 250, unit: "gm", priority: "medium" },
        { name: "Capsicum (Yellow)", amount: 250, unit: "gm", priority: "low" },
        { name: "Cucumber", amount: 500, unit: "gm", priority: "medium" },
        { name: "Carrot", amount: 500, unit: "gm", priority: "medium" },
        { name: "Cauliflower", amount: 1, unit: "pc", priority: "medium" },
        { name: "Cabbage", amount: 1, unit: "pc", priority: "medium" },
        { name: "Spinach", amount: 250, unit: "gm", priority: "medium" },
        {
          name: "Coriander Leaves",
          amount: 1,
          unit: "bunch",
          priority: "medium",
        },
        { name: "Mint Leaves", amount: 1, unit: "bunch", priority: "low" },
        { name: "Green Beans", amount: 250, unit: "gm", priority: "medium" },
        { name: "Bitter Gourd", amount: 250, unit: "gm", priority: "low" },
        { name: "Bottle Gourd", amount: 1, unit: "pc", priority: "low" },
        { name: "Ridge Gourd", amount: 500, unit: "gm", priority: "low" },
        { name: "Drumstick", amount: 250, unit: "gm", priority: "low" },
        { name: "Brinjal", amount: 500, unit: "gm", priority: "medium" },
        { name: "Radish", amount: 500, unit: "gm", priority: "low" },
        { name: "Turnip", amount: 500, unit: "gm", priority: "low" },
        { name: "Beetroot", amount: 500, unit: "gm", priority: "medium" },
        { name: "Pumpkin", amount: 500, unit: "gm", priority: "low" },
        { name: "Sweet Potato", amount: 500, unit: "gm", priority: "low" },
        { name: "Raw Banana", amount: 500, unit: "gm", priority: "low" },
        { name: "Baby Corn", amount: 200, unit: "gm", priority: "low" },
        { name: "Mushroom", amount: 200, unit: "gm", priority: "medium" },
        { name: "Broccoli", amount: 200, unit: "gm", priority: "medium" },
        { name: "Zucchini", amount: 250, unit: "gm", priority: "low" },
        { name: "Celery", amount: 1, unit: "bunch", priority: "low" },
        { name: "Lettuce", amount: 1, unit: "pc", priority: "low" },
        { name: "Ginger", amount: 100, unit: "gm", priority: "medium" },
        { name: "Garlic", amount: 100, unit: "gm", priority: "high" },
        { name: "Spring Onion", amount: 1, unit: "bunch", priority: "low" },
        { name: "French Beans", amount: 250, unit: "gm", priority: "medium" },
        { name: "Methi Leaves", amount: 250, unit: "gm", priority: "low" },
        { name: "Amla", amount: 250, unit: "gm", priority: "low" },
        { name: "Raw Papaya", amount: 500, unit: "gm", priority: "low" },
        { name: "Colocasia", amount: 500, unit: "gm", priority: "low" },
      ],
    },
    "Leafy Greens": {
      icon: "fa-leaf",
      color: "#588157",
      items: [
        {
          name: "Palak (Spinach)",
          amount: 250,
          unit: "gm",
          priority: "medium",
        },
        { name: "Methi (Fenugreek)", amount: 250, unit: "gm", priority: "low" },
        { name: "Amaranth Leaves", amount: 250, unit: "gm", priority: "low" },
        { name: "Mustard Leaves", amount: 250, unit: "gm", priority: "low" },
        { name: "Bathua Leaves", amount: 250, unit: "gm", priority: "low" },
        { name: "Curry Leaves", amount: 1, unit: "bunch", priority: "medium" },
        { name: "Dill Leaves", amount: 100, unit: "gm", priority: "low" },
        { name: "Pudina (Mint)", amount: 1, unit: "bunch", priority: "medium" },
        { name: "Lettuce", amount: 1, unit: "pc", priority: "low" },
        { name: "Kale", amount: 150, unit: "gm", priority: "low" },
        { name: "Arugula", amount: 100, unit: "gm", priority: "low" },
        { name: "Watercress", amount: 100, unit: "gm", priority: "low" },
      ],
    },
    "Fresh Fruits": {
      icon: "fa-apple-whole",
      color: "#E63946",
      items: [
        { name: "Apple", amount: 6, unit: "pcs", priority: "medium" },
        { name: "Banana", amount: 6, unit: "pcs", priority: "medium" },
        { name: "Orange", amount: 6, unit: "pcs", priority: "medium" },
        { name: "Mango", amount: 6, unit: "pcs", priority: "high" },
        { name: "Grapes (Green)", amount: 500, unit: "gm", priority: "medium" },
        { name: "Grapes (Black)", amount: 500, unit: "gm", priority: "medium" },
        { name: "Watermelon", amount: 1, unit: "pc", priority: "low" },
        { name: "Papaya", amount: 1, unit: "pc", priority: "medium" },
        { name: "Pomegranate", amount: 2, unit: "pcs", priority: "medium" },
        { name: "Guava", amount: 500, unit: "gm", priority: "low" },
        { name: "Pineapple", amount: 1, unit: "pc", priority: "low" },
        { name: "Lemon", amount: 6, unit: "pcs", priority: "high" },
        { name: "Custard Apple", amount: 2, unit: "pcs", priority: "low" },
        { name: "Chikoo (Sapota)", amount: 500, unit: "gm", priority: "low" },
        { name: "Kiwi", amount: 4, unit: "pcs", priority: "low" },
        { name: "Strawberry", amount: 250, unit: "gm", priority: "low" },
        { name: "Blueberry", amount: 125, unit: "gm", priority: "low" },
        { name: "Pear", amount: 4, unit: "pcs", priority: "low" },
        { name: "Peach", amount: 4, unit: "pcs", priority: "low" },
        { name: "Plum", amount: 4, unit: "pcs", priority: "low" },
        { name: "Cherry", amount: 250, unit: "gm", priority: "low" },
        { name: "Dragon Fruit", amount: 1, unit: "pc", priority: "low" },
        { name: "Coconut", amount: 1, unit: "pc", priority: "medium" },
        { name: "Jackfruit", amount: 500, unit: "gm", priority: "low" },
        { name: "Cranberry", amount: 100, unit: "gm", priority: "low" },
      ],
    },
    "Milk & Dairy": {
      icon: "fa-cheese",
      color: "#F4A261",
      items: [
        { name: "Full Cream Milk", amount: 1, unit: "litre", priority: "high" },
        { name: "Toned Milk", amount: 1, unit: "litre", priority: "high" },
        { name: "Skimmed Milk", amount: 1, unit: "litre", priority: "medium" },
        { name: "Curd / Yogurt", amount: 500, unit: "gm", priority: "high" },
        { name: "Paneer", amount: 200, unit: "gm", priority: "high" },
        { name: "Butter", amount: 100, unit: "gm", priority: "medium" },
        { name: "Ghee", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Cheese (Sliced)",
          amount: 200,
          unit: "gm",
          priority: "medium",
        },
        { name: "Cheese (Cube)", amount: 200, unit: "gm", priority: "medium" },
        { name: "Cream", amount: 200, unit: "ml", priority: "low" },
        { name: "Buttermilk", amount: 1, unit: "litre", priority: "low" },
        { name: "Flavored Yogurt", amount: 400, unit: "gm", priority: "low" },
        { name: "Condensed Milk", amount: 400, unit: "gm", priority: "low" },
        { name: "Khoya / Mawa", amount: 200, unit: "gm", priority: "low" },
      ],
    },
    "Bread & Bakery": {
      icon: "fa-bread-slice",
      color: "#BC6C25",
      items: [
        { name: "White Bread", amount: 1, unit: "pkt", priority: "high" },
        { name: "Whole Wheat Bread", amount: 1, unit: "pkt", priority: "high" },
        { name: "Brown Bread", amount: 1, unit: "pkt", priority: "medium" },
        {
          name: "Multigrain Bread",
          amount: 1,
          unit: "pkt",
          priority: "medium",
        },
        { name: "Milk Bread", amount: 1, unit: "pkt", priority: "medium" },
        { name: "Bun", amount: 4, unit: "pcs", priority: "medium" },
        { name: "Pav", amount: 8, unit: "pcs", priority: "medium" },
        { name: "Roti / Chapati", amount: 1, unit: "pkt", priority: "medium" },
        { name: "Naan", amount: 4, unit: "pcs", priority: "low" },
        { name: "Pita Bread", amount: 4, unit: "pcs", priority: "low" },
        { name: "Rusk", amount: 200, unit: "gm", priority: "low" },
        {
          name: "Cookies (Assorted)",
          amount: 200,
          unit: "gm",
          priority: "low",
        },
        { name: "Cake (Sliced)", amount: 1, unit: "pkt", priority: "low" },
        { name: "Croissant", amount: 2, unit: "pcs", priority: "low" },
      ],
    },
    "Rice & Grains": {
      icon: "fa-wheat-awn",
      color: "#C9A227",
      items: [
        { name: "Basmati Rice", amount: 1, unit: "kg", priority: "high" },
        { name: "Regular Rice", amount: 2, unit: "kg", priority: "high" },
        {
          name: "Sona Masoori Rice",
          amount: 2,
          unit: "kg",
          priority: "medium",
        },
        { name: "Poha (Thick)", amount: 500, unit: "gm", priority: "medium" },
        { name: "Poha (Thin)", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Suji / Semolina",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Maida", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Besan (Gram Flour)",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Wheat Flour", amount: 5, unit: "kg", priority: "high" },
        { name: "Ragi Flour", amount: 500, unit: "gm", priority: "low" },
        { name: "Jowar Flour", amount: 500, unit: "gm", priority: "low" },
        { name: "Bajra Flour", amount: 500, unit: "gm", priority: "low" },
        { name: "Corn Flour", amount: 200, unit: "gm", priority: "low" },
        { name: "Rice Flour", amount: 500, unit: "gm", priority: "low" },
        {
          name: "Dalia (Broken Wheat)",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Quinoa", amount: 250, unit: "gm", priority: "low" },
        { name: "Oats", amount: 500, unit: "gm", priority: "medium" },
      ],
    },
    "Lentils & Pulses": {
      icon: "fa-seedling",
      color: "#606C38",
      items: [
        { name: "Toor Dal", amount: 1, unit: "kg", priority: "high" },
        {
          name: "Moong Dal (Yellow)",
          amount: 500,
          unit: "gm",
          priority: "high",
        },
        {
          name: "Moong Dal (Green)",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Chana Dal", amount: 500, unit: "gm", priority: "high" },
        { name: "Masoor Dal (Red)", amount: 500, unit: "gm", priority: "high" },
        { name: "Urad Dal", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Rajma (Kidney Beans)",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Kabuli Chana", amount: 500, unit: "gm", priority: "medium" },
        { name: "Black Chana", amount: 500, unit: "gm", priority: "low" },
        { name: "Whole Moong", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Lobia (Black Eyed Peas)",
          amount: 500,
          unit: "gm",
          priority: "low",
        },
        { name: "Green Peas", amount: 500, unit: "gm", priority: "medium" },
        { name: "Dried White Peas", amount: 500, unit: "gm", priority: "low" },
        { name: "Moth Dal", amount: 500, unit: "gm", priority: "low" },
      ],
    },
    "Spices & Masala": {
      icon: "fa-pepper-hot",
      color: "#D62828",
      items: [
        { name: "Turmeric Powder", amount: 100, unit: "gm", priority: "high" },
        { name: "Red Chili Powder", amount: 100, unit: "gm", priority: "high" },
        { name: "Coriander Powder", amount: 100, unit: "gm", priority: "high" },
        { name: "Cumin Seeds", amount: 100, unit: "gm", priority: "high" },
        { name: "Mustard Seeds", amount: 100, unit: "gm", priority: "medium" },
        { name: "Fenugreek Seeds", amount: 50, unit: "gm", priority: "medium" },
        { name: "Garam Masala", amount: 50, unit: "gm", priority: "high" },
        {
          name: "Kitchen King Masala",
          amount: 50,
          unit: "gm",
          priority: "medium",
        },
        { name: "Biryani Masala", amount: 50, unit: "gm", priority: "medium" },
        { name: "Chat Masala", amount: 50, unit: "gm", priority: "low" },
        { name: "Sambar Masala", amount: 50, unit: "gm", priority: "low" },
        { name: "Rasam Powder", amount: 50, unit: "gm", priority: "low" },
        { name: "Black Pepper", amount: 50, unit: "gm", priority: "high" },
        { name: "Cloves", amount: 25, unit: "gm", priority: "medium" },
        {
          name: "Cardamom (Green)",
          amount: 25,
          unit: "gm",
          priority: "medium",
        },
        { name: "Cardamom (Black)", amount: 25, unit: "gm", priority: "low" },
        { name: "Cinnamon Sticks", amount: 25, unit: "gm", priority: "medium" },
        { name: "Bay Leaves", amount: 25, unit: "gm", priority: "medium" },
        { name: "Nutmeg", amount: 1, unit: "pc", priority: "low" },
        { name: "Mace", amount: 10, unit: "gm", priority: "low" },
        { name: "Star Anise", amount: 25, unit: "gm", priority: "low" },
        { name: "Fennel Seeds", amount: 100, unit: "gm", priority: "medium" },
        { name: "Ajwain", amount: 50, unit: "gm", priority: "medium" },
        {
          name: "Asafoetida (Hing)",
          amount: 25,
          unit: "gm",
          priority: "medium",
        },
        { name: "White Pepper", amount: 25, unit: "gm", priority: "low" },
        {
          name: "Kashmiri Chili Powder",
          amount: 50,
          unit: "gm",
          priority: "low",
        },
        { name: "Curry Powder", amount: 50, unit: "gm", priority: "low" },
        { name: "Panch Phoron", amount: 50, unit: "gm", priority: "low" },
        {
          name: "Idli/Dosa Batter Masala",
          amount: 50,
          unit: "gm",
          priority: "low",
        },
      ],
    },
    "Oils & Ghee": {
      icon: "fa-bottle-droplet",
      color: "#E9C46A",
      items: [
        { name: "Mustard Oil", amount: 1, unit: "litre", priority: "high" },
        { name: "Sunflower Oil", amount: 1, unit: "litre", priority: "high" },
        { name: "Soyabean Oil", amount: 1, unit: "litre", priority: "medium" },
        {
          name: "Olive Oil (Extra Virgin)",
          amount: 500,
          unit: "ml",
          priority: "medium",
        },
        {
          name: "Olive Oil (Regular)",
          amount: 500,
          unit: "ml",
          priority: "low",
        },
        { name: "Coconut Oil", amount: 500, unit: "ml", priority: "medium" },
        { name: "Groundnut Oil", amount: 1, unit: "litre", priority: "medium" },
        { name: "Sesame Oil", amount: 500, unit: "ml", priority: "low" },
        { name: "Palm Oil", amount: 1, unit: "litre", priority: "low" },
        { name: "Desi Ghee", amount: 500, unit: "gm", priority: "medium" },
        { name: "Vanaspati Ghee", amount: 500, unit: "gm", priority: "low" },
        { name: "Rice Bran Oil", amount: 1, unit: "litre", priority: "low" },
      ],
    },
    "Meat & Fish": {
      icon: "fa-drumstick-bite",
      color: "#9B2226",
      items: [
        { name: "Chicken (Whole)", amount: 1, unit: "kg", priority: "medium" },
        { name: "Chicken Breast", amount: 500, unit: "gm", priority: "medium" },
        { name: "Chicken Thigh", amount: 500, unit: "gm", priority: "medium" },
        { name: "Mutton", amount: 500, unit: "gm", priority: "medium" },
        { name: "Goat Meat", amount: 500, unit: "gm", priority: "medium" },
        { name: "Eggs", amount: 12, unit: "pcs", priority: "high" },
        { name: "Fish (Rohu)", amount: 500, unit: "gm", priority: "medium" },
        { name: "Fish (Katla)", amount: 500, unit: "gm", priority: "medium" },
        { name: "Fish (Pomfret)", amount: 500, unit: "gm", priority: "medium" },
        { name: "Fish (Salmon)", amount: 250, unit: "gm", priority: "low" },
        { name: "Prawns", amount: 250, unit: "gm", priority: "medium" },
        { name: "Crab", amount: 500, unit: "gm", priority: "low" },
        { name: "Squid", amount: 250, unit: "gm", priority: "low" },
        { name: "Keema (Mutton)", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Keema (Chicken)",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Fish Fillet", amount: 500, unit: "gm", priority: "low" },
        { name: "Dried Fish", amount: 100, unit: "gm", priority: "low" },
      ],
    },
    "Snacks & Packaged Food": {
      icon: "fa-cookie-bite",
      color: "#E76F51",
      items: [
        { name: "Potato Chips", amount: 1, unit: "pkt", priority: "low" },
        { name: "Namkeen Mixture", amount: 200, unit: "gm", priority: "low" },
        {
          name: "Biscuits (Parle-G)",
          amount: 1,
          unit: "pkt",
          priority: "medium",
        },
        { name: "Marie Biscuits", amount: 1, unit: "pkt", priority: "low" },
        { name: "Cream Biscuits", amount: 1, unit: "pkt", priority: "low" },
        { name: "Instant Noodles", amount: 1, unit: "pkt", priority: "low" },
        { name: "Popcorn", amount: 100, unit: "gm", priority: "low" },
        { name: "Peanuts (Roasted)", amount: 200, unit: "gm", priority: "low" },
        { name: "Cornflakes", amount: 500, unit: "gm", priority: "medium" },
        { name: "Muesli", amount: 500, unit: "gm", priority: "medium" },
        { name: "Granola Bar", amount: 6, unit: "pcs", priority: "low" },
        { name: "Mathri", amount: 200, unit: "gm", priority: "low" },
        { name: "Khakhra", amount: 200, unit: "gm", priority: "low" },
        { name: "Papad", amount: 1, unit: "pkt", priority: "low" },
        { name: "Sev", amount: 200, unit: "gm", priority: "low" },
        { name: "Maggi", amount: 1, unit: "pkt", priority: "low" },
        { name: "Trail Mix", amount: 200, unit: "gm", priority: "low" },
        {
          name: "Fried Chips (Banana)",
          amount: 100,
          unit: "gm",
          priority: "low",
        },
      ],
    },
    Beverages: {
      icon: "fa-mug-hot",
      color: "#6D4C41",
      items: [
        { name: "Tea (Regular)", amount: 500, unit: "gm", priority: "high" },
        { name: "Tea (Green)", amount: 100, unit: "gm", priority: "medium" },
        { name: "Coffee Powder", amount: 200, unit: "gm", priority: "high" },
        { name: "Instant Coffee", amount: 100, unit: "gm", priority: "medium" },
        { name: "Hot Chocolate Mix", amount: 200, unit: "gm", priority: "low" },
        { name: "Milk Powder", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Fruit Juice (Mango)",
          amount: 1,
          unit: "litre",
          priority: "low",
        },
        {
          name: "Fruit Juice (Orange)",
          amount: 1,
          unit: "litre",
          priority: "low",
        },
        {
          name: "Fruit Juice (Mixed)",
          amount: 1,
          unit: "litre",
          priority: "low",
        },
        {
          name: "Soft Drink (Coca Cola)",
          amount: 2,
          unit: "litre",
          priority: "low",
        },
        {
          name: "Mineral Water",
          amount: 1,
          unit: "bottle",
          priority: "medium",
        },
        { name: "Energy Drink", amount: 500, unit: "ml", priority: "low" },
        {
          name: "Buttermilk (Packaged)",
          amount: 500,
          unit: "ml",
          priority: "low",
        },
        { name: "Lassi (Packaged)", amount: 200, unit: "ml", priority: "low" },
        { name: "Coconut Water", amount: 1, unit: "pkt", priority: "low" },
        { name: "Rooh Afza", amount: 750, unit: "ml", priority: "low" },
      ],
    },
    "Dry Fruits & Nuts": {
      icon: "fa-tree",
      color: "#7F5539",
      items: [
        { name: "Almonds", amount: 250, unit: "gm", priority: "medium" },
        { name: "Cashew Nuts", amount: 250, unit: "gm", priority: "medium" },
        { name: "Raisins", amount: 200, unit: "gm", priority: "medium" },
        { name: "Walnuts", amount: 200, unit: "gm", priority: "medium" },
        { name: "Pistachios", amount: 200, unit: "gm", priority: "medium" },
        { name: "Dates", amount: 250, unit: "gm", priority: "medium" },
        { name: "Dried Figs", amount: 200, unit: "gm", priority: "low" },
        { name: "Apricots (Dried)", amount: 150, unit: "gm", priority: "low" },
        {
          name: "Cranberries (Dried)",
          amount: 100,
          unit: "gm",
          priority: "low",
        },
        { name: "Peanuts (Raw)", amount: 500, unit: "gm", priority: "low" },
        {
          name: "Mixed Dry Fruits",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Flax Seeds", amount: 100, unit: "gm", priority: "low" },
        { name: "Chia Seeds", amount: 100, unit: "gm", priority: "low" },
        { name: "Sunflower Seeds", amount: 100, unit: "gm", priority: "low" },
        { name: "Pumpkin Seeds", amount: 100, unit: "gm", priority: "low" },
      ],
    },
    "Sauces & Condiments": {
      icon: "fa-jar",
      color: "#DDA15E",
      items: [
        {
          name: "Tomato Ketchup",
          amount: 1,
          unit: "bottle",
          priority: "medium",
        },
        { name: "Soy Sauce", amount: 200, unit: "ml", priority: "medium" },
        { name: "Chili Sauce", amount: 200, unit: "ml", priority: "low" },
        { name: "Green Chutney", amount: 200, unit: "gm", priority: "low" },
        { name: "Tamarind Chutney", amount: 200, unit: "gm", priority: "low" },
        { name: "Mint Sauce", amount: 200, unit: "ml", priority: "low" },
        { name: "Mayonnaise", amount: 200, unit: "gm", priority: "medium" },
        { name: "Mustard Sauce", amount: 200, unit: "gm", priority: "low" },
        { name: "Vinegar", amount: 200, unit: "ml", priority: "medium" },
        { name: "Salsa", amount: 200, unit: "gm", priority: "low" },
        { name: "Pesto Sauce", amount: 100, unit: "gm", priority: "low" },
        { name: "Hot Sauce", amount: 100, unit: "ml", priority: "low" },
        { name: "Oyster Sauce", amount: 200, unit: "ml", priority: "low" },
        { name: "Fish Sauce", amount: 200, unit: "ml", priority: "low" },
        { name: "Honey", amount: 500, unit: "gm", priority: "medium" },
        { name: "Jam", amount: 500, unit: "gm", priority: "medium" },
        { name: "Peanut Butter", amount: 500, unit: "gm", priority: "low" },
        { name: "Chocolate Spread", amount: 200, unit: "gm", priority: "low" },
      ],
    },
    "Cleaning Supplies": {
      icon: "fa-spray-can-sparkles",
      color: "#457B9D",
      items: [
        { name: "Dish Wash Liquid", amount: 500, unit: "ml", priority: "high" },
        { name: "Dish Wash Bar", amount: 1, unit: "pc", priority: "medium" },
        { name: "Floor Cleaner", amount: 1, unit: "litre", priority: "high" },
        {
          name: "Bathroom Cleaner",
          amount: 500,
          unit: "ml",
          priority: "medium",
        },
        { name: "Glass Cleaner", amount: 500, unit: "ml", priority: "medium" },
        { name: "Laundry Detergent", amount: 1, unit: "kg", priority: "high" },
        { name: "Laundry Powder", amount: 1, unit: "kg", priority: "high" },
        { name: "Bleach", amount: 500, unit: "ml", priority: "low" },
        { name: "Toilet Cleaner", amount: 500, unit: "ml", priority: "high" },
        { name: "Scrub Pad", amount: 3, unit: "pcs", priority: "medium" },
        { name: "Mop Refill", amount: 1, unit: "pc", priority: "low" },
        { name: "Phenol", amount: 500, unit: "ml", priority: "medium" },
        { name: "Air Freshener", amount: 1, unit: "can", priority: "low" },
        { name: "Camphor", amount: 50, unit: "gm", priority: "low" },
        { name: "Naphthalene Balls", amount: 1, unit: "pkt", priority: "low" },
      ],
    },
    "Personal Care": {
      icon: "fa-pump-soap",
      color: "#BC4749",
      items: [
        { name: "Body Wash", amount: 250, unit: "ml", priority: "medium" },
        { name: "Body Soap", amount: 1, unit: "pc", priority: "medium" },
        { name: "Shampoo", amount: 250, unit: "ml", priority: "medium" },
        { name: "Conditioner", amount: 250, unit: "ml", priority: "low" },
        { name: "Hair Oil", amount: 200, unit: "ml", priority: "medium" },
        { name: "Face Wash", amount: 100, unit: "ml", priority: "medium" },
        { name: "Face Cream", amount: 50, unit: "gm", priority: "medium" },
        { name: "Moisturizer", amount: 100, unit: "ml", priority: "medium" },
        { name: "Sunscreen", amount: 100, unit: "ml", priority: "low" },
        { name: "Toothpaste", amount: 100, unit: "gm", priority: "high" },
        { name: "Toothbrush", amount: 1, unit: "pc", priority: "high" },
        { name: "Mouthwash", amount: 250, unit: "ml", priority: "low" },
        { name: "Dental Floss", amount: 1, unit: "pc", priority: "low" },
        { name: "Razor", amount: 1, unit: "pc", priority: "medium" },
        { name: "Shaving Cream", amount: 100, unit: "gm", priority: "medium" },
        { name: "Talcum Powder", amount: 100, unit: "gm", priority: "low" },
        { name: "Deodorant", amount: 1, unit: "pc", priority: "medium" },
        { name: "Hand Sanitizer", amount: 200, unit: "ml", priority: "medium" },
        { name: "Hand Wash", amount: 250, unit: "ml", priority: "high" },
        { name: "Lip Balm", amount: 1, unit: "pc", priority: "low" },
        { name: "Cotton Buds", amount: 1, unit: "pkt", priority: "low" },
        { name: "Tissue Paper", amount: 1, unit: "pkt", priority: "medium" },
        { name: "Alum", amount: 1, unit: "pc", priority: "low" },
      ],
    },
    "Frozen Foods": {
      icon: "fa-snowflake",
      color: "#48CAE4",
      items: [
        { name: "Frozen Peas", amount: 500, unit: "gm", priority: "medium" },
        { name: "Frozen Corn", amount: 500, unit: "gm", priority: "medium" },
        {
          name: "Frozen Mixed Veg",
          amount: 500,
          unit: "gm",
          priority: "medium",
        },
        { name: "Frozen Paratha", amount: 1, unit: "pkt", priority: "medium" },
        {
          name: "Frozen French Fries",
          amount: 500,
          unit: "gm",
          priority: "low",
        },
        { name: "Frozen Momos", amount: 1, unit: "pkt", priority: "low" },
        {
          name: "Frozen Spring Rolls",
          amount: 1,
          unit: "pkt",
          priority: "low",
        },
        { name: "Frozen Samosa", amount: 1, unit: "pkt", priority: "low" },
        { name: "Frozen Paneer", amount: 200, unit: "gm", priority: "medium" },
        {
          name: "Frozen Chicken Nuggets",
          amount: 500,
          unit: "gm",
          priority: "low",
        },
        {
          name: "Frozen Fish Fingers",
          amount: 500,
          unit: "gm",
          priority: "low",
        },
        { name: "Frozen Dessert", amount: 500, unit: "ml", priority: "low" },
      ],
    },
    "Sugar & Salt": {
      icon: "fa-cubes-stacked",
      color: "#A8DADC",
      items: [
        { name: "White Sugar", amount: 1, unit: "kg", priority: "high" },
        { name: "Brown Sugar", amount: 500, unit: "gm", priority: "low" },
        { name: "Powdered Sugar", amount: 500, unit: "gm", priority: "low" },
        { name: "Jaggery", amount: 500, unit: "gm", priority: "medium" },
        { name: "Rock Salt", amount: 500, unit: "gm", priority: "medium" },
        { name: "Iodized Salt", amount: 1, unit: "kg", priority: "high" },
        { name: "Low Sodium Salt", amount: 500, unit: "gm", priority: "low" },
        { name: "Black Salt", amount: 200, unit: "gm", priority: "medium" },
        { name: "Sea Salt", amount: 200, unit: "gm", priority: "low" },
        {
          name: "Himalayan Pink Salt",
          amount: 200,
          unit: "gm",
          priority: "low",
        },
      ],
    },
    "Canned & Packaged": {
      icon: "fa-box",
      color: "#8D99AE",
      items: [
        { name: "Canned Tomato", amount: 400, unit: "gm", priority: "medium" },
        { name: "Canned Beans", amount: 400, unit: "gm", priority: "low" },
        {
          name: "Canned Sweet Corn",
          amount: 340,
          unit: "gm",
          priority: "medium",
        },
        {
          name: "Canned Coconut Milk",
          amount: 400,
          unit: "ml",
          priority: "low",
        },
        { name: "Canned Tuna", amount: 200, unit: "gm", priority: "low" },
        { name: "Canned Mushroom", amount: 400, unit: "gm", priority: "low" },
        { name: "Pickle (Mango)", amount: 200, unit: "gm", priority: "medium" },
        { name: "Pickle (Mixed)", amount: 200, unit: "gm", priority: "low" },
        { name: "Pasta", amount: 500, unit: "gm", priority: "medium" },
        { name: "Macaroni", amount: 500, unit: "gm", priority: "low" },
        { name: "Vermicelli", amount: 500, unit: "gm", priority: "medium" },
        { name: "Noodles (Hakka)", amount: 500, unit: "gm", priority: "low" },
        { name: "Tofu", amount: 200, unit: "gm", priority: "low" },
        { name: "Soup Packet", amount: 1, unit: "pkt", priority: "low" },
        { name: "Ready to Eat Meal", amount: 1, unit: "pkt", priority: "low" },
      ],
    },
  };

  /* ---------- TEMPLATES ---------- */
  const TEMPLATES = [
    {
      id: "weekly_basic",
      name: "Weekly Basics",
      icon: "fa-calendar-week",
      desc: "Essential weekly grocery items",
      items: {
        "Fresh Vegetables": [
          "Tomato",
          "Potato",
          "Onion",
          "Green Chili",
          "Cucumber",
          "Carrot",
          "Cauliflower",
          "Spinach",
          "Coriander Leaves",
          "Ginger",
          "Garlic",
        ],
        "Milk & Dairy": [
          "Full Cream Milk",
          "Curd / Yogurt",
          "Paneer",
          "Butter",
          "Ghee",
        ],
        "Rice & Grains": ["Basmati Rice", "Wheat Flour", "Toor Dal"],
        "Spices & Masala": [
          "Turmeric Powder",
          "Red Chili Powder",
          "Coriander Powder",
          "Cumin Seeds",
          "Garam Masala",
          "Salt",
        ],
        "Oils & Ghee": ["Mustard Oil"],
        "Bread & Bakery": ["Whole Wheat Bread"],
        Beverages: ["Tea (Regular)"],
        "Cleaning Supplies": [
          "Dish Wash Liquid",
          "Floor Cleaner",
          "Laundry Detergent",
        ],
        "Personal Care": ["Toothpaste", "Toothbrush", "Hand Wash", "Body Soap"],
      },
    },
    {
      id: "vegetarian",
      name: "Pure Vegetarian",
      icon: "fa-seedling",
      desc: "Complete vegetarian household list",
      items: {
        "Fresh Vegetables": [
          "Tomato",
          "Potato",
          "Onion",
          "Capsicum (Green)",
          "Cucumber",
          "Carrot",
          "Cauliflower",
          "Cabbage",
          "Spinach",
          "Green Beans",
          "Brinjal",
          "Bottle Gourd",
          "Mushroom",
          "Broccoli",
          "Ginger",
          "Garlic",
          "Green Chili",
        ],
        "Leafy Greens": [
          "Palak (Spinach)",
          "Methi (Fenugreek)",
          "Mint Leaves",
          "Curry Leaves",
        ],
        "Fresh Fruits": [
          "Apple",
          "Banana",
          "Orange",
          "Lemon",
          "Papaya",
          "Pomegranate",
        ],
        "Milk & Dairy": [
          "Full Cream Milk",
          "Curd / Yogurt",
          "Paneer",
          "Butter",
          "Ghee",
          "Cheese (Cube)",
          "Cream",
        ],
        "Rice & Grains": [
          "Basmati Rice",
          "Wheat Flour",
          "Suji / Semolina",
          "Besan (Gram Flour)",
          "Oats",
          "Dalia (Broken Wheat)",
        ],
        "Lentils & Pulses": [
          "Toor Dal",
          "Moong Dal (Yellow)",
          "Chana Dal",
          "Masoor Dal (Red)",
          "Rajma (Kidney Beans)",
          "Urad Dal",
          "Green Peas",
        ],
        "Spices & Masala": [
          "Turmeric Powder",
          "Red Chili Powder",
          "Coriander Powder",
          "Cumin Seeds",
          "Garam Masala",
          "Black Pepper",
          "Fennel Seeds",
          "Asafoetida (Hing)",
          "Mustard Seeds",
        ],
        "Oils & Ghee": ["Mustard Oil", "Ghee"],
        "Bread & Bakery": ["Whole Wheat Bread", "Pav", "Roti / Chapati"],
        "Dry Fruits & Nuts": ["Almonds", "Cashew Nuts", "Raisins"],
        "Sauces & Condiments": [
          "Tomato Ketchup",
          "Green Chutney",
          "Tamarind Chutney",
          "Honey",
          "Jam",
        ],
        "Sugar & Salt": ["White Sugar", "Iodized Salt", "Jaggery"],
        Beverages: ["Tea (Regular)", "Coffee Powder"],
        "Cleaning Supplies": [
          "Dish Wash Liquid",
          "Floor Cleaner",
          "Laundry Detergent",
          "Toilet Cleaner",
          "Scrub Pad",
        ],
        "Personal Care": [
          "Toothpaste",
          "Toothbrush",
          "Shampoo",
          "Hair Oil",
          "Face Wash",
          "Body Soap",
          "Hand Wash",
          "Hand Sanitizer",
        ],
      },
    },
    {
      id: "nonveg",
      name: "Non-Veg Household",
      icon: "fa-drumstick-bite",
      desc: "Household with meat and fish",
      items: {
        "Fresh Vegetables": [
          "Tomato",
          "Potato",
          "Onion",
          "Green Chili",
          "Capsicum (Green)",
          "Cucumber",
          "Carrot",
          "Spinach",
          "Coriander Leaves",
          "Ginger",
          "Garlic",
        ],
        "Meat & Fish": [
          "Chicken (Whole)",
          "Eggs",
          "Fish (Rohu)",
          "Prawns",
          "Keema (Mutton)",
        ],
        "Milk & Dairy": [
          "Full Cream Milk",
          "Curd / Yogurt",
          "Paneer",
          "Butter",
          "Ghee",
        ],
        "Rice & Grains": ["Basmati Rice", "Wheat Flour"],
        "Lentils & Pulses": [
          "Toor Dal",
          "Moong Dal (Yellow)",
          "Masoor Dal (Red)",
        ],
        "Spices & Masala": [
          "Turmeric Powder",
          "Red Chili Powder",
          "Coriander Powder",
          "Cumin Seeds",
          "Garam Masala",
          "Black Pepper",
        ],
        "Oils & Ghee": ["Mustard Oil", "Ghee"],
        "Sauces & Condiments": ["Soy Sauce", "Vinegar", "Tomato Ketchup"],
        Beverages: ["Tea (Regular)"],
        "Cleaning Supplies": [
          "Dish Wash Liquid",
          "Floor Cleaner",
          "Laundry Detergent",
        ],
        "Personal Care": ["Toothpaste", "Body Soap", "Hand Wash"],
      },
    },
    {
      id: "party",
      name: "Party / Festival",
      icon: "fa-champagne-glasses",
      desc: "Items for hosting a party",
      items: {
        "Snacks & Packaged Food": [
          "Potato Chips",
          "Namkeen Mixture",
          "Popcorn",
          "Peanuts (Roasted)",
          "Mathri",
          "Khakhra",
          "Papad",
        ],
        "Fresh Vegetables": [
          "Onion",
          "Tomato",
          "Potato",
          "Capsicum (Green)",
          "Capsicum (Red)",
          "Capsicum (Yellow)",
          "Coriander Leaves",
          "Ginger",
          "Garlic",
          "Green Chili",
        ],
        "Milk & Dairy": [
          "Paneer",
          "Cream",
          "Cheese (Cube)",
          "Butter",
          "Curd / Yogurt",
        ],
        Beverages: [
          "Soft Drink (Coca Cola)",
          "Fruit Juice (Mixed)",
          "Mineral Water",
          "Hot Chocolate Mix",
          "Energy Drink",
        ],
        "Bread & Bakery": [
          "Bun",
          "Naan",
          "Pita Bread",
          "Cookies (Assorted)",
          "Cake (Sliced)",
          "Croissant",
        ],
        "Sauces & Condiments": [
          "Tomato Ketchup",
          "Mayonnaise",
          "Chili Sauce",
          "Soy Sauce",
          "Mint Sauce",
          "Salsa",
        ],
        "Meat & Fish": ["Chicken (Whole)", "Keema (Chicken)", "Prawns", "Eggs"],
        "Fresh Fruits": [
          "Apple",
          "Banana",
          "Orange",
          "Grapes (Green)",
          "Strawberry",
        ],
        "Dry Fruits & Nuts": [
          "Cashew Nuts",
          "Almonds",
          "Pistachios",
          "Mixed Dry Fruits",
        ],
        "Frozen Foods": [
          "Frozen French Fries",
          "Frozen Spring Rolls",
          "Frozen Momos",
          "Frozen Samosa",
          "Frozen Dessert",
        ],
        "Cleaning Supplies": ["Tissue Paper", "Dish Wash Liquid"],
        "Sugar & Salt": ["White Sugar"],
      },
    },
    {
      id: "healthy",
      name: "Health Conscious",
      icon: "fa-heart-pulse",
      desc: "Low-calorie, nutrient-rich items",
      items: {
        "Fresh Vegetables": [
          "Broccoli",
          "Spinach",
          "Carrot",
          "Cucumber",
          "Capsicum (Green)",
          "Zucchini",
          "Mushroom",
          "Celery",
          "Beetroot",
          "Sweet Potato",
          "Baby Corn",
          "Green Beans",
        ],
        "Leafy Greens": [
          "Kale",
          "Arugula",
          "Palak (Spinach)",
          "Lettuce",
          "Methi (Fenugreek)",
        ],
        "Fresh Fruits": [
          "Apple",
          "Banana",
          "Kiwi",
          "Blueberry",
          "Strawberry",
          "Pomegranate",
          "Orange",
          "Papaya",
          "Avocado",
        ],
        "Dry Fruits & Nuts": [
          "Almonds",
          "Walnuts",
          "Flax Seeds",
          "Chia Seeds",
          "Pumpkin Seeds",
          "Sunflower Seeds",
          "Dates",
        ],
        "Rice & Grains": [
          "Quinoa",
          "Oats",
          "Ragi Flour",
          "Jowar Flour",
          "Bajra Flour",
          "Dalia (Broken Wheat)",
          "Brown Rice",
        ],
        "Milk & Dairy": ["Skimmed Milk", "Greek Yogurt", "Paneer", "Tofu"],
        "Lentils & Pulses": [
          "Moong Dal (Green)",
          "Rajma (Kidney Beans)",
          "Kabuli Chana",
          "Green Peas",
        ],
        "Oils & Ghee": ["Olive Oil (Extra Virgin)", "Coconut Oil"],
        Beverages: ["Tea (Green)", "Fruit Juice (Mixed)", "Coconut Water"],
        "Frozen Foods": ["Frozen Peas", "Frozen Mixed Veg"],
        "Canned & Packaged": ["Canned Beans", "Tofu", "Soup Packet"],
      },
    },
    {
      id: "baby_care",
      name: "Baby Care",
      icon: "fa-baby",
      desc: "Essentials for baby care",
      items: {
        "Milk & Dairy": ["Full Cream Milk", "Condensed Milk"],
        "Personal Care": [
          "Baby Soap",
          "Baby Shampoo",
          "Baby Lotion",
          "Baby Oil",
          "Baby Powder",
          "Diapers",
          "Baby Wipes",
          "Drying Sheets",
        ],
        Beverages: ["Milk Powder", "Hot Chocolate Mix"],
        "Bread & Bakery": ["Milk Bread", "Cookies (Assorted)"],
        "Fresh Fruits": ["Banana", "Apple", "Papaya"],
        "Canned & Packaged": ["Cereal (Baby)"],
        "Snacks & Packaged Food": ["Cerelac", "Puffed Rice"],
        "Cleaning Supplies": ["Baby Laundry Detergent", "Hand Sanitizer"],
      },
    },
  ];

  /* ---------- UNIT OPTIONS + Languages ---------- */
  const UNIT_OPTIONS = [
    "kg",
    "gm",
    "litre",
    "ml",
    "pc",
    "pcs",
    "pkt",
    "bottle",
    "jar",
    "can",
    "tube",
    "bunch",
    "dozen",
    "box",
    "pack",
  ];

  const TRANSLATIONS = {
    hi: {
      Tomato: "टमाटर",
      Potato: "आलू",
      Onion: "प्याज",
      "Green Chili": "हरी मिर्च",
      "Capsicum (Green)": "शिमला मिर्च (हरी)",
      "Capsicum (Red)": "शिमला मिर्च (लाल)",
      "Capsicum (Yellow)": "शिमला मिर्च (पीली)",
      Cucumber: "खीरा",
      Carrot: "गाजर",
      Cauliflower: "फूलगोभी",
      Cabbage: "पत्ता गोभी",
      Spinach: "पालक",
      "Coriander Leaves": "धनिया पत्ती",
      "Mint Leaves": "पुदीना",
      "Green Beans": "फ्रेंच बीन्स",
      "Bitter Gourd": "करेला",
      "Bottle Gourd": "लौकी",
      "Ridge Gourd": "तोरई",
      Drumstick: "सहजन की फली",
      Brinjal: "बैंगन",
      Radish: "मूली",
      Turnip: "शलजम",
      Beetroot: "चुकंदर",
      Pumpkin: "कद्दू",
      "Sweet Potato": "शकरकंद",
      "Raw Banana": "कच्चा केला",
      "Baby Corn": "बेबी कॉर्न",
      Mushroom: "मशरूम",
      Broccoli: "ब्रोकली",
      Zucchini: "जुकिनी",
      Celery: "सेलेरी",
      Lettuce: "सलाद पत्ता",
      Ginger: "अदरक",
      Garlic: "लहसुन",
      "Spring Onion": "हरा प्याज",
      "French Beans": "फ्रेंच बीन्स",
      "Methi Leaves": "मेथी के पत्ते",
      Amla: "आंवला",
      "Raw Papaya": "कच्चा पपीता",
      Colocasia: "अरबी",
      "Palak (Spinach)": "पालक",
      "Methi (Fenugreek)": "मेथी",
      "Amaranth Leaves": "चौलाई",
      "Mustard Leaves": "सरसों के पत्ते",
      "Bathua Leaves": "बथुआ",
      "Curry Leaves": "करी पत्ता",
      "Dill Leaves": "सोया",
      "Pudina (Mint)": "पुदीना",
      Kale: "केल",
      Arugula: "अरुगुला",
      Watercress: "वॉटरक्रेस",
      Apple: "सेब",
      Banana: "केला",
      Orange: "संतरा",
      Mango: "आम",
      "Grapes (Green)": "अंगूर (हरे)",
      "Grapes (Black)": "अंगूर (काले)",
      Watermelon: "तरबूज",
      Papaya: "पपीता",
      Pomegranate: "अनार",
      Guava: "अमरूद",
      Pineapple: "अननास",
      Lemon: "नींबू",
      "Custard Apple": "शरीफा",
      "Chikoo (Sapota)": "चीकू",
      Kiwi: "कीवी",
      Strawberry: "स्ट्रॉबेरी",
      Blueberry: "ब्लूबेरी",
      Pear: "नाशपाती",
      Peach: "आड़ू",
      Plum: "प्लम",
      Cherry: "चेरी",
      "Dragon Fruit": "ड्रैगन फ्रूट",
      Coconut: "नारियल",
      Jackfruit: "कटहल",
      Cranberry: "क्रैनबेरी",
      "Full Cream Milk": "फुल क्रीम दूध",
      "Toned Milk": "टोंड दूध",
      "Skimmed Milk": "स्किम्ड दूध",
      "Curd / Yogurt": "दही",
      Paneer: "पनीर",
      Butter: "मक्खन",
      Ghee: "घी",
      "Cheese (Sliced)": "चीज़ (स्लाइस्ड)",
      "Cheese (Cube)": "चीज़ (क्यूब)",
      Cream: "क्रीम",
      Buttermilk: "छाछ",
      "Flavored Yogurt": "फ्लेवर्ड दही",
      "Condensed Milk": "कंडेंस्ड मिल्क",
      "Khoya / Mawa": "खोया",
      "White Bread": "सफेद ब्रेड",
      "Whole Wheat Bread": "गेहूं की ब्रेड",
      "Brown Bread": "ब्राउन ब्रेड",
      "Multigrain Bread": "मल्टीग्रेन ब्रेड",
      "Milk Bread": "मिल्क ब्रेड",
      Bun: "बन",
      Pav: "पाव",
      "Roti / Chapati": "रोटी / चपाती",
      Naan: "नान",
      "Pita Bread": "पिता ब्रेड",
      Rusk: "रस्क",
      "Cookies (Assorted)": "कुकीज़ (असॉर्टेड)",
      "Cake (Sliced)": "केक (स्लाइस्ड)",
      Croissant: "क्रोसॉन्ट",
      "Basmati Rice": "बासमती चावल",
      "Regular Rice": "साधारण चावल",
      "Sona Masoori Rice": "सोना मसूरी चावल",
      "Poha (Thick)": "पोहा (मोटा)",
      "Poha (Thin)": "पोहा (पतला)",
      "Suji / Semolina": "सूजी",
      Maida: "मैदा",
      "Besan (Gram Flour)": "बेसन",
      "Wheat Flour": "गेहूं का आटा",
      "Ragi Flour": "रागी का आटा",
      "Jowar Flour": "ज्वार का आटा",
      "Bajra Flour": "बाजरे का आटा",
      "Corn Flour": "कॉर्न फ्लोर",
      "Rice Flour": "चावल का आटा",
      "Dalia (Broken Wheat)": "दलिया",
      Quinoa: "क्विनोआ",
      Oats: "ओट्स",
      "Toor Dal": "तूर दाल",
      "Moong Dal (Yellow)": "मूंग दाल (पीली)",
      "Moong Dal (Green)": "मूंग दाल (हरी)",
      "Chana Dal": "चना दाल",
      "Masoor Dal (Red)": "मसूर दाल (लाल)",
      "Urad Dal": "उड़द दाल",
      "Rajma (Kidney Beans)": "राजमा",
      "Kabuli Chana": "काबुली चना",
      "Black Chana": "काला चना",
      "Whole Moong": "साबुत मूंग",
      "Lobia (Black Eyed Peas)": "लोबिया",
      "Green Peas": "हरी मटर",
      "Dried White Peas": "सफेद मटर (सूखी)",
      "Moth Dal": "मोठ दाल",
      "Turmeric Powder": "हल्दी पाउडर",
      "Red Chili Powder": "लाल मिर्च पाउडर",
      "Coriander Powder": "धनिया पाउडर",
      "Cumin Seeds": "जीरा",
      "Mustard Seeds": "सरसों",
      "Fenugreek Seeds": "मेथी दाना",
      "Garam Masala": "गरम मसाला",
      "Kitchen King Masala": "किचन किंग मसाला",
      "Biryani Masala": "बिरयानी मसाला",
      "Chat Masala": "चाट मसाला",
      "Sambar Masala": "सांबर मसाला",
      "Rasam Powder": "रसम पाउडर",
      "Black Pepper": "काली मिर्च",
      Cloves: "लौंग",
      "Cardamom (Green)": "इलायची (हरी)",
      "Cardamom (Black)": "बड़ी इलायची",
      "Cinnamon Sticks": "दालचीनी",
      "Bay Leaves": "तेज पत्ता",
      Nutmeg: "जायफल",
      Mace: "जावित्री",
      "Star Anise": "चक्र फूल",
      "Fennel Seeds": "सौंफ",
      Ajwain: "अजवायन",
      "Asafoetida (Hing)": "हींग",
      "White Pepper": "सफेद मिर्च",
      "Kashmiri Chili Powder": "कश्मीरी लाल मिर्च पाउडर",
      "Curry Powder": "करी पाउडर",
      "Panch Phoron": "पांच फोरन",
      "Idli/Dosa Batter Masala": "इडली/डोसा बैटर मसाला",
      "Mustard Oil": "सरसों का तेल",
      "Sunflower Oil": "सूरजमुखी का तेल",
      "Soyabean Oil": "सोयाबीन तेल",
      "Olive Oil (Extra Virgin)": "ऑलिव ऑयल (एक्स्ट्रा वर्जिन)",
      "Olive Oil (Regular)": "ऑलिव ऑयल (रेगुलर)",
      "Coconut Oil": "नारियल का तेल",
      "Groundnut Oil": "मूंगफली का तेल",
      "Sesame Oil": "तिल का तेल",
      "Palm Oil": "पाम ऑयल",
      "Desi Ghee": "देसी घी",
      "Vanaspati Ghee": "वनस्पति घी",
      "Rice Bran Oil": "चावल के छिलके का तेल",
      "Chicken (Whole)": "मुर्गी (पूरी)",
      "Chicken Breast": "चिकन ब्रेस्ट",
      "Chicken Thigh": "चिकन थाइग",
      Mutton: "मटन",
      "Goat Meat": "बकरी का मांस",
      Eggs: "अंडे",
      "Fish (Rohu)": "मछली (रोहू)",
      "Fish (Katla)": "मछली (कतला)",
      "Fish (Pomfret)": "मछली (पोमफ्रेट)",
      "Fish (Salmon)": "मछली (सैल्मन)",
      Prawns: "झींगा",
      Crab: "केकड़ा",
      Squid: "स्क्विड",
      "Keema (Mutton)": "कीमा (मटन)",
      "Keema (Chicken)": "कीमा (चिकन)",
      "Fish Fillet": "मछली का फिलेट",
      "Dried Fish": "सूखी मछली",
      "Potato Chips": "आलू के चिप्स",
      "Namkeen Mixture": "नमकीन मिक्सचर",
      "Biscuits (Parle-G)": "बिस्कुट (पार्ले-जी)",
      "Marie Biscuits": "मैरी बिस्कुट",
      "Cream Biscuits": "क्रीम बिस्कुट",
      "Instant Noodles": "इंस्टेंट नूडल्स",
      Popcorn: "पॉपकॉर्न",
      "Peanuts (Roasted)": "मूंगफली (भुनी हुई)",
      Cornflakes: "कॉर्नफ्लेक्स",
      Muesli: "म्यूज़ली",
      "Granola Bar": "ग्रेनोला बार",
      Mathri: "मठरी",
      Khakhra: "खाखड़ा",
      Papad: "पापड़",
      Sev: "सेव",
      Maggi: "मैगी",
      "Trail Mix": "ट्रेल मिक्स",
      "Fried Chips (Banana)": "फ्राइड चिप्स (केले के)",
      "Tea (Regular)": "चाय (साधारण)",
      "Tea (Green)": "ग्रीन टी",
      "Coffee Powder": "कॉफी पाउडर",
      "Instant Coffee": "इंस्टेंट कॉफी",
      "Hot Chocolate Mix": "हॉट चॉकलेट मिक्स",
      "Milk Powder": "दूध पाउडर",
      "Fruit Juice (Mango)": "फलों का रस (आम)",
      "Fruit Juice (Orange)": "फलों का रस (संतरा)",
      "Fruit Juice (Mixed)": "फलों का रस (मिक्स्ड)",
      "Soft Drink (Coca Cola)": "सॉफ्ट ड्रिंक (कोका कोला)",
      "Mineral Water": "मिनरल वाटर",
      "Energy Drink": "एनर्जी ड्रिंक",
      "Buttermilk (Packaged)": "छाछ (पैकेज्ड)",
      "Lassi (Packaged)": "लस्सी (पैकेज्ड)",
      "Coconut Water": "नारियल पानी",
      "Rooh Afza": "रूह अफज़ा",
      Almonds: "बादाम",
      "Cashew Nuts": "काजू",
      Raisins: "किशमिश",
      Walnuts: "अखरोट",
      Pistachios: "पिस्ता",
      Dates: "खजूर",
      "Dried Figs": "सूखी अंजीर",
      "Apricots (Dried)": "सूखी खुबानी",
      "Cranberries (Dried)": "सूखी क्रैनबेरी",
      "Peanuts (Raw)": "मूंगफली (कच्ची)",
      "Mixed Dry Fruits": "मिश्रित मेवे",
      "Flax Seeds": "अलसी",
      "Chia Seeds": "चिया सीड्स",
      "Sunflower Seeds": "सूरजमुखी के बीज",
      "Pumpkin Seeds": "कद्दू के बीज",
      "Tomato Ketchup": "टोमेटो केचप",
      "Soy Sauce": "सोया सॉस",
      "Chili Sauce": "चिली सॉस",
      "Green Chutney": "हरी चटनी",
      "Tamarind Chutney": "इमली की चटनी",
      "Mint Sauce": "पुदीना सॉस",
      Mayonnaise: "मेयोनेज़",
      "Mustard Sauce": "सरसों सॉस",
      Vinegar: "सिरका",
      Salsa: "सालसा",
      "Pesto Sauce": "पेस्टो सॉस",
      "Hot Sauce": "हॉट सॉस",
      "Oyster Sauce": "ऑयस्टर सॉस",
      "Fish Sauce": "फिश सॉस",
      Honey: "शहद",
      Jam: "जैम",
      "Peanut Butter": "पीनट बटर",
      "Chocolate Spread": "चॉकलेट स्प्रेड",
      "Dish Wash Liquid": "बर्तन धोने का लिक्विड",
      "Dish Wash Bar": "बर्तन धोने का साबुन",
      "Floor Cleaner": "फ्लोर क्लीनर",
      "Bathroom Cleaner": "बाथरूम क्लीनर",
      "Glass Cleaner": "ग्लास क्लीनर",
      "Laundry Detergent": "कपड़ा धोने का साबुन",
      "Laundry Powder": "कपड़ा धोने का पाउडर",
      Bleach: "ब्लीच",
      "Toilet Cleaner": "शौचालय क्लीनर",
      "Scrub Pad": "स्क्रब पैड",
      "Mop Refill": "मोप रीफिल",
      Phenol: "फेनॉल",
      "Air Freshener": "एयर फ्रेशनर",
      Camphor: "कपूर",
      "Naphthalene Balls": "नफ्तलीन की गोलियां",
      "Body Wash": "बॉडी वॉश",
      "Body Soap": "बॉडी साबुन",
      Shampoo: "शैम्पू",
      Conditioner: "कंडीशनर",
      "Hair Oil": "हेयर ऑयल",
      "Face Wash": "फेस वॉश",
      "Face Cream": "फेस क्रीम",
      Moisturizer: "मॉइस्चराइज़र",
      Sunscreen: "सनस्क्रीन",
      Toothpaste: "टूथपेस्ट",
      Toothbrush: "टूथब्रश",
      Mouthwash: "माउथवॉश",
      "Dental Floss": "डेंटल फ्लॉस",
      Razor: "उस्तरा",
      "Shaving Cream": "शेविंग क्रीम",
      "Talcum Powder": "टैल्कम पाउडर",
      Deodorant: "डियोडोरेंट",
      "Hand Sanitizer": "हैंड सैनिटाइज़र",
      "Hand Wash": "हैंड वॉश",
      "Lip Balm": "लिप बाम",
      "Cotton Buds": "कॉटन बड्स",
      "Tissue Paper": "टिश्यू पेपर",
      Alum: "फिटकरी",
      "Frozen Peas": "फ्रोजन मटर",
      "Frozen Corn": "फ्रोजन कॉर्न",
      "Frozen Mixed Veg": "फ्रोजन मिक्स्ड वेज",
      "Frozen Paratha": "फ्रोजन पराठा",
      "Frozen French Fries": "फ्रोजन फ्रेंच फ्राइज़",
      "Frozen Momos": "फ्रोजन मोमोस",
      "Frozen Spring Rolls": "फ्रोजन स्प्रिंग रोल",
      "Frozen Samosa": "फ्रोजन समोसा",
      "Frozen Paneer": "फ्रोजन पनीर",
      "Frozen Chicken Nuggets": "फ्रोजन चिकन नगेट्स",
      "Frozen Fish Fingers": "फ्रोजन फिश फिंगर्स",
      "Frozen Dessert": "फ्रोजन डिजर्ट",
      "White Sugar": "सफेद चीनी",
      "Brown Sugar": "ब्राउन शुगर",
      "Powdered Sugar": "पाउडर शुगर",
      Jaggery: "गुड़",
      "Rock Salt": "सेंधा नमक",
      "Iodized Salt": "आयोडीन युक्त नमक",
      "Low Sodium Salt": "कम सोडियम वाला नमक",
      "Black Salt": "काला नमक",
      "Sea Salt": "समुद्री नमक",
      "Himalayan Pink Salt": "हिमालयन पिंक सॉल्ट",
      "Canned Tomato": "कैन्ड टमाटर",
      "Canned Beans": "कैन्ड बीन्स",
      "Canned Sweet Corn": "कैन्ड स्वीट कॉर्न",
      "Canned Coconut Milk": "कैन्ड नारियल का दूध",
      "Canned Tuna": "कैन्ड टूना",
      "Canned Mushroom": "कैन्ड मशरूम",
      "Pickle (Mango)": "अचार (आम)",
      "Pickle (Mixed)": "अचार (मिक्स्ड)",
      Pasta: "पास्ता",
      Macaroni: "मैकरोनी",
      Vermicelli: "सेवई",
      "Noodles (Hakka)": "नूडल्स (हक्का)",
      Tofu: "टोफू",
      "Soup Packet": "सूप पैकेट",
      "Ready to Eat Meal": "रेडी टू ईट मील",
    },
    bn: {
      Tomato: "টমেটো",
      Potato: "পটেট",
      Onion: "পেঁয়াজ",
      "Green Chili": "সবুজ মরিচ",
      "Capsicum (Green)": "ক্যাপসিকাম (সবুজ)",
      "Capsicum (Red)": "ক্যাপসিকাম (লাল)",
      "Capsicum (Yellow)": "ক্যাপসিকাম (হলুদ)",
      Cucumber: "শশা",
      Carrot: "গাজর",
      Cauliflower: "ফুলকপি",
      Cabbage: "বাঁধাকপি",
      Spinach: "পালং",
      "Coriander Leaves": "ধনেপাতা",
      "Mint Leaves": "পুদিনা",
      "Green Beans": "সবুজ শিম",
      "Bitter Gourd": "উচ্ছে",
      "Bottle Gourd": "লাউ",
      "Ridge Gourd": "ঝিঙে",
      Drumstick: "সজনে ডাঁটা",
      Brinjal: "বেগুন",
      Radish: "মূলা",
      Turnip: "শালগম",
      Beetroot: "বিট",
      Pumpkin: "মিষ্টিকুমড়া",
      "Sweet Potato": "মিষ্টি আলু",
      "Raw Banana": "কাঁচা কলা",
      "Baby Corn": "বেবি কর্ন",
      Mushroom: "মাশরুম",
      Broccoli: "ব্রোকলি",
      Zucchini: "জুকিনি",
      Celery: "সেলারি",
      Lettuce: "লেটুস",
      Ginger: "আদা",
      Garlic: "রসুন",
      "Spring Onion": "স্প্রিং অনিয়ন",
      "French Beans": "ফ্রেঞ্চ বিন্স",
      "Methi Leaves": "মেথি পাতা",
      Amla: "আমলা",
      "Raw Papaya": "কাঁচা পেঁপে",
      Colocasia: "কচু",
      "Palak (Spinach)": "পালং",
      "Methi (Fenugreek)": "মেথি",
      "Amaranth Leaves": "লাল শাক",
      "Mustard Leaves": "সরিষার পাতা",
      "Bathua Leaves": "বাথুয়া",
      "Curry Leaves": "কারি পাতা",
      "Dill Leaves": "সোয়া",
      "Pudina (Mint)": "পুদিনা",
      Kale: "কেল",
      Arugula: "আরুগুলা",
      Watercress: "ওয়াটারক্রেস",
      Apple: "আপেল",
      Banana: "কলা",
      Orange: "কমলা",
      Mango: "আম",
      "Grapes (Green)": "আঙুর (সবুজ)",
      "Grapes (Black)": "আঙুর (কালো)",
      Watermelon: "তরমুজ",
      Papaya: "পেঁপে",
      Pomegranate: "ডালিম",
      Guava: "পেয়ারা",
      Pineapple: "আনারস",
      Lemon: "লেবু",
      "Custard Apple": "শরিফা",
      "Chikoo (Sapota)": "সপোটা",
      Kiwi: "কিউই",
      Strawberry: "স্ট্রবেরি",
      Blueberry: "ব্লুবেরি",
      Pear: "নাশপাতি",
      Peach: "পিচ",
      Plum: "প্লাম",
      Cherry: "চেরি",
      "Dragon Fruit": "ড্র্যাগন ফ্রুট",
      Coconut: "নারকেল",
      Jackfruit: "কাঁঠাল",
      Cranberry: "ক্র্যানবেরি",
      "Full Cream Milk": "পূর্ণ ক্রিম দুধ",
      "Toned Milk": "টোনড দুধ",
      "Skimmed Milk": "স্কিমড দুধ",
      "Curd / Yogurt": "দই",
      Paneer: "পনির",
      Butter: "মাখন",
      Ghee: "ঘি",
      "Cheese (Sliced)": "চিজ (স্লাইসড)",
      "Cheese (Cube)": "চিজ (কিউব)",
      Cream: "ক্রিম",
      Buttermilk: "ঘোল",
      "Flavored Yogurt": "ফ্লেভার্ড দই",
      "Condensed Milk": "কনডেন্সড মিল্ক",
      "Khoya / Mawa": "খোয়া",
      "White Bread": "সাদা রুটি",
      "Whole Wheat Bread": "গমের রুটি",
      "Brown Bread": "ব্রাউন ব্রেড",
      "Multigrain Bread": "মাল্টিগ্রেইন ব্রেড",
      "Milk Bread": "মিল্ক ব্রেড",
      Bun: "বান",
      Pav: "পাউ",
      "Roti / Chapati": "রুটি / চাপাতি",
      Naan: "নান",
      "Pita Bread": "পিটা ব্রেড",
      Rusk: "রাস্ক",
      "Cookies (Assorted)": "কুকিজ (অ্যাসোর্টেড)",
      "Cake (Sliced)": "কেক (স্লাইসড)",
      Croissant: "ক্রয়স্যাঁ",
      "Basmati Rice": "বাসমতি চাল",
      "Regular Rice": "সাধারণ চাল",
      "Sona Masoori Rice": "সোনা মাসুরি চাল",
      "Poha (Thick)": "পোহা (মোটা)",
      "Poha (Thin)": "পোহা (পাতলা)",
      "Suji / Semolina": "সুজি",
      Maida: "ময়দা",
      "Besan (Gram Flour)": "বেসন",
      "Wheat Flour": "গমের আটা",
      "Ragi Flour": "রাগির আটা",
      "Jowar Flour": "জোয়ারের আটা",
      "Bajra Flour": "বাজরার আটা",
      "Corn Flour": "কর্ন ফ্লাওয়ার",
      "Rice Flour": "চালের আটা",
      "Dalia (Broken Wheat)": "দালিয়া",
      Quinoa: "কিনোয়া",
      Oats: "ওটস",
      "Toor Dal": "তুয়ার ডাল",
      "Moong Dal (Yellow)": "মুগ ডাল (হলুদ)",
      "Moong Dal (Green)": "মুগ ডাল (সবুজ)",
      "Chana Dal": "চনা ডাল",
      "Masoor Dal (Red)": "মসুর ডাল (লাল)",
      "Urad Dal": "উড়দ ডাল",
      "Rajma (Kidney Beans)": "রাজমা",
      "Kabuli Chana": "কাবুলি চনা",
      "Black Chana": "কালা চনা",
      "Whole Moong": "সাবুত মুগ",
      "Lobia (Black Eyed Peas)": "লোবিয়া",
      "Green Peas": "সবুজ মটর",
      "Dried White Peas": "শুকনো সাদা মটর",
      "Moth Dal": "মট ডাল",
      "Turmeric Powder": "হলুদ গুঁড়ো",
      "Red Chili Powder": "লাল মরিচ গুঁড়ো",
      "Coriander Powder": "ধনে গুঁড়ো",
      "Cumin Seeds": "জিরা",
      "Mustard Seeds": "সরিষা",
      "Fenugreek Seeds": "মেথি দানা",
      "Garam Masala": "গরম মশলা",
      "Kitchen King Masala": "কিচেন কিং মশলা",
      "Biryani Masala": "বিরিয়ানি মশলা",
      "Chat Masala": "চাট মশলা",
      "Sambar Masala": "সাম্বর মশলা",
      "Rasam Powder": "রসম পাউডার",
      "Black Pepper": "গোলমরিচ",
      Cloves: "লবঙ্গ",
      "Cardamom (Green)": "এলাচ (সবুজ)",
      "Cardamom (Black)": "বড় এলাচ",
      "Cinnamon Sticks": "দারুচিনি",
      "Bay Leaves": "তেজপাতা",
      Nutmeg: "জায়ফল",
      Mace: "জায়ত্রি",
      "Star Anise": "চক্রফুল",
      "Fennel Seeds": "মৌরি",
      Ajwain: "জোয়ান",
      "Asafoetida (Hing)": "হিং",
      "White Pepper": "সাদা গোলমরিচ",
      "Kashmiri Chili Powder": "কাশ্মীরি লাল মরিচ গুঁড়ো",
      "Curry Powder": "কারি পাউডার",
      "Panch Phoron": "পাঁচ ফোড়ন",
      "Idli/Dosa Batter Masala": "ইডলি/ডোসা ব্যাটার মশলা",
      "Mustard Oil": "সরিষার তেল",
      "Sunflower Oil": "সূর্যমুখীর তেল",
      "Soyabean Oil": "সয়াবিন তেল",
      "Olive Oil (Extra Virgin)": "অলিভ অয়েল (এক্সট্রা ভার্জিন)",
      "Olive Oil (Regular)": "অলিভ অয়েল (রেগুলার)",
      "Coconut Oil": "নারকেল তেল",
      "Groundnut Oil": "মুগফলির তেল",
      "Sesame Oil": "তিলের তেল",
      "Palm Oil": "পাম অয়েল",
      "Desi Ghee": "দেশি ঘি",
      "Vanaspati Ghee": "ভ্যানাস্পতি ঘি",
      "Rice Bran Oil": "চালের তুষ থেকে তেল",
      "Chicken (Whole)": "মুরগি (পুরো)",
      "Chicken Breast": "চিকেন ব্রেস্ট",
      "Chicken Thigh": "চিকেন থাই",
      Mutton: "মাটন",
      "Goat Meat": "ছাগলের মাংস",
      Eggs: "ডিম",
      "Fish (Rohu)": "মাছ (রুই)",
      "Fish (Katla)": "মাছ (কাতলা)",
      "Fish (Pomfret)": "মাছ (পমফ্রেট)",
      "Fish (Salmon)": "মাছ (স্যালমন)",
      Prawns: "চিংড়ি",
      Crab: "কাঁকড়া",
      Squid: "স্কুইড",
      "Keema (Mutton)": "কিমা (মাটন)",
      "Keema (Chicken)": "কিমা (চিকেন)",
      "Fish Fillet": "মাছের ফিলে",
      "Dried Fish": "শুকনো মাছ",
      "Potato Chips": "আলুর চিপস",
      "Namkeen Mixture": "নমকীন মিক্সচার",
      "Biscuits (Parle-G)": "বিস্কুট (পার্লে-জি)",
      "Marie Biscuits": "মেরি বিস্কুট",
      "Cream Biscuits": "ক্রিম বিস্কুট",
      "Instant Noodles": "ইনস্ট্যান্ট নুডলস",
      Popcorn: "পপকর্ন",
      "Peanuts (Roasted)": "মুগফলি (ভাজা)",
      Cornflakes: "কর্নফ্লেক্স",
      Muesli: "মিউজলি",
      "Granola Bar": "গ্রানোলা বার",
      Mathri: "মাঠরি",
      Khakhra: "খাখড়া",
      Papad: "পাপড়",
      Sev: "সেব",
      Maggi: "ম্যাগি",
      "Trail Mix": "ট্রেল মিক্স",
      "Fried Chips (Banana)": "ভাজা চিপস (কলার)",
      "Tea (Regular)": "চা (সাধারণ)",
      "Tea (Green)": "গ্রিন টি",
      "Coffee Powder": "কফি পাউডার",
      "Instant Coffee": "ইনস্ট্যান্ট কফি",
      "Hot Chocolate Mix": "হট চকলেট মিক্স",
      "Milk Powder": "দুধের গুঁড়ো",
      "Fruit Juice (Mango)": "ফলের রস (আম)",
      "Fruit Juice (Orange)": "ফলের রস (কমলা)",
      "Fruit Juice (Mixed)": "ফলের রস (মিক্সড)",
      "Soft Drink (Coca Cola)": "সফট ড্রিংক (কোকা কোলা)",
      "Mineral Water": "মিনারেল ওয়াটার",
      "Energy Drink": "এনার্জি ড্রিংক",
      "Buttermilk (Packaged)": "ঘোল (প্যাকেজড)",
      "Lassi (Packaged)": "লাচ্ছি (প্যাকেজড)",
      "Coconut Water": "নারকেল জল",
      "Rooh Afza": "রূহ আফজা",
      Almonds: "কাঠবাদাম",
      "Cashew Nuts": "কাজু",
      Raisins: "কিশমিশ",
      Walnuts: "আখরোট",
      Pistachios: "পেস্তা",
      Dates: "খেজুর",
      "Dried Figs": "শুকনো ডুমুর",
      "Apricots (Dried)": "শুকনো খুবানি",
      "Cranberries (Dried)": "শুকনো ক্র্যানবেরি",
      "Peanuts (Raw)": "মুগফলি (কাঁচা)",
      "Mixed Dry Fruits": "মিশ্রিত শুকনো ফল",
      "Flax Seeds": "ভুটের বীজ",
      "Chia Seeds": "চিয়া সিডস",
      "Sunflower Seeds": "সূর্যমুখীর বীজ",
      "Pumpkin Seeds": "কুমড়ার বীজ",
      "Tomato Ketchup": "টমেটো কেচাপ",
      "Soy Sauce": "সয়া সস",
      "Chili Sauce": "চিলি সস",
      "Green Chutney": "সবুজ চাটনি",
      "Tamarind Chutney": "তেঁতুলের চাটনি",
      "Mint Sauce": "পুদিনা সস",
      Mayonnaise: "মেয়োনিজ",
      "Mustard Sauce": "সরিষার সস",
      Vinegar: "ভিনেগার",
      Salsa: "সালসা",
      "Pesto Sauce": "পেস্টো সস",
      "Hot Sauce": "হট সস",
      "Oyster Sauce": "অয়েস্টার সস",
      "Fish Sauce": "ফিশ সস",
      Honey: "মধু",
      Jam: "জ্যাম",
      "Peanut Butter": "পিনাট বাটার",
      "Chocolate Spread": "চকলেট স্প্রেড",
      "Dish Wash Liquid": "বাসন ধোয়ার লিকুইড",
      "Dish Wash Bar": "বাসন ধোয়ার সাবান",
      "Floor Cleaner": "ফ্লোর ক্লিনার",
      "Bathroom Cleaner": "বাথরুম ক্লিনার",
      "Glass Cleaner": "গ্লাস ক্লিনার",
      "Laundry Detergent": "কাপড় ধোয়ার সাবান",
      "Laundry Powder": "কাপড় ধোয়ার গুঁড়ো",
      Bleach: "ব্লিচ",
      "Toilet Cleaner": "টয়লেট ক্লিনার",
      "Scrub Pad": "স্ক্রাব প্যাড",
      "Mop Refill": "মপ রিফিল",
      Phenol: "ফেনল",
      "Air Freshener": "এয়ার ফ্রেশনার",
      Camphor: "কর্পূর",
      "Naphthalene Balls": "ন্যাফথালিন বল",
      "Body Wash": "বডি ওয়াশ",
      "Body Soap": "বডি সাবান",
      Shampoo: "শ্যাম্পু",
      Conditioner: "কন্ডিশনার",
      "Hair Oil": "হেয়ার অয়েল",
      "Face Wash": "ফেস ওয়াশ",
      "Face Cream": "ফেস ক্রিম",
      Moisturizer: "ময়েশ্চারাইজার",
      Sunscreen: "সানস্ক্রিন",
      Toothpaste: "টুথপেস্ট",
      Toothbrush: "টুথব্রাশ",
      Mouthwash: "মাউথওয়াশ",
      "Dental Floss": "ডেন্টাল ফ্লস",
      Razor: "রেজর",
      "Shaving Cream": "শেভিং ক্রিম",
      "Talcum Powder": "ট্যালকম পাউডার",
      Deodorant: "ডিওডোরেন্ট",
      "Hand Sanitizer": "হ্যান্ড স্যানিটাইজার",
      "Hand Wash": "হ্যান্ড ওয়াশ",
      "Lip Balm": "লিপ বাম",
      "Cotton Buds": "কটন বাডস",
      "Tissue Paper": "টিস্যু পেপার",
      Alum: "ফিটকিরি",
      "Frozen Peas": "ফ্রোজেন মটর",
      "Frozen Corn": "ফ্রোজেন কর্ন",
      "Frozen Mixed Veg": "ফ্রোজেন মিক্সড ভেজ",
      "Frozen Paratha": "ফ্রোজেন পরোটা",
      "Frozen French Fries": "ফ্রোজেন ফ্রেঞ্চ ফ্রাই",
      "Frozen Momos": "ফ্রোজেন মোমো",
      "Frozen Spring Rolls": "ফ্রোজেন স্প্রিং রোল",
      "Frozen Samosa": "ফ্রোজেন সমুচা",
      "Frozen Paneer": "ফ্রোজেন পনির",
      "Frozen Chicken Nuggets": "ফ্রোজেন চিকেন নাগেটস",
      "Frozen Fish Fingers": "ফ্রোজেন ফিশ ফিঙ্গারস",
      "Frozen Dessert": "ফ্রোজেন ডেজার্ট",
      "White Sugar": "সাদা চিনি",
      "Brown Sugar": "ব্রাউন সুগার",
      "Powdered Sugar": "পাউডার সুগার",
      Jaggery: "গুড়",
      "Rock Salt": "সেন্ধা লবণ",
      "Iodized Salt": "আয়োডিনযুক্ত লবণ",
      "Low Sodium Salt": "কম সোডিয়ামযুক্ত লবণ",
      "Black Salt": "কালা নুন",
      "Sea Salt": "সামুদ্রিক লবণ",
      "Himalayan Pink Salt": "হিমালয়ান পিঙ্ক সল্ট",
      "Canned Tomato": "ক্যান্ড টমেটো",
      "Canned Beans": "ক্যান্ড বিনস",
      "Canned Sweet Corn": "ক্যান্ড সুইট কর্ন",
      "Canned Coconut Milk": "ক্যান্ড নারকেল দুধ",
      "Canned Tuna": "ক্যান্ড টুনা",
      "Canned Mushroom": "ক্যান্ড মাশরুম",
      "Pickle (Mango)": "আচার (আম)",
      "Pickle (Mixed)": "আচার (মিক্সড)",
      Pasta: "পাস্তা",
      Macaroni: "ম্যাকারনি",
      Vermicelli: "সেমাই",
      "Noodles (Hakka)": "নুডলস (হাক্কা)",
      Tofu: "টোফু",
      "Soup Packet": "সুপ প্যাকেট",
      "Ready to Eat Meal": "রেডি টু ইট মিল",
    },
  };

  function translateName(name, lang) {
    if (!lang || lang === "en") return name;
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][name]) || name;
  }

  /* ---------- APPLICATION STATE ---------- */
  let state = {
    items: {},
    customItems: [],
    activeCategory: "all",
    searchQuery: "",
    filterPriority: "all",
    filterStatus: "all",
    sortBy: "category",
    collapsedCategories: [],
    settings: {
      theme: "light",
      autosave: true,
      showPriority: true,
      showNotes: true,
      showStarred: true,
      compact: false,
      fontSize: "medium",
    },
    userName: "",
    storeName: "",
    shoppingDate: "",
    notesItem: null,
    shoppingMode: false,
    language: "en",
  };

  let undoStack = [];
  let redoStack = [];
  let autosaveTimer = null;
  let currentEditNotesId = null;
  let confirmCallback = null;

  /* ---------- DOM REFERENCES ---------- */
  const DOM = {};
  function cacheDom() {
    DOM.splash = document.getElementById("splash-screen");
    DOM.header = document.getElementById("app-header");
    DOM.sidebar = document.getElementById("sidebar");
    DOM.sidebarOverlay = document.getElementById("sidebar-overlay");
    DOM.sidebarToggle = document.getElementById("sidebar-toggle");
    DOM.searchInput = document.getElementById("search-input");
    DOM.searchClear = document.getElementById("search-clear");
    DOM.categoryList = document.getElementById("category-list");
    DOM.itemsContainer = document.getElementById("items-container");
    DOM.emptyState = document.getElementById("empty-state");
    DOM.userName = document.getElementById("user-name");
    DOM.storeName = document.getElementById("store-name");
    DOM.shoppingDate = document.getElementById("shopping-date");
    DOM.summarySelected = document.getElementById("summary-selected");
    DOM.summaryTotal = document.getElementById("summary-total");
    DOM.summaryCategories = document.getElementById("summary-categories");
    DOM.summaryStarred = document.getElementById("summary-starred");
    DOM.summaryProgressFill = document.getElementById("summary-progress-fill");
    DOM.summaryProgressPct = document.getElementById("summary-progress-pct");
    DOM.filterPriority = document.getElementById("filter-priority");
    DOM.filterStatus = document.getElementById("filter-status");
    DOM.sortBy = document.getElementById("sort-by");
    DOM.themeIcon = document.getElementById("theme-icon");
    DOM.scrollTop = document.getElementById("scroll-top");
    DOM.printSection = document.getElementById("print-section");
    DOM.toastContainer = document.getElementById("toast-container");
    DOM.floatingSupport = document.getElementById("floating-support");
    DOM.supportBtn = document.getElementById("support-btn");
    DOM.socialMenu = document.getElementById("social-menu");
    DOM.shoppingOverlay = document.getElementById("shopping-overlay");
    DOM.shoppingList = document.getElementById("shopping-list");
    DOM.shoppingCount = document.getElementById("shopping-count");
    DOM.shoppingProgressFill = document.getElementById(
      "shopping-progress-fill",
    );
    DOM.shoppingComplete = document.getElementById("shopping-complete");
  }

  /* ---------- UTILITY FUNCTIONS ---------- */
  function generateId(name, category) {
    return `${category}::${name}`.toLowerCase().replace(/[^a-z0-9::]/g, "_");
  }

  function formatNumber(num) {
    if (num === "" || num === null || num === undefined) return "";
    return Number(num);
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function getCategoryKeys() {
    return Object.keys(PRODUCT_DB);
  }

  function getAllItemKeys() {
    const keys = [];
    for (const cat of getCategoryKeys()) {
      for (const item of PRODUCT_DB[cat].items) {
        keys.push(generateId(item.name, cat));
      }
    }
    state.customItems.forEach((ci) => keys.push(ci.id));
    return keys;
  }

  function findItemById(id) {
    for (const cat of getCategoryKeys()) {
      for (const item of PRODUCT_DB[cat].items) {
        if (generateId(item.name, cat) === id) {
          return { ...item, category: cat, id, isCustom: false };
        }
      }
    }
    const custom = state.customItems.find((ci) => ci.id === id);
    if (custom) return { ...custom, isCustom: true };
    return null;
  }

  function getFilteredItems() {
    let results = [];
    const cats = getCategoryKeys();

    for (const cat of cats) {
      const catData = PRODUCT_DB[cat];
      for (const item of catData.items) {
        const id = generateId(item.name, cat);
        const saved = state.items[id];
        results.push({
          id,
          name: item.name,
          category: cat,
          defaultAmount: item.amount,
          defaultUnit: item.unit,
          defaultPriority: item.priority,
          amount:
            saved && saved.amount !== undefined && saved.amount !== ""
              ? saved.amount
              : "",
          unit: saved && saved.unit ? saved.unit : item.unit,
          priority: saved && saved.priority ? saved.priority : item.priority,
          checked: saved ? !!saved.checked : false,
          starred: saved ? !!saved.starred : false,
          notes: saved && saved.notes ? saved.notes : "",
          displayName: translateName(item.name, state.language),
          isCustom: false,
        });
      }
    }

    state.customItems.forEach((ci) => {
      const saved = state.items[ci.id];
      results.push({
        id: ci.id,
        name: ci.name,
        category: ci.category,
        defaultAmount: ci.amount,
        defaultUnit: ci.unit,
        defaultPriority: ci.priority,
        amount:
          saved && saved.amount !== undefined && saved.amount !== ""
            ? saved.amount
            : "",
        unit: saved && saved.unit ? saved.unit : ci.unit,
        priority: saved && saved.priority ? saved.priority : ci.priority,
        checked: saved ? !!saved.checked : false,
        starred: saved ? !!saved.starred : false,
        notes: saved && saved.notes ? saved.notes : "",
        displayName: translateName(ci.name, state.language),
        isCustom: true,
      });
    });

    /* Search filter */
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      results = results.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          (i.notes && i.notes.toLowerCase().includes(q)),
      );
    }

    /* Category filter */
    if (state.activeCategory !== "all") {
      results = results.filter((i) => i.category === state.activeCategory);
    }

    /* Priority filter */
    if (state.filterPriority !== "all") {
      results = results.filter((i) => i.priority === state.filterPriority);
    }

    /* Status filter */
    if (state.filterStatus === "checked") {
      results = results.filter((i) => i.checked);
    } else if (state.filterStatus === "unchecked") {
      results = results.filter((i) => !i.checked);
    } else if (state.filterStatus === "starred") {
      results = results.filter((i) => i.starred);
    }

    /* Sorting */
    switch (state.sortBy) {
      case "name-asc":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        results.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priority":
        const pOrder = { high: 0, medium: 1, low: 2 };
        results.sort((a, b) => pOrder[a.priority] - pOrder[b.priority]);
        break;
      case "checked":
        results.sort((a, b) => (b.checked ? 1 : 0) - (a.checked ? 1 : 0));
        break;
      default:
        /* category order */
        const catOrder = getCategoryKeys();
        results.sort((a, b) => {
          const ci = catOrder.indexOf(a.category);
          const cj = catOrder.indexOf(b.category);
          if (ci !== cj) return ci - cj;
          return a.name.localeCompare(b.name);
        });
    }

    return results;
  }

  function getGroupedByCategory(items) {
    const groups = {};
    items.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }

  /* ---------- UNDO / REDO ---------- */
  function pushUndo() {
    undoStack.push(JSON.stringify(state.items));
    if (undoStack.length > 50) undoStack.shift();
    redoStack = [];
  }

  function undo() {
    if (undoStack.length === 0) return;
    redoStack.push(JSON.stringify(state.items));
    state.items = JSON.parse(undoStack.pop());
    renderItems();
    updateSummary();
    showToast("Undo", "Action undone", "info");
  }

  function redo() {
    if (redoStack.length === 0) return;
    undoStack.push(JSON.stringify(state.items));
    state.items = JSON.parse(redoStack.pop());
    renderItems();
    updateSummary();
    showToast("Redo", "Action redone", "info");
  }

  /* ---------- TOAST SYSTEM ---------- */
  function showToast(title, message, type) {
    type = type || "info";
    const icons = {
      success: "fa-check-circle",
      error: "fa-times-circle",
      warning: "fa-exclamation-triangle",
      info: "fa-info-circle",
    };
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
            <i class="fas ${icons[type]} toast-icon"></i>
            <div class="toast-content">
                <div class="toast-title">${escapeHtml(title)}</div>
                <div class="toast-message">${escapeHtml(message)}</div>
            </div>
            <button class="toast-close" aria-label="Close"><i class="fas fa-times"></i></button>
            <div class="toast-progress"></div>
        `;
    DOM.toastContainer.appendChild(toast);

    const closeBtn = toast.querySelector(".toast-close");
    const removeToast = () => {
      toast.classList.add("removing");
      setTimeout(() => toast.remove(), 300);
    };
    closeBtn.addEventListener("click", removeToast);
    setTimeout(removeToast, 3200);
  }

  /* ---------- MODAL SYSTEM ---------- */
  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const firstInput = modal.querySelector(
      'input:not([type="radio"]):not([type="checkbox"]):not([type="file"]), textarea, select',
    );
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function closeAllModals() {
    document
      .querySelectorAll(".modal-overlay")
      .forEach((m) => m.classList.add("hidden"));
    document.body.style.overflow = "";
  }

  function showConfirm(message, callback) {
    document.getElementById("confirm-message").textContent = message;
    confirmCallback = callback;
    openModal("modal-confirm");
  }

  /* ---------- RENDER: SIDEBAR CATEGORIES ---------- */
  function renderCategories() {
    let html = `<div class="category-item ${state.activeCategory === "all" ? "active" : ""}" data-category="all">
            <div class="category-item-icon" style="background:var(--primary-bg);color:var(--primary)"><i class="fas fa-border-all"></i></div>
            <span class="category-item-name">All Categories</span>
            <span class="category-item-count" id="cat-count-all">0</span>
        </div>`;

    getCategoryKeys().forEach((cat) => {
      const data = PRODUCT_DB[cat];
      const count =
        data.items.length +
        state.customItems.filter((ci) => ci.category === cat).length;
      const isActive = state.activeCategory === cat;
      html += `<div class="category-item ${isActive ? "active" : ""}" data-category="${escapeHtml(cat)}">
                <div class="category-item-icon" style="background:${data.color}22;color:${data.color}"><i class="fas ${data.icon}"></i></div>
                <span class="category-item-name">${escapeHtml(cat)}</span>
                <span class="category-item-count">${count}</span>
            </div>`;
    });

    DOM.categoryList.innerHTML = html;

    /* Update all count */
    const totalItems = getAllItemKeys().length;
    const allCountEl = document.getElementById("cat-count-all");
    if (allCountEl) allCountEl.textContent = totalItems;

    /* Bind click */
    DOM.categoryList.querySelectorAll(".category-item").forEach((el) => {
      el.addEventListener("click", () => {
        state.activeCategory = el.dataset.category;
        renderCategories();
        renderItems();
        closeSidebarMobile();
      });
    });
  }

  /* ---------- RENDER: ITEMS LIST ---------- */
  function renderItems() {
    const filtered = getFilteredItems();
    const grouped = getGroupedByCategory(filtered);
    const catKeys = getCategoryKeys();

    if (filtered.length === 0) {
      DOM.itemsContainer.innerHTML = "";
      DOM.emptyState.classList.remove("hidden");
      return;
    }

    DOM.emptyState.classList.add("hidden");
    let html = "";

    /* Render in category order */
    catKeys.forEach((cat) => {
      if (!grouped[cat] || grouped[cat].length === 0) return;
      const catData = PRODUCT_DB[cat];
      const isCollapsed = state.collapsedCategories.includes(cat);
      const checkedInCat = grouped[cat].filter((i) => i.checked).length;
      const totalInCat = grouped[cat].length;

      html += `<div class="category-section ${isCollapsed ? "collapsed" : ""}" data-cat="${escapeHtml(cat)}">
                <div class="category-section-header" data-cat="${escapeHtml(cat)}">
                    <div class="category-section-icon" style="background:${catData.color}"><i class="fas ${catData.icon}"></i></div>
                    <span class="category-section-title">${escapeHtml(cat)}</span>
                    <span class="category-section-count">${checkedInCat}/${totalInCat}</span>
                    <div class="category-section-actions">
                        <button class="cat-action-btn select-all-cat" data-cat="${escapeHtml(cat)}" title="Select all in category">
                            <i class="fas fa-check-double"></i>
                        </button>
                        <button class="cat-action-btn collapse-icon" data-cat="${escapeHtml(cat)}" title="Toggle collapse">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div class="category-section-body" style="max-height:${isCollapsed ? "0" : totalInCat * 50 + 20 + "px"}">`;

      grouped[cat].forEach((item) => {
        html += renderItemRow(item);
      });

      html += `</div></div>`;
    });

    /* Render custom categories not in PRODUCT_DB */
    const customCats = new Set(
      state.customItems
        .map((ci) => ci.category)
        .filter((c) => !catKeys.includes(c)),
    );
    customCats.forEach((cat) => {
      if (!grouped[cat] || grouped[cat].length === 0) return;
      const isCollapsed = state.collapsedCategories.includes(cat);
      const totalInCat = grouped[cat].length;
      const checkedInCat = grouped[cat].filter((i) => i.checked).length;

      html += `<div class="category-section ${isCollapsed ? "collapsed" : ""}" data-cat="${escapeHtml(cat)}">
                <div class="category-section-header" data-cat="${escapeHtml(cat)}">
                    <div class="category-section-icon" style="background:#78716C"><i class="fas fa-tag"></i></div>
                    <span class="category-section-title">${escapeHtml(cat)}</span>
                    <span class="category-section-count">${checkedInCat}/${totalInCat}</span>
                    <div class="category-section-actions">
                        <button class="cat-action-btn collapse-icon" data-cat="${escapeHtml(cat)}" title="Toggle collapse">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div class="category-section-body" style="max-height:${isCollapsed ? "0" : totalInCat * 50 + 20 + "px"}">`;

      grouped[cat].forEach((item) => {
        html += renderItemRow(item);
      });

      html += `</div></div>`;
    });

    DOM.itemsContainer.innerHTML = html;
    bindItemEvents();
  }

  function renderItemRow(item) {
    const checkedClass = item.checked ? "checked" : "";
    const starredClass = item.starred ? "starred" : "";
    const hasNotesClass = item.notes ? "has-notes" : "";
    const showPriority = state.settings.showPriority;
    const showNotes = state.settings.showNotes;
    const showStarred = state.settings.showStarred;

    let row = `<div class="item-row ${checkedClass}" data-id="${item.id}">
            <label class="custom-checkbox">
                <input type="checkbox" ${item.checked ? "checked" : ""} data-id="${item.id}" data-action="check">
                <span class="checkmark"></span>
            </label>
            <span class="item-name" title="${escapeHtml(item.displayName)}">${escapeHtml(item.displayName)}</span>`;

    if (showPriority) {
      row += `<span class="priority-dot ${item.priority}" data-id="${item.id}" data-action="priority" title="Priority: ${item.priority} (click to cycle)"></span>`;
    }

    row += `<input type="number" class="item-amount-input" value="${item.amount}" placeholder="${item.defaultAmount}" data-id="${item.id}" data-action="amount" min="0" step="any">
            <select class="item-unit-select" data-id="${item.id}" data-action="unit">`;

    UNIT_OPTIONS.forEach((u) => {
      row += `<option value="${u}" ${item.unit === u ? "selected" : ""}>${u}</option>`;
    });

    row += `</select>`;

    if (showStarred) {
      row += `<button class="star-btn ${starredClass}" data-id="${item.id}" data-action="star" title="Star this item" aria-label="Star">
                <i class="fa${item.starred ? "s" : "r"} fa-star"></i>
            </button>`;
    }

    if (showNotes) {
      row += `<button class="notes-btn ${hasNotesClass}" data-id="${item.id}" data-action="notes" title="${item.notes ? escapeHtml(item.notes) : "Add notes"}" aria-label="Notes">
                <i class="fas fa-sticky-note"></i>
            </button>`;
    }

    if (item.isCustom) {
      row += `<button class="delete-custom-btn" data-id="${item.id}" data-action="delete-custom" title="Delete custom item" aria-label="Delete">
                <i class="fas fa-trash-alt"></i>
            </button>`;
    }

    row += `</div>`;
    return row;
  }

  /* ---------- BIND ITEM EVENTS ---------- */
  function bindItemEvents() {
    /* Checkboxes */
    DOM.itemsContainer
      .querySelectorAll('[data-action="check"]')
      .forEach((cb) => {
        cb.addEventListener("change", (e) => {
          pushUndo();
          const id = e.target.dataset.id;
          if (!state.items[id]) state.items[id] = {};
          state.items[id].checked = e.target.checked;
          renderItems();
          updateSummary();
          triggerAutosave();
        });
      });

    /* Amount inputs */
    DOM.itemsContainer
      .querySelectorAll('[data-action="amount"]')
      .forEach((inp) => {
        inp.addEventListener(
          "input",
          debounce((e) => {
            const id = e.target.dataset.id;
            const val = e.target.value;
            if (!state.items[id]) state.items[id] = {};
            state.items[id].amount = val === "" ? "" : Number(val);
            triggerAutosave();
          }, 300),
        );
        inp.addEventListener("focus", (e) => {
          if (e.target.value === "") {
            const item = findItemById(e.target.dataset.id);
            if (item) e.target.placeholder = item.defaultAmount;
          }
        });
      });

    /* Unit selects */
    DOM.itemsContainer
      .querySelectorAll('[data-action="unit"]')
      .forEach((sel) => {
        sel.addEventListener("change", (e) => {
          const id = e.target.dataset.id;
          if (!state.items[id]) state.items[id] = {};
          state.items[id].unit = e.target.value;
          triggerAutosave();
        });
      });

    /* Priority dots */
    DOM.itemsContainer
      .querySelectorAll('[data-action="priority"]')
      .forEach((dot) => {
        dot.addEventListener("click", (e) => {
          pushUndo();
          const id = e.currentTarget.dataset.id;
          const cycle = ["low", "medium", "high"];
          const current = state.items[id]
            ? state.items[id].priority
            : (findItemById(id) || {}).priority || "medium";
          const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
          if (!state.items[id]) state.items[id] = {};
          state.items[id].priority = next;
          renderItems();
          triggerAutosave();
        });
      });

    /* Star buttons */
    DOM.itemsContainer
      .querySelectorAll('[data-action="star"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          pushUndo();
          const id = e.currentTarget.dataset.id;
          if (!state.items[id]) state.items[id] = {};
          state.items[id].starred = !state.items[id].starred;
          renderItems();
          updateSummary();
          triggerAutosave();
        });
      });

    /* Notes buttons */
    DOM.itemsContainer
      .querySelectorAll('[data-action="notes"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id;
          const item = findItemById(id);
          if (!item) return;
          currentEditNotesId = id;
          document.getElementById("notes-item-name").textContent = item.name;
          document.getElementById("notes-textarea").value = state.items[id]
            ? state.items[id].notes || ""
            : "";
          openModal("modal-notes");
        });
      });

    /* Delete custom buttons */
    DOM.itemsContainer
      .querySelectorAll('[data-action="delete-custom"]')
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id;
          const item = findItemById(id);
          showConfirm(
            `Are you sure you want to delete "${item ? item.name : "this item"}"? This cannot be undone.`,
            () => {
              pushUndo();
              state.customItems = state.customItems.filter(
                (ci) => ci.id !== id,
              );
              delete state.items[id];
              renderCategories();
              renderItems();
              updateSummary();
              showToast(
                "Deleted",
                `"${item ? item.name : "Item"}" removed`,
                "success",
              );
              triggerAutosave();
            },
          );
        });
      });

    /* Category header clicks - collapse */
    DOM.itemsContainer
      .querySelectorAll(".category-section-header")
      .forEach((hdr) => {
        hdr.addEventListener("click", (e) => {
          if (e.target.closest(".cat-action-btn")) return;
          const cat = hdr.dataset.cat;
          toggleCollapse(cat);
        });
      });

    /* Select all in category */
    DOM.itemsContainer.querySelectorAll(".select-all-cat").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const cat = btn.dataset.cat;
        pushUndo();
        const group = getGroupedByCategory(getFilteredItems());
        if (group[cat]) {
          const allChecked = group[cat].every((i) => i.checked);
          group[cat].forEach((item) => {
            if (!state.items[item.id]) state.items[item.id] = {};
            state.items[item.id].checked = !allChecked;
          });
          renderItems();
          updateSummary();
          triggerAutosave();
        }
      });
    });

    /* Collapse buttons */
    DOM.itemsContainer.querySelectorAll(".collapse-icon").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleCollapse(btn.dataset.cat);
      });
    });
  }

  function toggleCollapse(cat) {
    const idx = state.collapsedCategories.indexOf(cat);
    if (idx >= 0) {
      state.collapsedCategories.splice(idx, 1);
    } else {
      state.collapsedCategories.push(cat);
    }
    renderItems();
  }

  /* ---------- SUMMARY ---------- */
  function updateSummary() {
    const allIds = getAllItemKeys();
    let total = allIds.length;
    let checked = 0;
    let starred = 0;
    let activeCats = new Set();

    allIds.forEach((id) => {
      const s = state.items[id];
      const item = findItemById(id);
      if (s) {
        if (s.checked) checked++;
        if (s.starred) starred++;
      }
      if (item) activeCats.add(item.category);
    });

    DOM.summarySelected.textContent = checked;
    DOM.summaryTotal.textContent = total;
    DOM.summaryCategories.textContent = activeCats.size;
    DOM.summaryStarred.textContent = starred;

    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    DOM.summaryProgressFill.style.width = pct + "%";
    DOM.summaryProgressPct.textContent = pct + "%";
  }

  /* ---------- SEARCH ---------- */
  const handleSearch = debounce(() => {
    state.searchQuery = DOM.searchInput.value;
    if (state.searchQuery.trim()) {
      DOM.searchClear.classList.remove("hidden");
    } else {
      DOM.searchClear.classList.add("hidden");
    }
    renderItems();
  }, 200);

  /* ---------- SAVE / LOAD ---------- */
  function saveList() {
    const listName = document.getElementById("save-list-name").value.trim();
    if (!listName) {
      showToast("Error", "Please enter a list name", "error");
      return;
    }

    const savedLists = getSavedLists();
    const existingIdx = savedLists.findIndex((l) => l.name === listName);

    const listData = {
      name: listName,
      date: new Date().toISOString(),
      userName: state.userName,
      storeName: state.storeName,
      shoppingDate: state.shoppingDate,
      items: JSON.parse(JSON.stringify(state.items)),
      customItems: JSON.parse(JSON.stringify(state.customItems)),
      settings: JSON.parse(JSON.stringify(state.settings)),
    };

    if (existingIdx >= 0) {
      savedLists[existingIdx] = listData;
      showToast(
        "Updated",
        `List "${listName}" updated successfully`,
        "success",
      );
    } else {
      savedLists.unshift(listData);
      showToast("Saved", `List "${listName}" saved successfully`, "success");
    }

    localStorage.setItem("glp_saved_lists", JSON.stringify(savedLists));
    closeModal("modal-save-as");
  }

  function getSavedLists() {
    try {
      return JSON.parse(localStorage.getItem("glp_saved_lists") || "[]");
    } catch (e) {
      return [];
    }
  }

  function loadList(index) {
    const savedLists = getSavedLists();
    if (index < 0 || index >= savedLists.length) return;
    const list = savedLists[index];

    pushUndo();
    state.items = list.items || {};
    state.customItems = list.customItems || [];
    state.userName = list.userName || "";
    state.storeName = list.storeName || "";
    state.shoppingDate = list.shoppingDate || "";

    if (list.settings) {
      Object.assign(state.settings, list.settings);
      if (list.settings.language) state.language = list.settings.language;
      applySettings();
      document.getElementById("language-select").value = state.language;
    }

    DOM.userName.value = state.userName;
    DOM.storeName.value = state.storeName;
    DOM.shoppingDate.value = state.shoppingDate;

    renderCategories();
    renderItems();
    updateSummary();
    closeAllModals();
    showToast("Loaded", `List "${list.name}" loaded`, "success");
  }

  function deleteSavedList(index) {
    const savedLists = getSavedLists();
    const name = savedLists[index] ? savedLists[index].name : "this list";
    showConfirm(`Delete saved list "${name}"?`, () => {
      savedLists.splice(index, 1);
      localStorage.setItem("glp_saved_lists", JSON.stringify(savedLists));
      renderSavedLists();
      showToast("Deleted", `"${name}" removed from saved lists`, "success");
    });
  }

  function renderSavedLists() {
    const container = document.getElementById("saved-lists-container");
    const noLists = document.getElementById("no-saved-lists");
    const savedLists = getSavedLists();

    if (savedLists.length === 0) {
      container.innerHTML = "";
      noLists.classList.remove("hidden");
      return;
    }

    noLists.classList.add("hidden");
    let html = "";
    savedLists.forEach((list, idx) => {
      const date = new Date(list.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      const itemCount = Object.keys(list.items || {}).filter(
        (k) => list.items[k].checked,
      ).length;
      const totalItems = Object.keys(list.items || {}).length;

      html += `<div class="saved-list-card">
                <div class="saved-list-icon"><i class="fas fa-list"></i></div>
                <div class="saved-list-info">
                    <div class="saved-list-name">${escapeHtml(list.name)}</div>
                    <div class="saved-list-meta">${date} &bull; ${itemCount}/${totalItems} items</div>
                </div>
                <div class="saved-list-actions">
                    <button class="saved-list-action-btn" data-load="${idx}" title="Load list"><i class="fas fa-folder-open"></i></button>
                    <button class="saved-list-action-btn" data-rename="${idx}" title="Rename"><i class="fas fa-edit"></i></button>
                    <button class="saved-list-action-btn delete" data-delete="${idx}" title="Delete"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>`;
    });

    container.innerHTML = html;

    container.querySelectorAll("[data-load]").forEach((btn) => {
      btn.addEventListener("click", () => loadList(Number(btn.dataset.load)));
    });

    container.querySelectorAll("[data-rename]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.rename);
        const list = savedLists[idx];
        document.getElementById("save-list-name").value = list.name;
        openModal("modal-save-as");
        document.getElementById("btn-do-save").onclick = () => {
          const newName = document
            .getElementById("save-list-name")
            .value.trim();
          if (newName && newName !== list.name) {
            list.name = newName;
            list.date = new Date().toISOString();
            localStorage.setItem("glp_saved_lists", JSON.stringify(savedLists));
            renderSavedLists();
            showToast("Renamed", `List renamed to "${newName}"`, "success");
            closeModal("modal-save-as");
          } else {
            saveList();
          }
        };
      });
    });

    container.querySelectorAll("[data-delete]").forEach((btn) => {
      btn.addEventListener("click", () =>
        deleteSavedList(Number(btn.dataset.delete)),
      );
    });
  }

  /* ---------- AUTO-SAVE ---------- */
  function triggerAutosave() {
    if (!state.settings.autosave) return;
    clearTimeout(autosaveTimer);
    autosaveTimer = setTimeout(() => {
      saveAutoState();
    }, 2000);
  }

  function saveAutoState() {
    const data = {
      items: state.items,
      customItems: state.customItems,
      userName: state.userName,
      storeName: state.storeName,
      shoppingDate: state.shoppingDate,
      settings: state.settings,
      collapsedCategories: state.collapsedCategories,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem("glp_auto_state", JSON.stringify(data));
    } catch (e) {
      console.warn("Auto-save failed:", e);
    }
  }

  function loadAutoState() {
    try {
      const raw = localStorage.getItem("glp_auto_state");
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (data.items) state.items = data.items;
      if (data.customItems) state.customItems = data.customItems;
      if (data.userName) state.userName = data.userName;
      if (data.storeName) state.storeName = data.storeName;
      if (data.shoppingDate) state.shoppingDate = data.shoppingDate;
      if (data.settings) Object.assign(state.settings, data.settings);
      if (data.collapsedCategories)
        state.collapsedCategories = data.collapsedCategories;
      if (data.language) state.language = data.language;
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ---------- EXPORT ---------- */
  function exportList() {
    const format = document.querySelector(
      'input[name="export-format"]:checked',
    ).value;
    const checkedOnly = document.getElementById("export-checked-only").checked;
    const groupByCat = document.getElementById("export-group-category").checked;
    const includeHeader = document.getElementById(
      "export-include-header",
    ).checked;

    let items = getFilteredItems();
    if (checkedOnly) items = items.filter((i) => i.checked);

    if (items.length === 0) {
      showToast(
        "Error",
        "No items to export. Select at least one item.",
        "error",
      );
      return;
    }

    switch (format) {
      case "pdf":
        exportPDF(items, groupByCat, includeHeader);
        break;
      case "csv":
        exportCSV(items, groupByCat, includeHeader);
        break;
      case "json":
        exportJSON(items, includeHeader);
        break;
    }

    closeAllModals();
  }

  function exportPDF(items, groupByCat, includeHeader) {
    /* Build print HTML */
    let printHtml = '<div class="print-document">';

    if (includeHeader) {
      printHtml += `<div class="print-header">
                <h1>Grocery Shopping List</h1>
                <div class="print-header-meta">
                    ${state.userName ? `<span><i class="fas fa-user"></i> ${escapeHtml(state.userName)}</span>` : ""}
                    ${state.storeName ? `<span><i class="fas fa-store"></i> ${escapeHtml(state.storeName)}</span>` : ""}
                    ${state.shoppingDate ? `<span><i class="fas fa-calendar"></i> ${escapeHtml(state.shoppingDate)}</span>` : ""}
                    <span><i class="fas fa-clock"></i> ${new Date().toLocaleString()}</span>
                    <span><i class="fas fa-list-check"></i> ${items.length} items</span>
                </div>
            </div>`;
    }

    let sno = 0;
    const grouped = groupByCat
      ? getGroupedByCategory(items)
      : { "All Items": items };

    Object.keys(grouped).forEach((cat) => {
      printHtml += `<div class="print-category">
                <div class="print-category-title">${escapeHtml(cat)} (${grouped[cat].length})</div>
                <table class="print-table">
                    <thead><tr>
                        <th class="col-sno">#</th>
                        <th class="col-name">Item</th>
                        <th class="col-amount">Qty</th>
                        <th class="col-unit">Unit</th>
                        <th class="col-priority">Priority</th>
                        ${state.settings.showNotes ? '<th class="col-notes">Notes</th>' : ""}
                    </tr></thead><tbody>`;

      grouped[cat].forEach((item) => {
        sno++;
        const checkedClass = item.checked ? "checked-print" : "";
        const displayAmount =
          item.amount !== "" ? item.amount : item.defaultAmount || "-";
        const displayNotes = item.notes || "";
        printHtml += `<tr class="${checkedClass}">
                    <td class="col-sno">${sno}</td>
                    <td class="col-name">${escapeHtml(item.name)}</td>
                    <td class="col-amount">${displayAmount}</td>
                    <td class="col-unit">${escapeHtml(item.unit)}</td>
                    <td class="col-priority" style="text-transform:capitalize">${item.priority}</td>
                    ${state.settings.showNotes ? `<td class="col-notes">${escapeHtml(displayNotes)}</td>` : ""}
                </tr>`;
      });

      printHtml += "</tbody></table></div>";
    });

    printHtml += `<div class="print-footer">Generated by GroceryList Pro &bull; ${new Date().toLocaleDateString()}</div></div>`;

    DOM.printSection.innerHTML = printHtml;

    /* Use jsPDF */
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF("p", "mm", "a4");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      let yOffset = margin;

      /* Header */
      if (includeHeader) {
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(27, 67, 50);
        doc.text("Grocery Shopping List", pageWidth / 2, yOffset, {
          align: "center",
        });
        yOffset += 8;

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 100, 100);
        const metaParts = [];
        if (state.userName) metaParts.push(`Name: ${state.userName}`);
        if (state.storeName) metaParts.push(`Store: ${state.storeName}`);
        if (state.shoppingDate) metaParts.push(`Date: ${state.shoppingDate}`);
        metaParts.push(`Generated: ${new Date().toLocaleString()}`);
        metaParts.push(`Items: ${items.length}`);
        doc.text(metaParts.join("  |  "), pageWidth / 2, yOffset, {
          align: "center",
        });
        yOffset += 4;

        doc.setDrawColor(45, 106, 79);
        doc.setLineWidth(0.5);
        doc.line(margin, yOffset, pageWidth - margin, yOffset);
        yOffset += 8;
      }

      const groupedData = groupByCat
        ? getGroupedByCategory(items)
        : { "All Items": items };
      let sno = 0;
      let pageNum = 1;

      Object.keys(groupedData).forEach((cat) => {
        const catItems = groupedData[cat];

        /* Check if we need a new page for category header */
        if (yOffset > pageHeight - 30) {
          doc.addPage();
          pageNum++;
          yOffset = margin;
        }

        /* Category header */
        doc.setFillColor(240, 250, 245);
        doc.rect(margin, yOffset - 4, pageWidth - margin * 2, 8, "F");
        doc.setFillColor(45, 106, 79);
        doc.rect(margin, yOffset - 4, 1.5, 8, "F");
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(27, 67, 50);
        doc.text(`${cat} (${catItems.length})`, margin + 4, yOffset + 1);
        yOffset += 10;

        /* Table header */
        if (yOffset > pageHeight - 25) {
          doc.addPage();
          pageNum++;
          yOffset = margin;
        }

        doc.setFillColor(247, 245, 242);
        doc.rect(margin, yOffset - 3, pageWidth - margin * 2, 7, "F");
        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(80, 80, 80);

        const cols = [
          { label: "#", x: margin + 2, w: 8 },
          { label: "Item", x: margin + 12, w: 70 },
          { label: "Qty", x: margin + 85, w: 18 },
          { label: "Unit", x: margin + 105, w: 18 },
          { label: "Priority", x: margin + 125, w: 18 },
        ];

        cols.forEach((c) => doc.text(c.label, c.x, yOffset + 1));
        yOffset += 6;

        doc.setFont("helvetica", "normal");
        doc.setTextColor(68, 68, 68);

        catItems.forEach((item, idx) => {
          if (yOffset > pageHeight - 15) {
            /* Page footer */
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 8, {
              align: "center",
            });
            doc.addPage();
            pageNum++;
            yOffset = margin;

            /* Repeat table header */
            doc.setFillColor(247, 245, 242);
            doc.rect(margin, yOffset - 3, pageWidth - margin * 2, 7, "F");
            doc.setFontSize(8);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(80, 80, 80);
            cols.forEach((c) => doc.text(c.label, c.x, yOffset + 1));
            yOffset += 6;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(68, 68, 68);
          }

          sno++;
          const displayAmount =
            item.amount !== ""
              ? String(item.amount)
              : String(item.defaultAmount || "-");
          const rowColor = idx % 2 === 1 ? [250, 250, 248] : [255, 255, 255];
          doc.setFillColor(...rowColor);
          doc.rect(margin, yOffset - 3, pageWidth - margin * 2, 7, "F");

          if (item.checked) {
            doc.setTextColor(180, 180, 180);
          } else {
            doc.setTextColor(68, 68, 68);
          }

          doc.setFontSize(9);
          doc.text(String(sno), margin + 2, yOffset + 1);
          doc.text(item.name, margin + 12, yOffset + 1);
          doc.text(displayAmount, margin + 85, yOffset + 1);
          doc.text(item.unit, margin + 105, yOffset + 1);

          const pColors = {
            high: [193, 18, 31],
            medium: [200, 160, 40],
            low: [69, 123, 157],
          };
          const pc = pColors[item.priority] || [100, 100, 100];
          doc.setTextColor(...pc);
          doc.text(
            item.priority.charAt(0).toUpperCase() + item.priority.slice(1),
            margin + 125,
            yOffset + 1,
          );
          doc.setTextColor(68, 68, 68);

          yOffset += 7;
        });

        yOffset += 4;
      });

      /* Final page footer */
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${pageNum} of ${pageNum}`, pageWidth / 2, pageHeight - 8, {
        align: "center",
      });
      doc.text("Generated by GroceryList Pro", pageWidth / 2, pageHeight - 4, {
        align: "center",
      });

      const fileName = `grocery-list${state.storeName ? "-" + state.storeName.replace(/\s+/g, "-").toLowerCase() : ""}${state.shoppingDate ? "-" + state.shoppingDate : ""}.pdf`;
      doc.save(fileName);
      showToast("Exported", `PDF saved as ${fileName}`, "success");
    } catch (e) {
      console.error("PDF export error:", e);
      /* Fallback: use print */
      showToast("Info", "Opening print dialog for PDF", "info");
      window.print();
    }

    DOM.printSection.innerHTML = "";
  }

  function exportCSV(items, groupByCat, includeHeader) {
    let csv = "";

    if (includeHeader) {
      const headerParts = [];
      if (state.userName) headerParts.push(`Name,"${state.userName}"`);
      if (state.storeName) headerParts.push(`Store,"${state.storeName}"`);
      if (state.shoppingDate) headerParts.push(`Date,"${state.shoppingDate}"`);
      headerParts.push(`Generated,"${new Date().toLocaleString()}"`);
      csv += headerParts.join("\n") + "\n\n";
    }

    csv += "#,Category,Item,Quantity,Unit,Priority,Checked,Notes\n";

    let sno = 0;
    const grouped = groupByCat
      ? getGroupedByCategory(items)
      : { "All Items": items };

    Object.keys(grouped).forEach((cat) => {
      grouped[cat].forEach((item) => {
        sno++;
        const safeAmount =
          item.amount !== undefined && item.amount !== ""
            ? item.amount
            : item.defaultAmount || "";
        const safeUnit = item.unit || item.defaultUnit || "";
        const safePriority = item.priority || item.defaultPriority || "medium";
        const notes = (item.notes || "").replace(/"/g, '""');
        const displayName = item.displayName || item.name;
        csv += `${sno},"${cat}","${displayName}","${safeAmount}","${safeUnit}","${safePriority}","${item.checked ? "Yes" : "No"}","${notes}"\n`;
      });
    });

    downloadFile(csv, "grocery-list.csv", "text/csv");
    showToast("Exported", "CSV file downloaded", "success");
  }

  function exportJSON(items, includeHeader) {
    const data = {};

    if (includeHeader) {
      data.meta = {
        generatedBy: "GroceryList Pro",
        generatedAt: new Date().toISOString(),
        userName: state.userName || null,
        storeName: state.storeName || null,
        shoppingDate: state.shoppingDate || null,
        totalItems: items.length,
        checkedItems: items.filter((i) => i.checked).length,
      };
    }
    data.items = items.map((item, idx) => ({
      sno: idx + 1,
      category: item.category,
      name: item.displayName || item.name,
      nameEn: item.name,
      quantity:
        item.amount !== undefined && item.amount !== ""
          ? item.amount
          : item.defaultAmount || null,
      unit: item.unit || item.defaultUnit || null,
      priority: item.priority || item.defaultPriority || "medium",
      checked: !!item.checked,
      starred: !!item.starred,
      notes: item.notes || null,
      isCustom: item.isCustom,
    }));

    const json = JSON.stringify(data, null, 2);
    downloadFile(json, "grocery-list.json", "application/json");
    showToast("Exported", "JSON file downloaded", "success");
  }

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  /* ---------- WHATSAPP SHARE ---------- */
  function shareWhatsApp() {
    const items = getFilteredItems().filter((i) => i.checked);
    if (items.length === 0) {
      showToast(
        "Error",
        "No checked items to share. Select at least one item.",
        "error",
      );
      return;
    }

    const grouped = getGroupedByCategory(items);
    let text = "";

    if (state.userName) text += "*Name:* " + state.userName + "\n";
    if (state.storeName) text += "*Store:* " + state.storeName + "\n";
    if (state.shoppingDate) text += "*Date:* " + state.shoppingDate + "\n";
    text += "*Total:* " + items.length + " items\n";
    text += "━━━━━━━━━━━━━━━━━━\n\n";

    let sno = 0;
    Object.keys(grouped).forEach((cat) => {
      text += "*▶ " + cat + "* (" + grouped[cat].length + ")\n";
      grouped[cat].forEach((item) => {
        sno++;
        const safeAmount =
          item.amount !== undefined && item.amount !== ""
            ? item.amount
            : item.defaultAmount || "-";
        const safeUnit = item.unit || item.defaultUnit || "";
        const name = item.displayName || item.name;
        let line =
          "  " + sno + ". " + name + " — " + safeAmount + " " + safeUnit;
        if (item.notes) line += " (" + item.notes + ")";
        text += line + "\n";
      });
      text += "\n";
    });

    text += "━━━━━━━━━━━━━━━━━━\n";
    text += "_Generated by GroceryList Pro_";

    const encoded = encodeURIComponent(text);
    window.open("https://wa.me/?text=" + encoded, "_blank");
    showToast(
      "Shared",
      "Opening WhatsApp with " + items.length + " items",
      "success",
    );
  }

  /* ---------- IMPORT ---------- */
  function importJSON(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);

        if (!data.items || !Array.isArray(data.items)) {
          showToast(
            "Error",
            'Invalid JSON format. Expected "items" array.',
            "error",
          );
          return;
        }

        pushUndo();

        data.items.forEach((item) => {
          if (!item.name || !item.category) return;
          let id = generateId(item.name, item.category);
          const existing = findItemById(id);

          if (!existing) {
            /* Add as custom item if category doesn't exist in DB */
            if (!PRODUCT_DB[item.category]) {
              const customItem = {
                id,
                name: item.name,
                category: item.category,
                amount: item.quantity || 0,
                unit: item.unit || "pc",
                priority: item.priority || "medium",
              };
              if (!state.customItems.find((ci) => ci.id === id)) {
                state.customItems.push(customItem);
              }
            }
          }

          state.items[id] = {
            amount: item.quantity || "",
            unit: item.unit || (existing ? existing.unit : "pc"),
            priority:
              item.priority || (existing ? existing.priority : "medium"),
            checked: item.checked || false,
            starred: item.starred || false,
            notes: item.notes || "",
          };
        });

        if (data.meta) {
          if (data.meta.userName) {
            state.userName = data.meta.userName;
            DOM.userName.value = state.userName;
          }
          if (data.meta.storeName) {
            state.storeName = data.meta.storeName;
            DOM.storeName.value = state.storeName;
          }
          if (data.meta.shoppingDate) {
            state.shoppingDate = data.meta.shoppingDate;
            DOM.shoppingDate.value = state.shoppingDate;
          }
        }

        renderCategories();
        renderItems();
        updateSummary();
        showToast(
          "Imported",
          `${data.items.length} items imported successfully`,
          "success",
        );
        triggerAutosave();
      } catch (err) {
        showToast(
          "Error",
          "Failed to parse JSON file: " + err.message,
          "error",
        );
      }
    };
    reader.readAsText(file);
  }

  /* ---------- TEMPLATES ---------- */
  function renderTemplates() {
    const container = document.getElementById("templates-container");
    let html = "";
    TEMPLATES.forEach((tmpl) => {
      const itemCount = Object.values(tmpl.items).reduce(
        (sum, arr) => sum + arr.length,
        0,
      );
      html += `<div class="template-card" data-template="${tmpl.id}">
                <div class="template-card-icon"><i class="fas ${tmpl.icon}"></i></div>
                <h4>${escapeHtml(tmpl.name)}</h4>
                <p>${itemCount} items &bull; ${escapeHtml(tmpl.desc)}</p>
            </div>`;
    });
    container.innerHTML = html;

    container.querySelectorAll(".template-card").forEach((card) => {
      card.addEventListener("click", () => {
        const tmplId = card.dataset.template;
        const tmpl = TEMPLATES.find((t) => t.id === tmplId);
        if (!tmpl) return;

        showConfirm(
          `Load "${tmpl.name}" template? This will replace your current selections with the template items.`,
          () => {
            pushUndo();
            state.items = {};

            Object.keys(tmpl.items).forEach((cat) => {
              tmpl.items[cat].forEach((itemName) => {
                if (PRODUCT_DB[cat]) {
                  const found = PRODUCT_DB[cat].items.find(
                    (i) => i.name === itemName,
                  );
                  if (found) {
                    const id = generateId(found.name, cat);
                    state.items[id] = {
                      amount: "",
                      unit: found.unit,
                      priority: found.priority,
                      checked: false,
                      starred: false,
                      notes: "",
                    };
                  }
                }
              });
            });

            renderCategories();
            renderItems();
            updateSummary();
            closeAllModals();
            showToast(
              "Template Loaded",
              `"${tmpl.name}" applied to your list`,
              "success",
            );
            triggerAutosave();
          },
        );
      });
    });
  }

  /* ---------- STATISTICS ---------- */
  function renderStats() {
    const container = document.getElementById("stats-container");
    const allIds = getAllItemKeys();
    let totalItems = allIds.length;
    let checkedItems = 0;
    let starredItems = 0;
    let withNotes = 0;
    let withAmount = 0;
    const catStats = {};
    const priorityStats = { high: 0, medium: 0, low: 0 };

    allIds.forEach((id) => {
      const s = state.items[id];
      const item = findItemById(id);
      if (!item) return;

      if (s) {
        if (s.checked) checkedItems++;
        if (s.starred) starredItems++;
        if (s.notes && s.notes.trim()) withNotes++;
        if (s.amount !== "" && s.amount !== undefined) withAmount++;
      }

      const cat = item.category;
      if (!catStats[cat]) catStats[cat] = { total: 0, checked: 0 };
      catStats[cat].total++;
      if (s && s.checked) catStats[cat].checked++;

      const p = s ? s.priority : item.priority || "medium";
      priorityStats[p]++;
    });

    const uncheckedItems = totalItems - checkedItems;
    const pct =
      totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

    const sortedCats = Object.entries(catStats).sort(
      (a, b) => b[1].total - a[1].total,
    );
    const maxCatTotal = sortedCats.length > 0 ? sortedCats[0][1].total : 1;
    const catColors = sortedCats.map(([cat]) =>
      PRODUCT_DB[cat] ? PRODUCT_DB[cat].color : "#78716C",
    );

    let html = `
            <div class="stat-cards-row">
                <div class="stat-card"><div class="stat-card-value">${totalItems}</div><div class="stat-card-label">Total Items</div></div>
                <div class="stat-card"><div class="stat-card-value" style="color:var(--success)">${checkedItems}</div><div class="stat-card-label">Checked</div></div>
                <div class="stat-card"><div class="stat-card-value" style="color:var(--danger)">${uncheckedItems}</div><div class="stat-card-label">Remaining</div></div>
                <div class="stat-card"><div class="stat-card-value">${pct}%</div><div class="stat-card-label">Progress</div></div>
                <div class="stat-card"><div class="stat-card-value" style="color:var(--accent)">${starredItems}</div><div class="stat-card-label">Starred</div></div>
                <div class="stat-card"><div class="stat-card-value">${withNotes}</div><div class="stat-card-label">With Notes</div></div>
                <div class="stat-card"><div class="stat-card-value">${withAmount}</div><div class="stat-card-label">With Amount</div></div>
            </div>

            <div>
                <div class="stat-section-title">Items by Category</div>
                <div class="stat-bar-chart">`;

    sortedCats.forEach(([cat, stats], idx) => {
      const pctW = Math.max(3, (stats.total / maxCatTotal) * 100);
      const color = catColors[idx];
      html += `<div class="stat-bar-row">
                <span class="stat-bar-label" title="${escapeHtml(cat)}">${escapeHtml(cat)}</span>
                <div class="stat-bar-track">
                    <div class="stat-bar-fill" style="width:${pctW}%;background:${color}">
                        <span>${stats.checked}/${stats.total}</span>
                    </div>
                </div>
            </div>`;
    });

    html += `</div></div>

            <div>
                <div class="stat-section-title">Priority Distribution</div>
                <div class="stat-bar-chart">
                    <div class="stat-bar-row">
                        <span class="stat-bar-label">High</span>
                        <div class="stat-bar-track">
                            <div class="stat-bar-fill" style="width:${totalItems > 0 ? Math.max(3, (priorityStats.high / totalItems) * 100) : 3}%;background:#C1121F">
                                <span>${priorityStats.high}</span>
                            </div>
                        </div>
                    </div>
                    <div class="stat-bar-row">
                        <span class="stat-bar-label">Medium</span>
                        <div class="stat-bar-track">
                            <div class="stat-bar-fill" style="width:${totalItems > 0 ? Math.max(3, (priorityStats.medium / totalItems) * 100) : 3}%;background:#E9C46A">
                                <span>${priorityStats.medium}</span>
                            </div>
                        </div>
                    </div>
                    <div class="stat-bar-row">
                        <span class="stat-bar-label">Low</span>
                        <div class="stat-bar-track">
                            <div class="stat-bar-fill" style="width:${totalItems > 0 ? Math.max(3, (priorityStats.low / totalItems) * 100) : 3}%;background:#457B9D">
                                <span>${priorityStats.low}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    container.innerHTML = html;
  }

  /* ---------- SHOPPING MODE ---------- */
  function enterShoppingMode() {
    const filtered = getFilteredItems().filter((i) => i.checked === false);
    if (filtered.length === 0) {
      showToast(
        "Info",
        "All items are already checked. Nothing to shop.",
        "info",
      );
      return;
    }

    state.shoppingMode = true;
    DOM.shoppingOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    DOM.shoppingComplete.classList.add("hidden");
    DOM.shoppingList.classList.remove("hidden");

    renderShoppingList(filtered);
  }

  function renderShoppingList(items) {
    let html = "";
    items.forEach((item) => {
      const displayAmount =
        item.amount !== "" ? item.amount : item.defaultAmount || "";
      html += `<div class="shopping-item" data-id="${item.id}">
                <label class="custom-checkbox">
                    <input type="checkbox" data-id="${item.id}" data-action="shop-check">
                    <span class="checkmark"></span>
                </label>
                <span class="shopping-item-name">${escapeHtml(item.displayName)}</span>
                <span class="shopping-item-detail">${displayAmount} ${escapeHtml(item.unit)}</span>
            </div>`;
    });

    DOM.shoppingList.innerHTML = html;
    updateShoppingProgress(items);

    DOM.shoppingList
      .querySelectorAll('[data-action="shop-check"]')
      .forEach((cb) => {
        cb.addEventListener("change", (e) => {
          const id = e.target.dataset.id;
          pushUndo();
          if (!state.items[id]) state.items[id] = {};
          state.items[id].checked = e.target.checked;
          const row = e.target.closest(".shopping-item");
          if (e.target.checked) {
            row.classList.add("checked-shop");
            /* Auto-scroll to next unchecked */
            const next = row.nextElementSibling;
            if (next && !next.classList.contains("checked-shop")) {
              next.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          } else {
            row.classList.remove("checked-shop");
          }
          updateShoppingProgress(items);

          /* Check if all done */
          const allChecked = items.every((item) => {
            return state.items[item.id] && state.items[item.id].checked;
          });
          if (allChecked) {
            setTimeout(() => {
              DOM.shoppingList.classList.add("hidden");
              DOM.shoppingComplete.classList.remove("hidden");
            }, 400);
          }
        });
      });
  }

  function updateShoppingProgress(items) {
    const checked = items.filter(
      (item) => state.items[item.id] && state.items[item.id].checked,
    ).length;
    const total = items.length;
    DOM.shoppingCount.textContent = `${checked} / ${total}`;
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    DOM.shoppingProgressFill.style.width = pct + "%";
  }

  function exitShoppingMode() {
    state.shoppingMode = false;
    DOM.shoppingOverlay.classList.add("hidden");
    document.body.style.overflow = "";
    renderItems();
    updateSummary();
    triggerAutosave();
  }

  /* ---------- SETTINGS ---------- */
  function applySettings() {
    const s = state.settings;

    /* Theme */
    if (s.theme === "dark") {
      document.body.classList.add("dark-mode");
      DOM.themeIcon.className = "fas fa-sun";
    } else {
      document.body.classList.remove("dark-mode");
      DOM.themeIcon.className = "fas fa-moon";
    }

    /* Font size */
    document.body.classList.remove("font-small", "font-large");
    if (s.fontSize === "small") document.body.classList.add("font-small");
    if (s.fontSize === "large") document.body.classList.add("font-large");

    /* Compact */
    if (s.compact) {
      document.body.classList.add("compact-view");
    } else {
      document.body.classList.remove("compact-view");
    }

    /* Sync setting checkboxes */
    document.getElementById("setting-theme").checked = s.theme === "dark";
    document.getElementById("setting-autosave").checked = s.autosave;
    document.getElementById("setting-show-priority").checked = s.showPriority;
    document.getElementById("setting-show-notes").checked = s.showNotes;
    document.getElementById("setting-show-starred").checked = s.showStarred;
    document.getElementById("setting-compact").checked = s.compact;
    document.getElementById("setting-fontsize").value = s.fontSize;

    /* Save settings */
    triggerAutosave();
  }

  /* ---------- CUSTOM ITEM ---------- */
  function addCustomItem() {
    const name = document.getElementById("custom-item-name").value.trim();
    const category = document.getElementById("custom-item-category").value;
    const amount = document.getElementById("custom-item-amount").value;
    const unit = document.getElementById("custom-item-unit").value;
    const priority = document.getElementById("custom-item-priority").value;

    if (!name) {
      showToast("Error", "Please enter an item name", "error");
      return;
    }
    if (!category) {
      showToast("Error", "Please select a category", "error");
      return;
    }

    const id = generateId(name, category);

    if (findItemById(id)) {
      showToast(
        "Error",
        `An item named "${name}" already exists in ${category}`,
        "error",
      );
      return;
    }

    pushUndo();
    state.customItems.push({
      id,
      name,
      category,
      amount: amount ? Number(amount) : 0,
      unit,
      priority,
    });

    renderCategories();
    renderItems();
    updateSummary();
    closeModal("modal-custom");

    /* Clear form */
    document.getElementById("custom-item-name").value = "";
    document.getElementById("custom-item-amount").value = "";

    showToast("Added", `"${name}" added to ${category}`, "success");
    triggerAutosave();
  }

  function populateCustomCategorySelect() {
    const sel = document.getElementById("custom-item-category");
    let html = "";
    getCategoryKeys().forEach((cat) => {
      html += `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`;
    });
    html += '<option value="__custom__">+ New Custom Category</option>';
    sel.innerHTML = html;

    sel.addEventListener("change", () => {
      if (sel.value === "__custom__") {
        const newCat = window.prompt("Enter new category name:");
        if (newCat && newCat.trim()) {
          const catName = newCat.trim();
          /* Check if already exists */
          if (!getCategoryKeys().includes(catName)) {
            /* We won't add to PRODUCT_DB, just allow it as custom */
          }
          /* Add option and select it */
          const opt = document.createElement("option");
          opt.value = catName;
          opt.textContent = catName;
          sel.insertBefore(
            opt,
            sel.querySelector('option[value="__custom__"]'),
          );
          sel.value = catName;
        } else {
          sel.value = getCategoryKeys()[0];
        }
      }
    });
  }

  /* ---------- QUICK ACTIONS ---------- */
  function selectAllVisible() {
    pushUndo();
    const items = getFilteredItems();
    items.forEach((item) => {
      if (!state.items[item.id]) state.items[item.id] = {};
      state.items[item.id].checked = true;
    });
    renderItems();
    updateSummary();
    showToast("Selected", `${items.length} items selected`, "info");
    triggerAutosave();
  }

  function deselectAllVisible() {
    pushUndo();
    const items = getFilteredItems();
    items.forEach((item) => {
      if (state.items[item.id]) state.items[item.id].checked = false;
    });
    renderItems();
    updateSummary();
    showToast("Deselected", "All items deselected", "info");
    triggerAutosave();
  }

  function expandAll() {
    state.collapsedCategories = [];
    renderItems();
  }

  function collapseAll() {
    state.collapsedCategories = [...getCategoryKeys()];
    state.customItems.forEach((ci) => {
      if (!state.collapsedCategories.includes(ci.category)) {
        state.collapsedCategories.push(ci.category);
      }
    });
    renderItems();
  }

  function clearAmounts() {
    pushUndo();
    const items = getFilteredItems();
    items.forEach((item) => {
      if (state.items[item.id]) state.items[item.id].amount = "";
    });
    renderItems();
    showToast("Cleared", "Amounts cleared for visible items", "info");
    triggerAutosave();
  }

  function resetDefaults() {
    showConfirm(
      "Reset all items to their default values? This will clear all your selections, amounts, notes, and stars.",
      () => {
        pushUndo();
        state.items = {};
        renderItems();
        updateSummary();
        showToast("Reset", "All items reset to defaults", "success");
        triggerAutosave();
      },
    );
  }

  /* ---------- SIDEBAR MOBILE ---------- */
  function openSidebarMobile() {
    DOM.sidebar.classList.add("open");
    DOM.sidebarOverlay.classList.remove("hidden");
  }

  function closeSidebarMobile() {
    DOM.sidebar.classList.remove("open");
    DOM.sidebarOverlay.classList.add("hidden");
  }

  /* ---------- FLOATING SUPPORT ---------- */
  let supportOpen = false;

  function toggleSupport() {
    supportOpen = !supportOpen;
    DOM.socialMenu.classList.toggle("visible", supportOpen);
    DOM.supportBtn.classList.toggle("active", supportOpen);
    DOM.supportBtn.innerHTML = supportOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-headset"></i>';
  }

  /* ---------- SCROLL TO TOP ---------- */
  function handleScroll() {
    if (window.scrollY > 400) {
      DOM.scrollTop.classList.remove("hidden");
    } else {
      DOM.scrollTop.classList.add("hidden");
    }
  }

  /* ---------- KEYBOARD SHORTCUTS ---------- */
  function handleKeydown(e) {
    /* Don't trigger when typing in inputs */
    const tag = e.target.tagName;
    const isInput = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

    if (e.key === "Escape") {
      if (state.shoppingMode) {
        exitShoppingMode();
        return;
      }
      closeAllModals();
      return;
    }

    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case "s":
          e.preventDefault();
          document.getElementById("save-list-name").value =
            state.storeName || "My Grocery List";
          document.getElementById("btn-do-save").onclick = saveList;
          openModal("modal-save-as");
          break;
        case "e":
          e.preventDefault();
          openModal("modal-export");
          break;
        case "z":
          e.preventDefault();
          undo();
          break;
        case "y":
          e.preventDefault();
          redo();
          break;
        case "f":
          e.preventDefault();
          if (!isInput) {
            DOM.searchInput.focus();
          }
          break;
        case "n":
          e.preventDefault();
          if (!isInput) {
            showConfirm(
              "Start a new list? This will clear all current selections.",
              () => {
                pushUndo();
                state.items = {};
                renderItems();
                updateSummary();
                showToast("New List", "All selections cleared", "success");
                triggerAutosave();
              },
            );
          }
          break;
        case "a":
          if (!isInput) {
            e.preventDefault();
            selectAllVisible();
          }
          break;
        case "d":
          if (!isInput) {
            e.preventDefault();
            deselectAllVisible();
          }
          break;
      }
      return;
    }

    if (!isInput && e.key === "/") {
      e.preventDefault();
      DOM.searchInput.focus();
    }
  }

  /* ---------- EVENT BINDINGS ---------- */
  function bindEvents() {
    /* Sidebar toggle */
    DOM.sidebarToggle.addEventListener("click", () => {
      if (DOM.sidebar.classList.contains("open")) {
        closeSidebarMobile();
      } else {
        openSidebarMobile();
      }
    });

    DOM.sidebarOverlay.addEventListener("click", closeSidebarMobile);

    /* Search */
    DOM.searchInput.addEventListener("input", handleSearch);
    DOM.searchClear.addEventListener("click", () => {
      DOM.searchInput.value = "";
      state.searchQuery = "";
      DOM.searchClear.classList.add("hidden");
      renderItems();
      DOM.searchInput.focus();
    });

    /* Filters */
    DOM.filterPriority.addEventListener("change", () => {
      state.filterPriority = DOM.filterPriority.value;
      renderItems();
    });

    DOM.filterStatus.addEventListener("change", () => {
      state.filterStatus = DOM.filterStatus.value;
      renderItems();
    });

    DOM.sortBy.addEventListener("change", () => {
      state.sortBy = DOM.sortBy.value;
      renderItems();
    });

    /* Header inputs */
    DOM.userName.addEventListener(
      "input",
      debounce(() => {
        state.userName = DOM.userName.value.trim();
        triggerAutosave();
      }, 500),
    );

    DOM.storeName.addEventListener(
      "input",
      debounce(() => {
        state.storeName = DOM.storeName.value.trim();
        triggerAutosave();
      }, 500),
    );

    DOM.shoppingDate.addEventListener("change", () => {
      state.shoppingDate = DOM.shoppingDate.value;
      triggerAutosave();
    });

    /* Header buttons */
    document.getElementById("btn-undo").addEventListener("click", undo);
    document.getElementById("btn-redo").addEventListener("click", redo);

    document.getElementById("btn-theme").addEventListener("click", () => {
      state.settings.theme = state.settings.theme === "dark" ? "light" : "dark";
      applySettings();
    });

    document
      .getElementById("btn-settings")
      .addEventListener("click", () => openModal("modal-settings"));
    document
      .getElementById("btn-shortcuts")
      .addEventListener("click", () => openModal("modal-shortcuts"));

    document
      .getElementById("language-select")
      .addEventListener("change", (e) => {
        state.language = e.target.value;
        renderItems();
        renderCategories();
        triggerAutosave();
        const langNames = { en: "English", hi: "Hindi", bn: "Bengali" };
        showToast(
          "Language",
          "Switched to " + langNames[state.language],
          "info",
        );
      });

    document
      .getElementById("btn-whatsapp")
      .addEventListener("click", shareWhatsApp);

    document.getElementById("btn-save").addEventListener("click", () => {
      document.getElementById("save-list-name").value =
        state.storeName || "My Grocery List";
      document.getElementById("btn-do-save").onclick = saveList;
      openModal("modal-save-as");
    });

    document
      .getElementById("btn-export")
      .addEventListener("click", () => openModal("modal-export"));

    /* Summary bar buttons */
    document
      .getElementById("btn-shopping-mode")
      .addEventListener("click", enterShoppingMode);
    document.getElementById("btn-saved-lists").addEventListener("click", () => {
      renderSavedLists();
      openModal("modal-saved");
    });
    document.getElementById("btn-templates").addEventListener("click", () => {
      renderTemplates();
      openModal("modal-templates");
    });
    document.getElementById("btn-stats").addEventListener("click", () => {
      renderStats();
      openModal("modal-stats");
    });

    /* Quick actions */
    document
      .getElementById("btn-select-all")
      .addEventListener("click", selectAllVisible);
    document
      .getElementById("btn-deselect-all")
      .addEventListener("click", deselectAllVisible);
    document
      .getElementById("btn-expand-all")
      .addEventListener("click", expandAll);
    document
      .getElementById("btn-collapse-all")
      .addEventListener("click", collapseAll);
    document
      .getElementById("btn-clear-amounts")
      .addEventListener("click", clearAmounts);
    document
      .getElementById("btn-reset-defaults")
      .addEventListener("click", resetDefaults);

    /* Add custom item */
    document
      .getElementById("btn-add-custom")
      .addEventListener("click", () => openModal("modal-custom"));
    document
      .getElementById("btn-do-add-custom")
      .addEventListener("click", addCustomItem);

    /* Import */
    document.getElementById("import-file").addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        importJSON(e.target.files[0]);
        e.target.value = "";
      }
    });

    /* Export */
    document
      .getElementById("btn-do-export")
      .addEventListener("click", exportList);

    /* Confirm modal */
    document
      .getElementById("btn-confirm-action")
      .addEventListener("click", () => {
        if (confirmCallback) {
          confirmCallback();
          confirmCallback = null;
        }
        closeModal("modal-confirm");
      });

    /* Notes modal */
    document.getElementById("btn-save-notes").addEventListener("click", () => {
      if (currentEditNotesId) {
        pushUndo();
        if (!state.items[currentEditNotesId])
          state.items[currentEditNotesId] = {};
        state.items[currentEditNotesId].notes = document
          .getElementById("notes-textarea")
          .value.trim();
        renderItems();
        showToast("Notes Saved", "Notes updated", "success");
        triggerAutosave();
      }
      closeModal("modal-notes");
      currentEditNotesId = null;
    });

    /* Modal close buttons */
    document.querySelectorAll(".modal-close").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal || btn.closest(".modal-overlay").id;
        closeModal(modalId);
      });
    });

    /* Modal secondary buttons */
    document.querySelectorAll(".modal-btn-secondary").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal || btn.closest(".modal-overlay").id;
        closeModal(modalId);
      });
    });

    /* Modal overlay click to close */
    document.querySelectorAll(".modal-overlay").forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeModal(overlay.id);
        }
      });
    });

    /* Settings toggles */
    document.getElementById("setting-theme").addEventListener("change", (e) => {
      state.settings.theme = e.target.checked ? "dark" : "light";
      applySettings();
    });

    document
      .getElementById("setting-autosave")
      .addEventListener("change", (e) => {
        state.settings.autosave = e.target.checked;
        triggerAutosave();
      });

    document
      .getElementById("setting-show-priority")
      .addEventListener("change", (e) => {
        state.settings.showPriority = e.target.checked;
        renderItems();
        triggerAutosave();
      });

    document
      .getElementById("setting-show-notes")
      .addEventListener("change", (e) => {
        state.settings.showNotes = e.target.checked;
        renderItems();
        triggerAutosave();
      });

    document
      .getElementById("setting-show-starred")
      .addEventListener("change", (e) => {
        state.settings.showStarred = e.target.checked;
        renderItems();
        triggerAutosave();
      });

    document
      .getElementById("setting-compact")
      .addEventListener("change", (e) => {
        state.settings.compact = e.target.checked;
        applySettings();
        renderItems();
      });

    document
      .getElementById("setting-fontsize")
      .addEventListener("change", (e) => {
        state.settings.fontSize = e.target.value;
        applySettings();
      });

    /* Clear all data */
    document
      .getElementById("btn-clear-all-data")
      .addEventListener("click", () => {
        showConfirm(
          "This will permanently delete all saved lists and auto-save data. This cannot be undone.",
          () => {
            localStorage.removeItem("glp_auto_state");
            localStorage.removeItem("glp_saved_lists");
            state.items = {};
            state.customItems = [];
            state.userName = "";
            state.storeName = "";
            state.shoppingDate = "";
            DOM.userName.value = "";
            DOM.storeName.value = "";
            DOM.shoppingDate.value = "";
            renderCategories();
            renderItems();
            updateSummary();
            closeAllModals();
            showToast("Cleared", "All saved data has been deleted", "success");
          },
        );
      });

    /* Shopping mode */
    document
      .getElementById("btn-close-shopping")
      .addEventListener("click", exitShoppingMode);
    document
      .getElementById("btn-exit-shopping")
      .addEventListener("click", exitShoppingMode);

    /* Floating support */
    DOM.supportBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSupport();
    });

    document.addEventListener("click", (e) => {
      if (supportOpen && !e.target.closest(".floating-support")) {
        supportOpen = false;
        DOM.socialMenu.classList.remove("visible");
        DOM.supportBtn.classList.remove("active");
        DOM.supportBtn.innerHTML = '<i class="fas fa-headset"></i>';
      }
    });

    /* Scroll to top */
    DOM.scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    /* Keyboard shortcuts */
    document.addEventListener("keydown", handleKeydown);

    /* Custom item form - Enter key */
    document
      .getElementById("custom-item-name")
      .addEventListener("keydown", (e) => {
        if (e.key === "Enter") addCustomItem();
      });

    /* Save list form - Enter key */
    document
      .getElementById("save-list-name")
      .addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveList();
      });
  }

  /* ---------- INITIALIZATION ---------- */
  function init() {
    cacheDom();
    bindEvents();
    populateCustomCategorySelect();

    /* Set today's date as default */
    const today = new Date().toISOString().split("T")[0];
    DOM.shoppingDate.value = today;
    state.shoppingDate = today;

    /* Load auto-saved state */
    const loaded = loadAutoState();
    if (loaded) {
      DOM.userName.value = state.userName;
      DOM.storeName.value = state.storeName;
      DOM.shoppingDate.value = state.shoppingDate || today;
    }

    /* Restore language selector */
    document.getElementById("language-select").value = state.language;

    /* Apply settings */
    applySettings();

    /* Render */
    renderCategories();
    renderItems();
    updateSummary();

    /* Splash screen */
    setTimeout(() => {
      if (DOM.splash) {
        DOM.splash.classList.add("fade-out");
        setTimeout(() => DOM.splash.remove(), 700);
      }
    }, 2000);
  }

  /* Start the app when DOM is ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
