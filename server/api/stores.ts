export default defineEventHandler(() => {
  const genProd = (name: string, price: number, icon: string) => 
    Array.from({ length: 10 }, (_, i) => ({
      id: `${name.toLowerCase()}-${i+1}`,
      name: `${name} ${i+1}`,
      price: price + (i * 10),
      img: icon
    }));

  return [
    { id: 'piz-1', name: 'La Pizza del Barrio', category: 'pizzerias', color: 'bg-red-600', icon: '🍕', products: genProd('Pizza Clásica', 120, '🍕') },
    { id: 'piz-2', name: 'Pizza Planeta', category: 'pizzerias', color: 'bg-red-500', icon: '🚀', products: genProd('Pizza Espacial', 140, '🍕') },
    { id: 'pan-1', name: 'El Trigo Dorado', category: 'panaderias', color: 'bg-orange-800', icon: '🥐', products: genProd('Pan Artesanal', 15, '🍞') },
    { id: 'pan-2', name: 'La Espiga Real', category: 'panaderias', color: 'bg-orange-700', icon: '🥖', products: genProd('Baguette', 20, '🥐') },
    { id: 'far-1', name: 'Farmasim Ahorro', category: 'farmacias', color: 'bg-blue-600', icon: '💊', products: genProd('Medicamento', 45, '💊') },
    { id: 'far-2', name: 'Farmacia Bienestar', category: 'farmacias', color: 'bg-blue-500', icon: '🏥', products: genProd('Suplemento', 60, '🩹') },
    { id: 'fer-1', name: 'El Tornillo Firme', category: 'ferreterias', color: 'bg-cyan-900', icon: '🛠️', products: genProd('Herramienta', 85, '🔧') },
    { id: 'fer-2', name: 'ConstruMarket', category: 'ferreterias', color: 'bg-cyan-800', icon: '🧱', products: genProd('Material', 150, '🔨') }
  ]
})