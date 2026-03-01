<!-- App.vue -->
<template>
  <div
    id="app"
    class="container"
  >
    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- Inclusion del componente "TablaPersonas" -->
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas
          :personas="personas"
          @delete-persona="eliminarPersona"
          @actualizar-persona="actualizarPersona"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
// Importacion del componente "TablaPersonas"
import TablaPersonas from '@/components/TablaPersonas.vue'
import FormularioPersona from '@/components/FormularioPersona.vue'
import { ref, onMounted } from 'vue';

const personas = ref([]); //BACKEND

defineOptions({
  name: 'app',
});


//GET
const listadoPersonas = async () => {
  try{
    const response = await fetch('https://my-json-server.typicode.com/rmarabini/people/personas/');
    personas.value = await response.json();
  } catch (error){
    console.error(error);
  }
};


//POST
const agregarPersona = async (persona) => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/rmarabini/people/personas/', 
    { method: 'POST', body: JSON.stringify(persona), headers: {'Content-type': 'application/json; charset=UTF-8'},
    });

    const personaCreada = await response.json();

    //Cambiamos el id de la persona si ya existe 
    if (personas.value.find(p => p.id === personaCreada.id)) {
      personaCreada.id = Date.now(); 
    }

    personas.value = [...personas.value, personaCreada];
  } catch (error){
    console.error(error);
  }
};


//PUT
const actualizarPersona = async (id, personaActualizada) => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/rmarabini/people/personas/'+personaActualizada.id+'/', {
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
  try{
    await fetch('https://my-json-server.typicode.com/rmarabini/people/personas/'+persona_id+'/', {
      method: "DELETE"
    });
    personas.value= personas.value.filter(u => u.id !== persona_id);
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