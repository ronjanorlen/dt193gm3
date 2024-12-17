<!-- Undersida för Om-sida -->
<template>
    <h2>Om uppgiften</h2>

    <p>Att testa på Vue.js har varit ganska roligt men också utmanande. Det som är smidigt är att kunna skapa
        egna komponenter för exempelvis Header och Footer som enkelt inkluderas på alla undersidor utan att man behöver
        manuellt lägga in dem överallt på alla undersidor. <br><br>
        Jag tycker också att det är smidigt med RouterLink för att skapa navigering och det blir väldigt tydligt i
        JavaScript-filen vilken path som går till vad.<br><br>
        För att hämta data från mitt API har jag använt Fetch-anrop men är nyfiken på att testa Axios nästa gång. För
        mer styling och liknande skulle jag även vilja testa att
        inkludera Bootstrap, men för denna gång har jag valt att bara hålla det simpelt och inte installerat något
        ramverk för det. <br><br>
        I övrigt tycker jag det är lite knepigt att hålla reda på komponenter, vyer och hur man får dessa att "prata med
        varandra", men jag tror att det blir bättre ju mer man jobbar med Vue och lär sig mer.
    </p>
    <!-- Hundbild -->
    <div class="dogimage">
        <img src="@/assets/images/dogs1.jpg" alt="Tre hundar på ett fält" />
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
    padding: 1em;
    font-size: 1.2em;
    width: 80%;
    margin: 0 auto;
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