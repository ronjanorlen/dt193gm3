<!-- Vy för alla hundar som listas -->
<template>
    <div class="container p-4 mt-4">
        <h2>Mina hundkompisar</h2>

        <!-- Loader med if/else-sats-->
        <div v-if="loading" class="loader">
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <!-- Hundlista, visas när api laddats in -->
        <div v-else>
            <!-- Tabell för alla hundar -->
            <table class="table table-hover">
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
            <!-- Lyckad inmatning av ny hund -->
            <div v-if="successDelete" class="alert alert-success" role="alert">
                {{ successDelete }}
            </div>
        </div>
        <!-- Lägg till hund -->
        <h2>Lägg till ny hund:</h2>
        <AddDog @dogAdded="getDogs()" />
    </div>
</template>

<script>
import Dogs from "../components/Dogs.vue"; // Importera komponent för att läsa ut hund
import AddDog from "../components/AddDog.vue"; // Importera komponent för att lägga till hund

export default {
    // Reaktiv data
    data() {
        return {
            dogs: [], // Hundar
            loading: true, // Loader 
            successDelete: "" // Lyckad borttagning av hund
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

            if (response.ok) {
                const data = await response.json();
                this.successDelete = "Hunden togs bort."
            }

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
    margin: 1em;
}

/* Tabell */
.table {
    max-width: 100%;
    margin: 0.6em auto;
    border: 1px solid;
    overflow-x: auto;
}

th {
    font-size: 1.2em;
    background-color: #8f8e8e;
}

/* Media queries */
@media screen and (max-width: 800px) {
    .table {
        max-width: 100%;
        margin: 0 auto;
        display: block;
    }
}
</style>