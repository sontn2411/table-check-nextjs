export const HERO_DATA = {
  title: 'Discover Extraordinary Dining Experience',
  subtitle: 'Book the best restaurants in Singapore and Japan with TableCheck.',
  backgroundImage: '/images/home/hero.png',
}

export const JAPAN_MAP_DATA = [
  {
    id: 'res-1',
    name: 'Sakura Tei',
    category: ['Japanese', 'Kaiseki'],
    image: '/images/home/cuisine-japanese.png',
    locationId: 'JP-23',
  },
  {
    id: 'res-2',
    name: 'The Marina Grill',
    category: ['Seafood', 'International'],
    image: '/images/home/area-marina-bay.png',
    locationId: 'JP-05',
  },
  {
    id: 'res-3',
    name: "L'Osteria",
    category: ['Italian', 'Fine Dining'],
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    locationId: 'JP-12',
  },
  {
    id: 'res-4',
    name: 'Sakura Tei',
    category: ['Japanese', 'Kaiseki'],
    image: '/images/home/cuisine-japanese.png',
    locationId: 'JP-23',
  },
  {
    id: 'res-5',
    name: 'The Marina 2',
    category: ['Seafood', 'International'],
    image: '/images/home/area-marina-bay.png',
    locationId: 'JP-05',
  },
]

export const PROMOTIONS = [
  {
    id: 'promo-1',
    title: 'Exclusive Spring Tasting Menu',
    restaurant: 'Zen Garden',
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    description:
      'Experience the essence of spring with our curated 7-course tasting menu, locally sourced ingredients.',
  },
  {
    id: 'promo-2',
    title: 'Early Bird Special 2:1',
    restaurant: 'Pasta Bella',
    discount: 'Buy 1 Get 1',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop',
    description:
      'Book between 5:00 PM and 6:30 PM to enjoy our Buy 1 Get 1 offer on all main courses.',
  },
  {
    id: 'promo-3',
    title: 'Seafood Extravaganza',
    restaurant: 'The Marina Grill',
    discount: 'FREE BOTTLE',
    image:
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=800&auto=format&fit=crop',
    description:
      'Enjoy a complimentary bottle of premium White Wine with every Seafood Platter for two.',
  },
  {
    id: 'promo-4',
    title: 'Romantic French Soirée',
    restaurant: 'Candlelight Bistro',
    discount: '15% OFF',
    image:
      'https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=800&auto=format&fit=crop',
    description:
      'A perfect 3-course dinner for couples under the stars. Special discount for anniversary bookings.',
  },
  {
    id: 'promo-5',
    title: 'Weekend Brunch Buffet',
    restaurant: 'Sky High Dining',
    discount: 'KIDS FREE',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    description:
      'Elevate your weekends with our panoramic city views and extensive international brunch spread.',
  },
]

export const RESTAURANTS = [
  {
    id: 'res-1',
    name: 'Sakura Tei',
    category: 'Japanese • Kaiseki',
    priceRange: '$$$$',
    rating: 4.9,
    image: '/images/home/cuisine-japanese.png',
    location: 'Shibuya, Tokyo',
    availableSlots: ['18:00', '19:30', '21:00'],
  },
  {
    id: 'res-2',
    name: 'The Marina Grill',
    category: 'Seafood • International',
    priceRange: '$$$',
    rating: 4.7,
    image: '/images/home/area-marina-bay.png',
    location: 'Marina Bay, Singapore',
    availableSlots: ['18:30', '20:00', '21:30'],
  },
  {
    id: 'res-3',
    name: "L'Osteria",
    category: 'Italian • Fine Dining',
    priceRange: '$$$$',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    location: 'Orchard, Singapore',
    availableSlots: ['19:00', '20:30'],
  },
  {
    id: 'res-4',
    name: 'Candlelight Bistro',
    category: 'French • Romantic',
    priceRange: '$$$$',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=800&auto=format&fit=crop',
    location: 'Lyon, France',
    availableSlots: ['19:30', '21:00'],
  },
  {
    id: 'res-5',
    name: 'Sky High Dining',
    category: 'Contemporary • Panoramic',
    priceRange: '$$$$$',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    location: 'Marina Bay Sands, Singapore',
    availableSlots: ['18:00', '20:00', '22:00'],
  },
  {
    id: 'res-6',
    name: 'Pasta Playground',
    category: 'Italian • Family',
    priceRange: '$$',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop',
    location: 'Little Italy, New York',
    availableSlots: ['12:00', '13:30', '18:30'],
  },
  {
    id: 'res-7',
    name: 'Burger Barn',
    category: 'American • Gourmet',
    priceRange: '$$',
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    location: 'Texas, USA',
    availableSlots: ['11:00', '14:00', '17:00'],
  },
  {
    id: 'res-8',
    name: 'Zen Garden',
    category: 'Japanese • Fusion',
    priceRange: '$$$',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    location: 'Kyoto, Japan',
    availableSlots: ['18:30', '19:45', '21:00'],
  },
]

