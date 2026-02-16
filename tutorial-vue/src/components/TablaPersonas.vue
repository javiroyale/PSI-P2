<!-- src/components/TablaPersonas.vue -->

<template>
  <!-- Contenedor principal del componente -->
  <div id="tabla-personas">
    <!-- Tabla para mostrar informacion de personas -->
    <table class="table">
      <!-- Encabezado de la tabla -->
      <thead>
        <tr>
          <!-- Columnas del encabezado -->
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
        </tr>
      </thead>
      <!-- Cuerpo de la tabla -->
      <tbody>
        <!-- datos para Jon Nieve -->
        <tr>
          <td>Jon</td>
          <td>Nieve</td>
          <td>jon@email.com</td>
        </tr>
        <!-- datos para Tyrion Lannister -->
        <tr>
          <td>Tyrion</td>
          <td>Lannister</td>
          <td>tyrion@email.com</td>
        </tr>
        <!-- datos para Daenerys Targaryen -->
        <tr>
          <td>Daenerys</td>
          <td>Targaryen</td>
          <td>daenerys@email.com</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// Definicion del componente Vue
defineOptions({
  // Nombre del componente
  name: 'tabla-personas',
});
</script>

<style scoped>
  /* Estilos especificos del componente con el modificador "scoped" */
</style>
