export default defineEventHandler(() => {
  const generateProducts = (prefix: string, basePrice: number, icon: string) => 
    Array.from({ length: 10 }, (_, i) => ({
      id: `${prefix}-${i + 1}`,
      name: `${prefix} Especial ${i + 1}`,
      price: basePrice + (i * 5),
      img: icon
    }));

  return [
    // PIZZERÍAS
    {
      id: 'piz-1', name: 'La Pizza del Barrio', category: 'pizzerias', color: 'bg-red-600', icon: '🍕',
      rating: 4.5, reviews: 134, lat: 19.4326, lng: -99.1332,
      products: generateProducts('Pizza', 120, '🍕')
    },
    {
      id: 'piz-2', name: 'Pizza Planeta', category: 'pizzerias', color: 'bg-red-500', icon: '🚀',
      rating: 4.8, reviews: 98, lat: 19.4350, lng: -99.1310,
      products: generateProducts('Pizza Galáctica', 150, '🍕')
    },
    // PANADERÍAS
    {
      id: 'pan-1', name: 'El Trigo Dorado', category: 'panaderias', color: 'bg-orange-500', icon: '🥐',
      rating: 4.2, reviews: 210, lat: 19.4400, lng: -99.1380,
      products: generateProducts('Pan', 15, '🍞')
    },
    {
      id: 'pan-2', name: 'La Espiga Real', category: 'panaderias', color: 'bg-orange-400', icon: '🥖',
      rating: 4.6, reviews: 156, lat: 19.4380, lng: -99.1400,
      products: generateProducts('Bollo', 10, '🥐')
    },
    // FARMACIAS
    {
      id: 'far-1', name: 'Farmasim Ahorro', category: 'farmacias', color: 'bg-blue-600', icon: '💊',
      rating: 4.9, reviews: 300, lat: 19.4280, lng: -99.1360,
      products: generateProducts('Med', 50, '💊')
    },
    {
      id: 'far-2', name: 'Farmacia del Bienestar', category: 'farmacias', color: 'bg-blue-500', icon: '🏥',
      rating: 4.4, reviews: 85, lat: 19.4310, lng: -99.1320,
      products: generateProducts('Cuidado', 80, '🩹')
    }
  ]
})