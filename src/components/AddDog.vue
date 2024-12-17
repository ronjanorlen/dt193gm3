<template>
    <form @submit.prevent="addDog()">
        <label for="name">Hundens namn:</label>
        <input v-model="dog.name" type="text" required>

        <label for="owner">Ägare:</label>
        <input v-model="dog.owner" type="text" required>

        <label for="breed">Ras:</label>
        <input v-model="dog.breed" type="text" required>

        <label for="age">Ålder:</label>
        <input v-model="dog.age" type="number" required>

        <label for="description">Beskrivning:</label>
        <textarea v-model="dog.description" required></textarea>

        <label for="vaccinated">Vaccinerad:</label>
        <input v-model="dog.vaccinated" type="checkbox">

        <input type="submit" value="Lägg till">
    </form>
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
            }
        };
    },
    emits: ["dogAdded"],
    // Metod för att läsa in data 
    methods: {
        async addDog() {
            // Kontroll att fält är ifyllda
            if (this.dog.name.length > 1 && this.dog.owner && this.dog.breed && this.dog.age > 0 && this.dog.description) {
                const dogBody = { ...this.dog };  // Spara data i variabel 
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
                    console.log('Hund tillagd:', data);
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
}
</script>

<style scoped>
form {
    max-width: 800px;
    margin: 0 auto;
}

label {
    font-weight: bold;
    font-size: 1.4em;
}

input[type="text"] {
    max-width: 400px;
    padding: 0.5em;
    width: 100%;
}

input[type="submit"] {
    max-width: 100px;
    padding: 0.6em;
    width: 100%;
    margin-left: 1em;
    background-color: #5b6e2b;
    color: #fff;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
}

input[type="submit"]:hover {
    background-color: #3c4c15;
}

@media screen and (max-width: 800px) {
    form {
        width: 90%;
    }

    input[type="text"] {
        max-width: 400px;
        padding: 0.5em;
        width: 90%;
    }
}

@media screen and (max-width: 587px) {
    input[type="submit"] {
        margin-left: 0em;
        margin-top: 1em;
    }
}
</style>