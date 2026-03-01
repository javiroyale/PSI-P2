<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas :personas="personas" @delete-persona="eliminarPersona"
          @actualizar-persona="actualizarPersona" />
      </div>
    </div>
    <p> Count is {{ store.count }}</p>
  </div>
</template>
<script setup>
import TablaPersonas from '@/components/TablaPersonas.vue'
import FormularioPersona from '@/components/FormularioPersona.vue'

import { ref, onMounted } from 'vue';

import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

const personas = ref([]); //BACKEND

defineOptions({
  name: 'app',
});


//GET
const listadoPersonas = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/personas/');
    personas.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};


//POST
const agregarPersona = async (persona) => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/personas/',
      {
        method: 'POST', body: JSON.stringify(persona), headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

    const personaCreada = await response.json();

    //Cambiamos el id de la persona si ya existe 
    /*if (personas.value.find(p => p.id === personaCreada.id)) {
      personaCreada.id = Date.now(); 
    }*/

    personas.value = [...personas.value, personaCreada];
    store.increment()
  } catch (error) {
    console.error(error);
  }
};


//PUT
const actualizarPersona = async (id, personaActualizada) => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/personas/' + personaActualizada.id + '/', {
      method: 'PUT',
      body: JSON.stringify(personaActualizada),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const personaActualizadaJS = await response.json();
    personas.value = personas.value.map(u => (u.id === personaActualizada.id ? personaActualizadaJS : u));
  } catch (error) {
    console.error(error);
  }
};


//DELETE
const eliminarPersona = async (persona_id) => {
  try {
    await fetch('http://localhost:8000/api/v1/personas/' + persona_id + '/', {
      method: "DELETE"
    });
    personas.value = personas.value.filter(u => u.id !== persona_id);
  } catch (error) {
    console.error(error);
  }
};


onMounted(() => {
  listadoPersonas();
});

</script>
<style>
/* Estilos globales para todos los elementos button en la aplicacion */
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>