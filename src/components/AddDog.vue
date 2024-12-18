<template>
    <div class="container p-4 mt-2">
        <!-- Formulär för att lägga till hund -->
        <form @submit.prevent="addDog()">
            <div class="mb-3">
                <label for="name" class="form-label">Hundens namn:</label>
                <input v-model="dog.name" type="text" id="name" class="form-control">
            </div>

            <div class="mb-3">
                <label for="owner" class="form-label">Ägare:</label>
                <input v-model="dog.owner" type="text" id="owner" class="form-control">
            </div>

            <div class="mb-3">
                <label for="breed" class="form-label">Ras:</label>
                <input v-model="dog.breed" type="text" id="breed" class="form-control">
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Ålder:</label>
                <input v-model="dog.age" type="number" id="age" class="form-control">
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Beskrivning:</label>
                <textarea v-model="dog.description" id="description" class="form-control"></textarea>
            </div>

            <div class="form-check mb-3">
                <input v-model="dog.vaccinated" type="checkbox" id="vaccinated" class="form-check-input">
                <label for="vaccinated" class="form-check-label">Vaccinerad</label>
            </div>

            <!-- Lyckad inmatning av ny hund -->
            <div v-if="success" class="alert alert-success" role="alert">
                {{ success }}
            </div>

            <!-- Felmeddelanden vid ej lyckad inmatning -->
            <div v-if="errors.length" class="alert alert-danger" role="alert">
                <p>Du har visst glömt några saker:</p>
                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>

            <button type="submit" class="btn btn-success">Lägg till hund</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dog: {
                name: "",
                owner: "",
                breed: "",
                age: null,
                description: "",
                vaccinated: false
            },
            errors: [], // Ev felmeddelanden
            success: "" // Lyckat tillägg av ny hund
        };
    },
    emits: ["dogAdded"],

    methods: {
        // Lägg till ny hund
        async addDog() {
            this.errors = []; // Töm ev tidigare fel 
            this.success = ""; // Töm ev tidigare lyckat meddelande
            // Kontrollera att fält är korrekt ifyllda 
            if (!this.dog.name) this.errors.push("Ange hundens namn.");
            if (!this.dog.owner) this.errors.push("Ange hundens ägare.");
            if (!this.dog.breed) this.errors.push("Ange hundens ras.");
            if (!this.dog.age || this.dog.age <= 0) this.errors.push("Ange ålder, lägsta möjliga är 1.");
            if (!this.dog.description) this.errors.push("Ange en beskrivning om hunden.");

            // Om ej korrekt, avbryt 
            if (this.errors.length > 0) {
                return;
            }

            // Om korrekt ifyllt, skicka data 
            const dogBody = { ...this.dog }; // Spara data 
            const response = await fetch("https://moment-2-backend-ramverk-ronjanorlen.onrender.com/dogs", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dogBody)
            });

            if (response.ok) {
                const data = await response.json();
                this.success = "Hunden har lagts till!";
            } else {
                console.error("Error", response.statusText);
            }

            // Rensa formuläret
            this.dog = {
                name: "",
                owner: "",
                breed: "",
                age: null,
                description: "",
                vaccinated: false
            };

            // Läs in listan på nytt 
            this.$emit("dogAdded");
        }
    }
}
</script>

<style scoped>
.container {
    background-color: #8f8e8e;
    border-radius: 25px;
}

form {
    width: 70%;
    margin: 0 auto;
}

label {
    font-weight: bold;
    font-size: 1em;
    color: #0e0e0e;
}

.btn {
    color: #fff;
    width: 30%;
}

.btn:hover {
    background-color: #045523;
}

/* Felmeddelanden */
.alert p {
    font-weight: bold;
}

.alert ul {
    margin: 0;
    padding-left: 1.5em;
}

/* Media queries */
@media screen and (max-width: 800px) {
    form {
        width: 100%;
    }
}

/* Media queries */
@media screen and (max-width: 587px) {
    .btn {
        width: 100%;
    }
}
</style>