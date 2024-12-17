<!-- Undersida för alla hundar som listas -->
<template>
    <h2>Mina hundar</h2>
    <!-- Loader med if/else-sats-->
    <div v-if="loading" class="loader"></div>
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
}

/* Loader */
.loader {
    display: flex;
    margin: 10px auto;
}

.loader {
    border: 4px solid rgba(0, 0, 0, .1);
    border-left-color: transparent;
    border-radius: 50%;
}

.loader {
    border: 4px solid rgba(0, 0, 0, .1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
}

.loader {
    border: 4px solid rgba(0, 0, 0, .1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
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