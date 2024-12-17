<!-- Undersida för alla hundar som listas -->
<template>
    <div class="container p-4 mt-4">
        <h2>Mina hundar</h2>
        <!-- Loader med if/else-sats-->
        <div v-if="loading" class="loader">
            <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Hämtar hundar..</span>
  </div>
</div>
        </div>
        
        <!-- Hundlista, visas när api laddats in -->
        <div v-else>
            <!-- Tabell för alla hundar -->
            <table class="dog-table">
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>Ägare</th>
                        <th>Ras</th>
                        <th>Ålder</th>
                        <th>Beskrivning</th>
                        <th>Vaccinerad</th>
                        <th>Radera</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Loopa igenom hundar -->
                    <Dogs v-for="dog in dogs" :key="dog._id" :dog="dog" @deleteDog="deleteDog(dog._id)" />
                </tbody>
            </table>
        </div>
        <!-- Lägg till hund -->
        <h2>Lägg till ny hund:</h2>
        <AddDog @dogAdded="getDogs()" />
    </div>
</template>

<script>
import Dogs from "../components/Dogs.vue";
import AddDog from "../components/AddDog.vue";

export default {
    // Reaktiv data
    data() {
        return {
            dogs: [], // Hundar
            loading: true // Loader 
        }
    },
    components: {
        Dogs, // Hund-komponent
        AddDog // Lägg till hund-komponent
    },
    methods: {
        // Funktion för att hämta api med fetch-anrop
        async getDogs() {
            this.loading = true; // Visa loader 
            try {
                const response = await fetch("https://moment-2-backend-ramverk-ronjanorlen.onrender.com/dogs");
                // Vid svar från webbtjänst, lagra i data-variabel
                const data = await response.json();
                // Lagra data i reaktiv data 
                this.dogs = data;
                // Om det inte går att hämta data
            } catch (error) {
                console.error("Något gick fel vid hämtning av hundar", error);
            }
            // När data hämtats
            this.loading = false; // Dölj loader
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
    // Kör funktion när komponent laddats in
    mounted() {
        this.getDogs();
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 2em;
    margin-top: 1em;
}

/* Hundtabell-container*/
.dog-table {
    width: 100%;
    margin: 0.6em auto;
    text-align: center;
    overflow-x: auto;
}

/* Tabell */
table {
    max-width: 100%;
    border-collapse: collapse;
    margin: 0.6em auto;
    border: 1px solid;
    background-color: #fff7f3;

}

/* Tabellhuvud */
th {
    background-color: #968057;
    text-transform: uppercase;
    padding: 1em;
    color: #000;
}

/* Media queries */
@media screen and (max-width: 800px) {
    .dog-table {
        max-width: 100%;
        margin: 0 auto;
        display: block;

    }

    table {
        width: 100%;
        margin: 15px auto;
    }
}
</style>