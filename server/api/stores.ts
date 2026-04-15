export default defineEventHandler(() => {
  return [
    { 
      id: 'piz-1', 
      name: 'Pizzería "La Toscana"', 
      category: 'Pizzerías', 
      color: 'from-red-600 to-orange-500', 
      icon: '🍕', 
      rating: 4.8, 
      reviews: 145, 
      products: [
        { id: 'tosc-1', name: 'Pizza Margherita Speciale', price: 180, img: '🍕', specs: ['Tomate San Marzano', 'Mozzarella de búfala', 'Albahaca fresca', 'Categoría: Gourmet', 'Stock: 20'] },
        { id: 'tosc-2', name: 'Calzone Napolitano', price: 160, img: '🥟', specs: ['Relleno de ricotta', 'Salami y pimienta', 'Empanada gigante', 'Categoría: Calzones', 'Stock: 15'] },
        { id: 'tosc-3', name: 'Pizza de Prosciutto y Rúcula', price: 220, img: '🍕', specs: ['Jamón curado italiano', 'Hojas de rúcula', 'Lascas de parmesano', 'Categoría: Premium', 'Stock: 12'] },
        { id: 'tosc-4', name: 'Focaccia al Rosmarino', price: 90, img: '🍞', specs: ['Aceite de oliva virgen', 'Sal gruesa y romero', 'Pan plano italiano', 'Categoría: Entradas', 'Stock: 30'] },
        { id: 'tosc-5', name: 'Pizza Quattro Formaggi', price: 200, img: '🧀', specs: ['Gorgonzola y Parmesano', 'Fontina y Mozzarella', 'Mezcla de 4 quesos', 'Categoría: Quesos', 'Stock: 18'] },
        { id: 'tosc-6', name: 'Lasaña de Carne al Horno', price: 150, img: '🍝', specs: ['Capas de pasta', 'Ragú de res', 'Bechamel artesanal', 'Categoría: Pastas', 'Stock: 10'] },
        { id: 'tosc-7', name: 'Pizza Marinara', price: 140, img: '🍅', specs: ['Tomate y ajo', 'Orégano y aceite', 'Clásica Vegana', 'Categoría: Vegana', 'Stock: 25'] },
        { id: 'tosc-8', name: 'Tiramisú Casero', price: 85, img: '🍰', specs: ['Postre de café', 'Mascarpone y soletilla', 'Receta original', 'Categoría: Postres', 'Stock: 15'] },
        { id: 'tosc-9', name: 'Panini de Pollo al Pesto', price: 110, img: '🥪', specs: ['Sándwich tostado', 'Pechuga de pollo', 'Salsa de albahaca', 'Categoría: Lonches', 'Stock: 20'] },
        { id: 'tosc-10', name: 'Pizza de Funghi', price: 190, img: '🍄', specs: ['Setas silvestres', 'Aceite de trufa blanca', 'Sabor intenso', 'Categoría: Gourmet', 'Stock: 14'] }
      ]
    },
    { 
      id: 'piz-2', 
      name: 'Pizzería "Gamer Slice"', 
      category: 'Pizzerías', 
      color: 'from-purple-600 to-blue-500', 
      icon: '🚀', 
      rating: 4.9, 
      reviews: 92, 
      products: [
        { id: 'game-1', name: 'Pizza Neon Pepperoni', price: 175, img: '🍕', specs: ['Extra crujiente', 'Borde de queso fundido', 'Sabor neón', 'Categoría: Clásicas', 'Stock: 40'] },
        { id: 'game-2', name: 'Pizza BBQ Carbonizada', price: 210, img: '🍗', specs: ['Pollo deshebrado', 'Tocino y cebolla', 'Salsa BBQ negra', 'Categoría: Especiales', 'Stock: 22'] },
        { id: 'game-3', name: 'Alitas Glitch (Habanero)', price: 130, img: '🔥', specs: ['10 piezas', 'Mango-habanero', 'Nivel: Picante', 'Categoría: Snacks', 'Stock: 50'] },
        { id: 'game-4', name: 'Pizza Hawaiian Glitch', price: 185, img: '🍍', specs: ['Piña caramelizada', 'Jamón ahumado', 'Toque de cerezas', 'Categoría: Tropical', 'Stock: 18'] },
        { id: 'game-5', name: 'Bastones de Queso Plasma', price: 95, img: '🥢', specs: ['Dedos de mozzarella', 'Empanizado especial', 'Dip incluido', 'Categoría: Entradas', 'Stock: 60'] },
        { id: 'game-6', name: 'Pizza Meat Overload', price: 240, img: '🥩', specs: ['Salchicha y res', 'Pepperoni y tocino', 'Carga máxima', 'Categoría: Proteína', 'Stock: 15'] },
        { id: 'game-7', name: 'Papas Fritas Cibernéticas', price: 70, img: '🍟', specs: ['Sazonador de la casa', 'Dip de queso azul', 'Corte especial', 'Categoría: Snacks', 'Stock: 100'] },
        { id: 'game-8', name: 'Pizza Veggie Cyber', price: 195, img: '🥦', specs: ['Pimiento y elote', 'Cebolla y aceitunas', 'Sin carne', 'Categoría: Vegetariana', 'Stock: 20'] },
        { id: 'game-9', name: 'Refresco de Neón (Azul)', price: 45, img: '🥤', specs: ['Bebida artesanal', 'Sabor mora azul', 'Efecto gasificado', 'Categoría: Bebidas', 'Stock: 80'] },
        { id: 'game-10', name: 'Pizza de Nutella & Bombón', price: 150, img: '🍫', specs: ['Base dulce', 'Avellana y fresa', 'Bombón quemado', 'Categoría: Postres', 'Stock: 10'] }
      ]
    },
    { 
      id: 'far-1', 
      name: 'Farmacia "Salud Total"', 
      category: 'Farmacias', 
      color: 'from-blue-400 to-cyan-500', 
      icon: '💊', 
      rating: 4.7, 
      reviews: 210, 
      products: [
        { id: 'salu-1', name: 'Paracetamol 500mg', price: 45, img: '💊', specs: ['20 tabletas', 'Dolor y fiebre', 'Uso general', 'Categoría: Analgésicos', 'Stock: 200'] },
        { id: 'salu-2', name: 'Suero Rehidratante', price: 28, img: '🥤', specs: ['Electrolitos', 'Sabor manzana 500ml', 'Hidratación rápida', 'Categoría: Hidratación', 'Stock: 150'] },
        { id: 'salu-3', name: 'Vitamina C Efervescente', price: 120, img: '🍊', specs: ['10 pastillas', 'Sistema inmune', 'Sabor naranja', 'Categoría: Vitaminas', 'Stock: 80'] },
        { id: 'salu-4', name: 'Gel Antibacterial 1L', price: 75, img: '🧴', specs: ['Alcohol al 70%', 'Desinfectante', 'Tamaño familiar', 'Categoría: Higiene', 'Stock: 120'] },
        { id: 'salu-5', name: 'Termómetro Digital', price: 150, img: '🌡️', specs: ['Punta flexible', 'Alarma sonora', 'Medición rápida', 'Categoría: Dispositivos', 'Stock: 45'] },
        { id: 'salu-6', name: 'Jarabe para la Tos', price: 110, img: '🧪', specs: ['Extracto de hiedra', 'Alivia tos seca', 'Uso pediátrico/adulto', 'Categoría: Respiratorio', 'Stock: 60'] },
        { id: 'salu-7', name: 'Alcohol Isopropílico', price: 35, img: '🧴', specs: ['Frasco 250ml', 'Desinfección heridas', 'Uso externo', 'Categoría: Curación', 'Stock: 100'] },
        { id: 'salu-8', name: 'Gasas Estériles', price: 20, img: '🩹', specs: ['Paquete 5 piezas', '10x10cm', 'Alta absorción', 'Categoría: Curación', 'Stock: 300'] },
        { id: 'salu-9', name: 'Antigripal Multisíntomas', price: 85, img: '🤧', specs: ['Para congestión', 'Estornudos y malestar', 'Cápsulas', 'Categoría: Respiratorio', 'Stock: 90'] },
        { id: 'salu-10', name: 'Protector Solar FPS 50+', price: 320, img: '☀️', specs: ['Dermatológico', 'Resistente al agua', '150ml', 'Categoría: Cuidado Piel', 'Stock: 35'] }
      ]
    },
    { 
      id: 'far-2', 
      name: 'Farmacia "Naturista Vida"', 
      category: 'Farmacias', 
      color: 'from-emerald-400 to-teal-600', 
      icon: '🌿', 
      rating: 4.6, 
      reviews: 128, 
      products: [
        { id: 'natu-1', name: 'Té de Árnica', price: 55, img: '☕', specs: ['Sobres infusión', 'Desinflamación', '100% Natural', 'Categoría: Herbolaria', 'Stock: 70'] },
        { id: 'natu-2', name: 'Aceite de Almendras', price: 85, img: '🧴', specs: ['Hidratante natural', 'Piel y cabello 100ml', 'Prensado en frío', 'Categoría: Cuidado Personal', 'Stock: 40'] },
        { id: 'natu-3', name: 'Miel de Abeja Orgánica', price: 140, img: '🍯', specs: ['Frasco 500g', 'Floración silvestre', 'Sin conservadores', 'Categoría: Suplementos', 'Stock: 30'] },
        { id: 'natu-4', name: 'Jabón de Avena', price: 45, img: '🧼', specs: ['Barra artesanal', 'Piel sensible', 'Exfoliante ligero', 'Categoría: Higiene', 'Stock: 110'] },
        { id: 'natu-5', name: 'Cápsulas de Omega 3', price: 210, img: '🐟', specs: ['Aceite de pescado', 'Salud cardíaca', 'Alta pureza', 'Categoría: Suplementos', 'Stock: 55'] },
        { id: 'natu-6', name: 'Colágeno Hidrolizado', price: 450, img: '🥛', specs: ['Polvo para disolver', 'Articulaciones y piel', 'Sin sabor', 'Categoría: Nutrición', 'Stock: 25'] },
        { id: 'natu-7', name: 'Difusor de Aromaterapia', price: 380, img: '💨', specs: ['Eléctrico con LED', 'Para aceites', 'Silencioso', 'Categoría: Bienestar', 'Stock: 15'] },
        { id: 'natu-8', name: 'Aceite Esencial de Lavanda', price: 120, img: '💧', specs: ['Gotero 10ml', 'Relajación y sueño', 'Grado terapéutico', 'Categoría: Bienestar', 'Stock: 50'] },
        { id: 'natu-9', name: 'Cloruro de Magnesio', price: 95, img: '💊', specs: ['100 tabletas', 'Sistema nervioso', 'Mineral esencial', 'Categoría: Minerales', 'Stock: 65'] },
        { id: 'natu-10', name: 'Crema de Aloe Vera', price: 130, img: '🧴', specs: ['Gel refrescante', 'Para quemaduras', 'Hidratante', 'Categoría: Cuidado Piel', 'Stock: 40'] }
      ]
    },
    { 
      id: 'pan-1', 
      name: 'Panadería "El Trigal"', 
      category: 'Panaderías', 
      color: 'from-yellow-500 to-orange-400', 
      icon: '🍞', 
      rating: 4.4, 
      reviews: 180, 
      products: [
        { id: 'trig-1', name: 'Concha de Vainilla', price: 12, img: '🥐', specs: ['Pan tradicional', 'Costra azucarada', 'Hecho hoy', 'Categoría: Pan Dulce', 'Stock: 100'] },
        { id: 'trig-2', name: 'Bolillo Horneado', price: 4, img: '🥖', specs: ['Pan de sal', 'Horno de piedra', 'Crujiente', 'Categoría: Pan de Sal', 'Stock: 500'] },
        { id: 'trig-3', name: 'Cuernito de Mantequilla', price: 18, img: '🥐', specs: ['Hojaldre suave', 'Mantequilla pura', 'Dorado', 'Categoría: Hojaldre', 'Stock: 80'] },
        { id: 'trig-4', name: 'Ojo de Buey', price: 15, img: '🥯', specs: ['Centro dulce', 'Marco de hojaldre', 'Clásico', 'Categoría: Pan Dulce', 'Stock: 45'] },
        { id: 'trig-5', name: 'Pan de Caja Integral', price: 65, img: '🍞', specs: ['Trigo entero', 'Semillas de linaza', 'Sin conservadores', 'Categoría: Saludable', 'Stock: 20'] },
        { id: 'trig-6', name: 'Donas de Chocolate', price: 14, img: '🍩', specs: ['Ganache oscuro', 'Pan frito', 'Favorito', 'Categoría: Repostería', 'Stock: 60'] },
        { id: 'trig-7', name: 'Empanada de Piña', price: 16, img: '🥟', specs: ['Mermelada natural', 'Masa horneada', 'Fruta real', 'Categoría: Rellenos', 'Stock: 55'] },
        { id: 'trig-8', name: 'Manteca de Cerdo 1kg', price: 80, img: '📦', specs: ['Ingrediente puro', 'Para repostería', 'Tradicional', 'Categoría: Insumos', 'Stock: 15'] },
        { id: 'trig-9', name: 'Cocol de Piloncillo', price: 14, img: '🥖', specs: ['Sabor anís', 'Miel de piloncillo', 'Tradicional', 'Categoría: Tradicional', 'Stock: 40'] },
        { id: 'trig-10', name: 'Pastel de Tres Leches', price: 350, img: '🎂', specs: ['Tamaño familiar', 'Tres leches', 'Decorado', 'Categoría: Pastelería', 'Stock: 8'] }
      ]
    },
    { 
      id: 'pan-2', 
      name: 'Panadería "Boulangerie D\'Or"', 
      category: 'Panaderías', 
      color: 'from-amber-600 to-yellow-700', 
      icon: '🥖', 
      rating: 4.8, 
      reviews: 110, 
      products: [
        { id: 'boul-1', name: 'Baguette Tradicional', price: 35, img: '🥖', specs: ['Corteza dura', 'Miga alveolada', 'Receta francesa', 'Categoría: Francés', 'Stock: 60'] },
        { id: 'boul-2', name: 'Croissant de Almendras', price: 42, img: '🥐', specs: ['Crema almendras', 'Almendras fileteadas', 'Hojaldre', 'Categoría: Viennoiserie', 'Stock: 30'] },
        { id: 'boul-3', name: 'Pain au Chocolat', price: 38, img: '🥐', specs: ['Chocolate amargo', 'Hojaldre francés', 'Mantequilla', 'Categoría: Viennoiserie', 'Stock: 45'] },
        { id: 'boul-4', name: 'Muffin de Arándanos', price: 30, img: '🧁', specs: ['Panqué suave', 'Frutos frescos', 'Recién hecho', 'Categoría: Repostería', 'Stock: 50'] },
        { id: 'boul-5', name: 'Cheesecake de Nuez', price: 55, img: '🍰', specs: ['Topping de nuez', 'Queso crema', 'Garapiñado', 'Categoría: Postres', 'Stock: 24'] },
        { id: 'boul-6', name: 'Pan de Centeno', price: 95, img: '🍞', specs: ['Hogaza densa', 'Hogaza oscura', 'Gourmet', 'Categoría: Gourmet', 'Stock: 15'] },
        { id: 'boul-7', name: 'Macarons (Caja 6)', price: 180, img: '🍪', specs: ['Merengue almendra', 'Sabores variados', 'Ideal regalo', 'Categoría: Regalo', 'Stock: 20'] },
        { id: 'boul-8', name: 'Brioche con Perlas', price: 48, img: '🍞', specs: ['Pan de huevo', 'Azúcar perlada', 'Muy suave', 'Categoría: Francés', 'Stock: 25'] },
        { id: 'boul-9', name: 'Eclair de Café', price: 45, img: '🥖', specs: ['Pasta choux', 'Crema pastelera', 'Sabor café', 'Categoría: Repostería', 'Stock: 30'] },
        { id: 'boul-10', name: 'Galette de Manzana', price: 60, img: '🥧', specs: ['Tarta rústica', 'Manzana canela', 'Artesanal', 'Categoría: Tartas', 'Stock: 12'] }
      ]
    },
    { 
      id: 'fer-1', 
      name: 'Ferretería "El Martillo Negro"', 
      category: 'Ferreterías', 
      color: 'from-slate-600 to-gray-800', 
      icon: '🛠️', 
      rating: 4.7, 
      reviews: 95, 
      products: [
        { id: 'mart-1', name: 'Martillo de Uña 16oz', price: 165, img: '🔨', specs: ['Mango fibra vidrio', 'Cabeza acero', 'Antivibración', 'Categoría: Herramientas', 'Stock: 30'] },
        { id: 'mart-2', name: 'Juego de Destornilladores', price: 210, img: '🪛', specs: ['Kit 6 piezas', 'Puntas imantadas', 'Mango ergonómico', 'Categoría: Herramientas', 'Stock: 25'] },
        { id: 'mart-3', name: 'Cinta Métrica 5m', price: 85, img: '📏', specs: ['Alta resistencia', 'Freno automático', 'Flexómetro', 'Categoría: Medición', 'Stock: 50'] },
        { id: 'mart-4', name: 'Taladro Rotomartillo', price: 1250, img: '🔌', specs: ['550W potencia', 'Velocidad variable', 'Uso industrial', 'Categoría: Eléctricas', 'Stock: 10'] },
        { id: 'mart-5', name: 'Llave Inglesa 10"', price: 140, img: '🔧', specs: ['Cromo vanadio', 'Apertura ajustable', 'Gran torque', 'Categoría: Mecánica', 'Stock: 20'] },
        { id: 'mart-6', name: 'Caja de Herramientas 19"', price: 450, img: '🧰', specs: ['Plástico reforzado', 'Charola interior', 'Cierres metal', 'Categoría: Almacenamiento', 'Stock: 15'] },
        { id: 'mart-7', name: 'Nivel de Burbuja', price: 110, img: '📏', specs: ['Aluminio 12"', '3 gotas medición', 'Precisión pro', 'Categoría: Medición', 'Stock: 18'] },
        { id: 'mart-8', name: 'Pinzas de Chofer', price: 95, img: '✂️', specs: ['Acero forjado', 'Mangos vinil', 'Antideslizante', 'Categoría: Herramientas', 'Stock: 35'] },
        { id: 'mart-9', name: 'Lentes de Seguridad', price: 45, img: '🥽', specs: ['Policarbonato', 'Protección UV', 'Anti-empañante', 'Categoría: Seguridad', 'Stock: 100'] },
        { id: 'mart-10', name: 'Escalera de Aluminio 3m', price: 1800, img: '🪜', specs: ['Tipo tijera', 'Carga 150kg', 'Antiderrapante', 'Categoría: Equipo', 'Stock: 5'] }
      ]
    },
    { 
      id: 'fer-2', 
      name: 'Ferretería "Suministros Industriales"', 
      category: 'Ferreterías', 
      color: 'from-zinc-700 to-neutral-900', 
      icon: '🧱', 
      rating: 4.5, 
      reviews: 64, 
      products: [
        { id: 'sumi-1', name: 'Pintura Vinílica Blanca 19L', price: 1400, img: '🎨', specs: ['Alta cobertura', 'Exterior/Interior', 'Llavable', 'Categoría: Acabados', 'Stock: 40'] },
        { id: 'sumi-2', name: 'Tubería PVC 1/2" (Tramo)', price: 75, img: '🚰', specs: ['3 metros largo', 'Agua fría', 'Cédula 40', 'Categoría: Plomería', 'Stock: 150'] },
        { id: 'sumi-3', name: 'Paquete de Tornillos (100pzs)', price: 60, img: '🔩', specs: ['Pija 1 pulgada', 'Para madera', 'Multiusos', 'Categoría: Fijación', 'Stock: 200'] },
        { id: 'sumi-4', name: 'Cerradura de Pomo', price: 280, img: '🔑', specs: ['Para recámara', 'Latón brillante', 'Incluye llaves', 'Categoría: Cerrajería', 'Stock: 30'] },
        { id: 'sumi-5', name: 'Impermeabilizante 5 años', price: 1100, img: '🏠', specs: ['Cubeta 19L', 'Rojo terracota', 'Fibratado', 'Categoría: Construcción', 'Stock: 25'] },
        { id: 'sumi-6', name: 'Silicona Multiusos', price: 95, img: '🧪', specs: ['Cartucho 280ml', 'Transparente', 'Sellado hermético', 'Categoría: Pegamentos', 'Stock: 80'] },
        { id: 'sumi-7', name: 'Lija de Agua grano 80', price: 12, img: '📄', specs: ['Hoja individual', 'Metal o madera', 'Desbaste', 'Categoría: Abrasivos', 'Stock: 500'] },
        { id: 'sumi-8', name: 'Foco LED 9W', price: 35, img: '💡', specs: ['Luz blanca fría', 'Vida 15,000 hrs', 'Ahorrador', 'Categoría: Iluminación', 'Stock: 300'] },
        { id: 'sumi-9', name: 'Extension Eléctrica 5m', price: 125, img: '🔌', specs: ['Uso doméstico', 'Calibre 16', '3 salidas', 'Categoría: Eléctrico', 'Stock: 45'] },
        { id: 'sumi-10', name: 'Manguera para Jardín 15m', price: 320, img: '🚿', specs: ['Reforzada 3 capas', 'Conexiones latón', 'Flexible', 'Categoría: Jardín', 'Stock: 20'] }
      ]
    }
  ]
})