export const COLLECTIONS = [
  {
    id: 'coll-1',
    title: 'Romantic Date Night',
    description:
      'Perfect settings for an unforgettable evening with your special someone.',
    icon: 'Heart',
    restaurants: [
      {
        name: 'Candlelight Bistro',
        category: 'French',
        image:
          'https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Sky High Dining',
        category: 'Contemporary',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'The Secret Garden',
        category: 'Mediterranean',
        image:
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'coll-2',
    title: 'Family Friendly',
    description:
      'Enjoy quality time together with menus designed for all ages.',
    icon: 'Users',
    restaurants: [
      {
        name: "Grandma's Kitchen",
        category: 'Home Style',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Pasta Playground',
        category: 'Italian',
        image:
          'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Burger Barn',
        category: 'American',
        image:
          'https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'coll-3',
    title: 'Fine Dining Selection',
    description:
      'The pinnacle of culinary excellence, where every dish is a work of art.',
    icon: 'Crown',
    restaurants: [
      {
        name: 'Zen Garden',
        category: 'Japanese Fusion',
        image:
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: "L'Osteria",
        category: 'Italian',
        image:
          'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'The Marina Grill',
        category: 'Seafood',
        image:
          'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'coll-4',
    title: 'Hidden Gems',
    description:
      'Discover secret spots and cozy corners tucked away from the city noise.',
    icon: 'Compass',
    restaurants: [
      {
        name: 'Sakura Tei',
        category: 'Japanese',
        image: '/images/home/cuisine-japanese.png',
      },
      {
        name: 'Candlelight Bistro',
        category: 'French',
        image:
          'https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Garden Terrace',
        category: 'Organic',
        image:
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'coll-5',
    title: 'Business Lunch',
    description:
      'Professional settings with efficient service for your next power meeting.',
    icon: 'Briefcase',
    restaurants: [
      {
        name: 'Sky High Dining',
        category: 'Contemporary',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'The Exchange',
        category: 'Steakhouse',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Urban Kitchen',
        category: 'International',
        image:
          'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'coll-6',
    title: 'Street Food Gems',
    description:
      'Authentic flavors and vibrant atmospheres that define the city culture.',
    icon: 'Map',
    restaurants: [
      {
        name: 'Noodle House',
        category: 'Asian',
        image:
          'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Taco Haven',
        category: 'Mexican',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Bao Boutique',
        category: 'Chinese',
        image:
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&auto=format&fit=crop',
      },
    ],
  },
]

export const CUISINES = [
  { name: 'Japanese', image: '/images/home/cuisine-japanese.png' },
  {
    name: 'Italian',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'French',
    image:
      'https://images.unsplash.com/photo-1550966841-3ee7adac169c?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Chinese',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Mexican',
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Indian',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Vietnamese',
    image:
      'https://images.unsplash.com/photo-1569060368645-4290547dfbd0?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Thai',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&auto=format&fit=crop',
  },
]

export const AREAS = [
  { name: 'Marina Bay', image: '/images/home/area-marina-bay.png' },
  {
    name: 'Shibuya',
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Orchard',
    image:
      'https://images.unsplash.com/photo-1525625230556-8e8adcaaeeb7?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ginza',
    image:
      'https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=400&auto=format&fit=crop',
  },
]
