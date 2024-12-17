<!-- Undersida för Om-sida -->
<template>
    <div class="container p-4 mt-4">
        <h2>Om uppgiften</h2>

        <p>Att testa på Vue.js har varit ganska roligt men också utmanande. Det som är smidigt är att kunna skapa
            egna komponenter för exempelvis Header och Footer som enkelt inkluderas på alla undersidor utan att man
            behöver
            manuellt lägga in dem överallt på alla undersidor. <br><br>
            Jag tycker också att det är smidigt med RouterLink för att skapa navigering och det blir väldigt tydligt i
            JavaScript-filen vilken path som går till vad.<br><br>
            Till denna uppgift har jag använt mig av Fetch-anrop för att hämta data från mitt API, vilket var smidigt
            men
            jag är också nyfiken på att testa Axios framöver. Jag har även inkluderat Bootstrap för att testa på hur det
            är att
            kombinera flera ramverk. <br><br>
            I övrigt tycker jag det är lite knepigt att hålla reda på komponenter, vyer och hur man får dessa att "prata
            med
            varandra", men jag tror att det blir bättre ju mer man jobbar med Vue och lär sig mer.
        </p>
        <!-- Hundbild -->
        <div class="dogimage">
            <img src="@/assets/images/dogs1.jpg" alt="Tre hundar på ett fält" />
        </div>
    </div>

</template>

<script>
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 2em;
}

p {
    text-align: center;
    font-size: 1.2em;
    margin: 1em auto;
}

/* Hundbild */
.dogimage img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}

/* Media queries */
@media screen and (max-width: 800px) {
    .dogimage img {
        max-width: 90%;
    }
}
</style>