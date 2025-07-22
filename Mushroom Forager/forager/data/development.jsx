// data/development.js

// Message constants
const dummyData = {
  message: "This is dummy data from a config file",
  status: "success",
};

const warningMessage = {
  header: "warning",
  icon: "/icons/icon_warning.svg",
  message: "This is a toxic species, proceed with caution."
};

const infoMessage = {
  icon: "/icons/cross.svg",
  message: "Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

const addMessage = {
  header: "Added to Favorites",
  icon: "/icons/cross.svg",
  message: "The mushroom has been successfully added to your favorites list!"
};

const removeMessage = {
  header: "Already in Favorites",
  icon: "/icons/cross.svg",
  message: "This mushroom is already in your favorites list."
};

const attentionMessage = {
  header: "ATTENTION!",
  icon: "/icons/icon_warning.svg",
  icon2: "/icons/cross.svg",
  message: "Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the \"Report Error\" button if you suspect a mistake."
};

// Mushroom comparison data
const mushroomComparisonData = {
  // Image data for both columns
  images: {
    userMushroom: {
      src: "/images/Your Photo.png",
      alt: "Your mushroom photo",
      title: "Your Photo"
    },
    matchedMushroom: {
      src: "/images/Death Cap.png",
      alt: "Death cap mushroom",
      title: "Death Cap",
      // Match badge
      badge: {
        percentage: "97%",
        warningIcon: "/icons/icon_warning.svg",
        skullIcon: "/icons/skull.svg"
      }
    }
  },
  
  // Characteristics comparison data
  characteristics: [
    { category: "Cap Shape", userValue: "Flat", matchedValue: "Flat" },
    { category: "Cap", userValue: "Brown", matchedValue: "Yellow" },
    { category: "CapTexture", userValue: "Smooth", matchedValue: "Smooth" },
    { category: "GillsType", userValue: "Free", matchedValue: "Free" },
    { category: "GillsColor", userValue: "White", matchedValue: "White" },
    { category: "Stem Shape", userValue: "Slender", matchedValue: "Slender" },
    { category: "Stem Color", userValue: "White", matchedValue: "White" },
    { category: "Stem Ring", userValue: "Absent", matchedValue: "Absent" },
    { category: "Habitat", userValue: "?", matchedValue: "Near oak/beech" }
  ],
};

// Mushroom detailed information
const mushroomDetails = {
  "death-cap": {
    name: "Death Cap",
    scientificName: "Amanita phalloides",
    fastFacts: {
      capDiameter: "5-15cm",
      gillColor: "White",
      stemColor: "White",
      habitat: "Temperate regions"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
  }
};

// Collection of all mushrooms
const allMushrooms = [
  {
    id: "death-cap",
    name: "Death Cap",
    isToxic: true,
    percentage: "95%",
    src: "/images/Death Cap.png",
    favorites: false,
    recentViewed: null,
    regions: ["North America", "Europe", "Texas"],
    category: ["Poisonous"]
  },
  {
    id: "paddy-straw",
    name: "Paddy Straw",
    isToxic: false,
    percentage: "90%",
    src: "/images/Paddy Straw.png",
    favorites: true,
    recentViewed: null,
    regions: ["Asia", "Texas"],
    category: ["Medicinal", "Good for Broths"]
  },
  {
    id: "destroying-angel",
    name: "Destroying Angel",
    isToxic: true,
    percentage: "80%",
    src: "/images/Destroying Angel.png",
    favorites: true,
    recentViewed: null,
    regions: ["North America", "Europe", "Texas"],
    category: ["Poisonous"]
  },
  {
    id: "false-death-cap",
    name: "False Death Cap",
    isToxic: true,
    percentage: "70%",
    src: "/images/False Death Cap.png",
    favorites: true,
    recentViewed: null,
    regions: ["North America", "South America", "Texas"],
    category: ["Poisonous"]
  },
  {
    id: "puffball",
    name: "Puffball",
    isToxic: false,
    percentage: "60%",
    src: "/images/Puffball.png",
    favorites: true,
    recentViewed: null,
    regions: ["North America", "Europe", "Africa", "Texas"],
    category: ["Good for Broths"]
  },
];

// Filter data for UI
const FilterData = [
  {
    title: "Tags",
    pills: ["Favorites", "Recents"]
  },
  {
    title: "Regions",
    pills: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"]
  },
  {
    title: "Category",
    pills: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
  }
];

// Similar mushrooms reference list
const similarMushroomsIds = ["paddy-straw", "destroying-angel", "false-death-cap", "puffball"];

// Helper functions
const getMushroomsByIds = (ids) => {
  return ids.map(id => allMushrooms.find(m => m.id === id)).filter(Boolean);
};

const getSimilarMushrooms = () => getMushroomsByIds(similarMushroomsIds);

const getAllMushrooms = () => allMushrooms;

const getMushroomDetails = (id) => mushroomDetails[id] || null;

const updateMushroomFavorite = (id, favoriteStatus) => {
  const mushroomIndex = allMushrooms.findIndex(m => m.id === id);
  if (mushroomIndex !== -1) {
    allMushrooms[mushroomIndex] = {
      ...allMushrooms[mushroomIndex], 
      favorites: favoriteStatus
    };
    return allMushrooms[mushroomIndex];
  }
  return null;
};

// Exports
export {
  warningMessage,
  dummyData,
  infoMessage,
  attentionMessage,
  addMessage,
  removeMessage,
  mushroomComparisonData,
  FilterData,
  updateMushroomFavorite,
  getAllMushrooms,
  getSimilarMushrooms,
  getMushroomDetails
};
