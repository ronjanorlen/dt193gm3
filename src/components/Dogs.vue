<!-- Komponent för hundar -->
<template>
    <article @click="$emit('deleteDog')">
        <h2>{{ dog.name }}</h2>
        <p>Ägare: {{ dog.owner }}</p>
        <p>Ras: {{ dog.breed }}</p>
        <p>Ålder: {{ dog.age }}</p>
        <p>Beskrivning: {{ dog.description }}</p>
        <p>Vaccinerad: {{ dog.vaccinated }}</p>

    </article>
</template>

<script>
export default {
    props: {
        dog: Object
    }
}
</script>

<style scoped>
article {
    max-width: 800px;
    font-size: 1.2em;
    text-align: center;
    padding: 1em 0;
    background-color: white;
    border: 1px solid #999;
    margin: 1em auto 1em;
    cursor: pointer;
}

article:hover {
    background-color: #e9efdc;
}

@media screen and (max-width: 800px) {
    article {
        width: 90%;
    }
}
</style>