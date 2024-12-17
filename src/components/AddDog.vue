<template>
<!-- Formulär för att lägga till hund -->
    <form @submit.prevent="addDog()">
        <label for="name">Hundens namn:</label>
        <input v-model="dog.name" type="text" id="name" required>

        <label for="owner">Ägare:</label>
        <input v-model="dog.owner" type="text" id="owner" required>

        <label for="breed">Ras:</label>
        <input v-model="dog.breed" type="text" id="breed" required>

        <label for="age">Ålder:</label>
        <input v-model="dog.age" type="number" id="age" required>

        <label for="description">Beskrivning:</label>
        <textarea v-model="dog.description" id="description" required></textarea>

        <label for="vaccinated">
            <input v-model="dog.vaccinated" type="checkbox" id="vaccinated">
            Vaccinerad
        </label>
        <input type="submit" value="Lägg till" class="submit-btn">
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
/* Formulär */
form {
    max-width: 700px;
    margin: 2em auto;
    padding: 1.5em;
    background-color: #f7f6f6;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Labels */
label {
    display: block;
    font-size: 1em;
    font-weight: bold;
    margin: 0.5em;
    color: #4c3312;
}

/* Inputs */
input[type="text"],
input[type="number"],
textarea {
    width: 100%;
    padding: 0.8em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s;
}

input:focus,
textarea:focus {
    border-color: #FBB480;
    outline: none;
    box-shadow: 0 0 4px rgba(149, 137, 48, 0.5);
}

/* Textarea */
textarea {
    resize: vertical;
    min-height: 100px;
}

/* Checkbox */
input[type="checkbox"] {
    margin-right: 0.5em;
    vertical-align: middle;
}

/* Submit-knapp */
.submit-btn {
    width: 100%;
    padding: 0.8em;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background-color: #057839;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-btn:hover {
    background-color: #01411e;
}

/* Media queries */
@media screen and (max-width: 800px) {
    form {
        width: 90%;
        padding: 1em;
        margin: 0 auto;
        border-radius: 0;
    }

    /* För submit-knappen */
    .submit-btn {
        padding: 1em;
        font-size: 1.2em;
    }
}

/* Media queries */
@media screen and (max-width: 587px) {
    input[type="submit"] {
        margin-left: 0em;
        margin-top: 1em;
    }

    /* För inputfält på små skärmar */
    input[type="text"],
    input[type="number"],
    textarea {
        width: 100%;
    }
}
</style>