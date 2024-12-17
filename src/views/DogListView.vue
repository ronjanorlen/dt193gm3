<!-- Undersida för alla hundar som listas -->
<template>
   <h2>Mina hundar</h2>
   <AddDog @dogAdded="getDogs()" />
   <!-- Instans av komponent, läs in varje hund -->
   <Dogs @deleteDog="deleteDog(dog._id)" v-for="dog in dogs" :dog="dog" :key="dog._id"/>
</template>

<script>
import Dogs from "../components/Dogs.vue";
import AddDog from "../components/AddDog.vue";

export default {
   // Reaktiv data
   data() {
       return {
           dogs: []
       }
   },
   components: {
       Dogs,
       AddDog
   },
   methods: {
       // Funktion för att hämta api med fetch-anrop
       async getDogs() {
           const response = await fetch("https://moment-2-backend-ramverk-ronjanorlen.onrender.com/dogs");

           // Vid svar från webbtjänst, lagra i data-variabel
           const data = await response.json();

           // Lagra data i reaktiv data 
           this.dogs = data; 
       },
       // Funktion för att ta bort hund ur listan 
       async deleteDog(_id) {
           const response = await fetch(`https://moment-2-backend-ramverk-ronjanorlen.onrender.com/dogs/${_id}`, {
               method: "DELETE", 
               headers: {
                   "Accept": "application/json",
                   "Content-type": "application/json"
               }
           });

           const data = await response.json();

           this.getDogs();
       }
   },
   mounted() {
       this.getDogs();
   }
}
</script>

<style scoped>
h2 {
   text-align: center;
   font-size: 2em;
}
</style>