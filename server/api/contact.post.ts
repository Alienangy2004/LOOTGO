export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // 1. Validar campos obligatorios
  const { nombre, correo, mensaje, telefono, proyecto } = body
  if (!nombre || !correo || !mensaje || !telefono || !proyecto) {
    throw createError({ statusCode: 400, statusMessage: 'Todos los campos son obligatorios' })
  }

  // 2. URL de tu Google Apps Script (PEGA TU URL AQUÍ)
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzY_BzkxtraRS5HgHHn_BkzyclC9qcldAjN8dNyD-Z5mXbXvQ_0Iv8haSyYogObhtjt9A/exec'

  try {
    const response = await $fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      body: body
    })

    return { status: 'success', message: 'Datos guardados en Google Sheets' }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Error al conectar con Google Sheets' })
  }
})