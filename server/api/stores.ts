export default defineEventHandler(() => {
  return [
    {
      id: 'piz-1',
      name: 'La Pizza del Barrio',
      category: 'pizzerias',
      color: 'bg-red-600',
      icon: '🍕',
      products: [
        { id: 'pz1', name: 'Pizza clásica de...', price: 140, img: '🍕' },
        { id: 'pz2', name: 'Pizza vegetariana fresca', price: 135, img: '🍕' }
      ]
    },
    {
      id: 'far-1',
      name: 'Farmasim Ahorro',
      category: 'farmacias',
      color: 'bg-blue-500',
      icon: '💊',
      products: [
        { id: 'fa1', name: 'Paracetamol', price: 45, img: '💊' }
      ]
    },
    {
      id: 'pan-1',
      name: 'El Trigo Dorado',
      category: 'panaderias',
      color: 'bg-orange-500',
      icon: '🥐',
      products: [
        { id: 'pa1', name: 'Bolillo', price: 2, img: '🥐' }
      ]
    }
  ]
})