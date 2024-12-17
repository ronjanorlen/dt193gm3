<template>
    <div class="container p-4 mt-4">
    <h2>Doggos - en plats att samla sina hundar</h2>
    <p>Jag är en riktig hundälskare och har alltid varit!<br> Tycker det är så mysigt
        att ta med sig hunden ut på promenad, skidåkning, cykling, en fika eller vad som helst.
        Denna webbplats är skapad för att kunna lägga till hundar som man verkligen tycker om (om man
        nu mot förmodan skulle glömma bort en sådan..). Exempelvis kan man lägga till hundar man träffar ofta,
        en hund man träffade en gång och tyckte lite extra om, eller bara lägga till alla hundar man känner till bara
        för
        att det är kul.<br><br>
        Doggos är till för att samla sina hundar så att man kan se hur många hundar man har träffat, det kanske
        är någon i listan det är dags att boka en hunddejt med inom kort!
    </p>
    <!-- Hundbild -->
    <div class="dogimage">
        <img src="@/assets/images/dogs.jpg" alt="Två hundar i en kartong" />
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
        max-width: 100%;
    }
}
</style>