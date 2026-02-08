const PRODUCT_DATA = {
  Cheese: {
    icon: "🧀",
    img:"https://i.postimg.cc/ZRJ1TSjb/Gemini-Generated-Image-betjn3betjn3betj.png",
    banner:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&h=400&fit=crop",
    description:
      "Premium cheese selection from trusted brands — Go Cheese, Amul, and Dlecta.",
    subcategories: {
      Mozzarella: {
        products: [
          {
            name: "Mozzarella Diced",
            brand: "Go Cheese",
            size: "2kg",
            img: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=300&h=300&fit=crop",
          },
          {
            name: "Mozzarella Diced",
            brand: "Go Cheese",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=300&h=300&fit=crop",
          },
          {
            name: "Mozzarella Diced",
            brand: "Amul",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1634487359989-3e90c9432133?w=300&h=300&fit=crop",
          },
          {
            name: "Mozzarella Shredded",
            brand: "Go Cheese",
            size: "2kg",
            img: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop",
          },
          {
            name: "Mozzarella Blend",
            brand: "Go Cheese",
            size: "2kg",
            img: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop",
          },
          {
            name: "Mozzarella Blend",
            brand: "Go Cheese",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop",
          },
          {
            name: "Mozzarella Blend",
            brand: "Amul",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop",
          },
        ],
      },
      "Processed Cheese": {
        products: [
          {
            name: "Processed Cheese Block",
            brand: "Go Cheese",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=300&h=300&fit=crop",
          },
          {
            name: "Processed Cheese Block",
            brand: "Amul",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=300&h=300&fit=crop",
          },
          {
            name: "Processed Cheese Block",
            brand: "Dlecta",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=300&h=300&fit=crop",
          },
        ],
      },
      "Soft Cheese": {
        products: [
          {
            name: "Cream Cheese",
            brand: "Dlecta",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=300&h=300&fit=crop",
          },
          {
            name: "Mascarpone",
            brand: "Dlecta",
            size: "400g",
            img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=300&h=300&fit=crop",
          },
          {
            name: "Feta",
            brand: "Dlecta",
            size: "250g",
            img: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },

  "Sauces & Condiments": {
    icon: "🍅",
    img:"https://i.postimg.cc/SK5bf5fG/Gemini-Generated-Image-a6bdxga6bdxga6bd.png",
    banner:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=1200&h=400&fit=crop",
    description:
      "Ketchups, Asian sauces, and condiments from Veeba and Golden Crown.",
    subcategories: {
      Ketchup: {
        products: [
          {
            name: "Tomato Ketchup Bottle",
            brand: "Veeba",
            size: "1.2kg",
            img: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=300&h=300&fit=crop",
          },
          {
            name: "Tomato Ketchup Pouch",
            brand: "Veeba",
            size: "2kg",
            img: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=300&h=300&fit=crop",
          },
          {
            name: "Tomato Ketchup",
            brand: "Golden Crown",
            size: "6kg",
            img: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=300&h=300&fit=crop",
          },
        ],
      },
      "Asian Sauce": {
        products: [
          {
            name: "Sriracha Sauce",
            brand: "Veeba",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?w=300&h=300&fit=crop",
          },
          {
            name: "Schezwan Sauce",
            brand: "Veeba",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },

  Dairy: {
    icon: "🥛",
    img:"https://i.postimg.cc/sXRwz4jz/Gemini-Generated-Image-aqr3ztaqr3ztaqr3.png",
    banner:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200&h=400&fit=crop",
    description:
      "Fresh cream, butter, milk, and ghee from Amul, Rich Graviss, and Dlecta.",
    subcategories: {
      Cream: {
        products: [
          {
            name: "Fresh Cream",
            brand: "Amul",
            size: "1L",
            img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
          },
          {
            name: "Double Dream Cream",
            brand: "Rich Graviss",
            size: "1L",
            img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
          },
          {
            name: "Whipping Cream",
            brand: "Rich Graviss",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
          },
        ],
      },
      Butter: {
        products: [
          {
            name: "Butter (Salted)",
            brand: "Amul",
            size: "500g",
            img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop",
          },
          {
            name: "Unsalted Butter",
            brand: "Dlecta",
            size: "500g",
            img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop",
          },
        ],
      },
      Milk: {
        products: [
          {
            name: "Gold Milk (Full Cream)",
            brand: "Amul",
            size: "1L",
            img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
          },
          {
            name: "Taaza Milk (Toned)",
            brand: "Amul",
            size: "1L",
            img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
          },
        ],
      },
      Ghee: {
        products: [
          {
            name: "Cow Ghee",
            brand: "Amul",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1631209121750-a9f656d38a51?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },

  Frozen: {
    icon: "🍟",
    img:"https://i.postimg.cc/kXt6N3Nh/Gemini-Generated-Image-v27hiev27hiev27h.png",
    banner:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=1200&h=400&fit=crop",
    description: "McCain fries, wedges, tikkis and nuggets for your kitchen.",
    subcategories: {
      Fries: {
        products: [
          {
            name: "Regular Fries",
            brand: "McCain",
            size: "2.5kg",
            img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=300&fit=crop",
          },
          {
            name: "Surecrisp Fries (Premium)",
            brand: "McCain",
            size: "3kg",
            img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=300&fit=crop",
          },
        ],
      },
      "Potato Snacks": {
        products: [
          {
            name: "Savoury Wedges",
            brand: "McCain",
            size: "2.5kg",
            img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop",
          },
        ],
      },
      Snacks: {
        products: [
          {
            name: "Aloo Tikki",
            brand: "McCain",
            size: "1.5kg",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop",
          },
          {
            name: "Veg Nuggets",
            brand: "McCain",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },

  "Frozen Raw": {
    icon: "❄️",
    img:"https://i.postimg.cc/mZ1p9knJ/1770550985300.png",
    banner:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=1200&h=400&fit=crop",
    description: "Frozen vegetables and seafood — peas, corn, fish, and prawns.",
    subcategories: {
      Vegetables: {
        products: [
          {
            name: "Green Peas",
            brand: "Generic",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=300&h=300&fit=crop",
          },
          {
            name: "Sweet Corn",
            brand: "Generic",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop",
          },
        ],
      },
      Seafood: {
        products: [
          {
            name: "Basa Fish",
            brand: "Generic",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1510130113356-d14f4ec17f8e?w=300&h=300&fit=crop",
          },
          {
            name: "Prawns",
            brand: "Generic",
            size: "1kg",
            img: "https://images.unsplash.com/photo-1565680018093-ebb6e6c4ef48?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },

  Canned: {
    icon: "🥫",
    img:"https://i.postimg.cc/3JSyHr8C/1770551314698.png",
    banner:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&h=400&fit=crop",
    description:
      "Canned vegetables and fruits from Golden Crown for your kitchen.",
    subcategories: {
      Vegetables: {
        products: [
          {
            name: "Button Mushroom",
            brand: "Golden Crown",
            size: "800g",
            img: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=300&h=300&fit=crop",
          },
          {
            name: "Baby Corn",
            brand: "Golden Crown",
            size: "800g",
            img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop",
          },
        ],
      },
      Fruits: {
        products: [
          {
            name: "Pineapple Slice",
            brand: "Golden Crown",
            size: "850g",
            img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=300&h=300&fit=crop",
          },
          {
            name: "Mango Pulp",
            brand: "Golden Crown",
            size: "850g",
            img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },

  Beverage: {
    icon: "🍹",
    img:"https://i.postimg.cc/0yjw6MWW/1770551309525.png",
    banner:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=400&fit=crop",
    description: "Cocktail syrups and coffee syrups from Veeba Barisco.",
    subcategories: {
      Syrup: {
        products: [
          {
            name: "Blue Curacao",
            brand: "Veeba Barisco",
            size: "750ml",
            img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop",
          },
          {
            name: "Mojito",
            brand: "Veeba Barisco",
            size: "750ml",
            img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop",
          },
          {
            name: "Vanilla Coffee Syrup",
            brand: "Veeba Barisco",
            size: "750ml",
            img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop",
          },
        ],
      },
    },
  },
};

export default PRODUCT_DATA;
