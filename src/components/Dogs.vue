<!-- Komponent för hund som skrivs ut, hundar i en tabell -->
<template>
    <tr>
        <td>{{ dog.name }}</td>
        <td>{{ dog.owner }}</td>
        <td>{{ dog.breed }}</td>
        <td>{{ dog.age }} år</td>
        <td>{{ dog.description }}</td>
        <td>{{ dog.vaccinated ? "Ja" : "Nej" }}</td>
        <!-- Knapp för att ta bort hund -->
        <td>
            <button @click="$emit('deleteDog')"><i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        dog: Object
    }
}
</script>


<style scoped>
/* Tabellrad och tabelldata */
tr,
td {
    padding: 0.8em;
    color: #000;
}

tbody tr:nth-child(odd) {
    background-color: #e7e7e7;
}

tbody tr:nth-child(even) {
    background-color: #ffffff;
}

tbody tr:hover {
    background-color: #C5C1B5;
}

/* Knapp för att ta bort hund */
button {
    padding: 0.5em 1em;
    background-color: #C11F09;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #c9302c;
}
</style>