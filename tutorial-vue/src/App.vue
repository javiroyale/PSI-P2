<!-- App.vue -->
<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- Inclusion del componente "TablaPersonas" -->
        <tabla-personas :personas="personas" /> <!-- Añadido para transferir datos-->
      </div>
    </div>
  </div>
</template>
<script setup>
  // Importacion del componente "TablaPersonas"
  import TablaPersonas from '@/components/TablaPersonas.vue'
  import { ref } from 'vue';

    // Declaracion de una variable reactiva "personas" usando "ref"
  const personas = ref([
    {
      id: 1,
      nombre: 'Jon',
      apellido: 'Nieve',
      email: 'jon@email.com',
    },
    {
      id: 2,
      nombre: 'Tyrion',
      apellido: 'Lannister',
      email: 'tyrion@email.com',
    },
    {
      id: 3,
      nombre: 'Daenerys',
      apellido: 'Targaryen',
      email: 'daenerys@email.com',
    },
  ]);

</script>
<style>
  /* Estilos globales para todos los elementos button en la aplicacion */
  button {
  background: #009435;
  border: 1px solid #009435;
  }
</style>