<script setup>
const { cart, total } = useCart()

const realizarCompra = () => {
  if (cart.value.length === 0) return alert("El carrito está vacío")

  const tiempoEntrega = Math.floor(Math.random() * (45 - 20 + 1)) + 20; // 20 a 45 min
  const fechaActual = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  alert(`
    🎉 ¡COMPRA EXITOSA!
    ---------------------------
    Fecha: ${fechaActual}
    Total pagado: $${total.value + 5}.00
    Tiempo estimado: ${tiempoEntrega} minutos
    
    ¡Tu pedido llegará pronto al ITGAM!
  `);

  // Limpiar carrito tras la compra
  cart.value = []
}
</script>