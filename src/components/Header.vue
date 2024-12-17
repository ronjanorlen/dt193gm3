<!-- Single file component - header -->
<template>
    <header>
        <div class="container">
            <h1>Doggos <i class="fa-solid fa-paw"></i></h1>
            <nav>
                <ul>
                    <!-- Routerlink för navigering -->
                    <li>
                        <!-- Startsida -->
                        <RouterLink to="/">Start</RouterLink>
                    </li>
                    <li>
                        <!-- Undersida med lista på alla hundar -->
                        <RouterLink to="/my-dogs">Mina hundar</RouterLink>
                    </li>
                    <li>
                        <!-- Undersida Om-sida -->
                        <RouterLink to="/about">Om</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="banner">
            <img src="@/assets/images/banner.png" alt="En hundsiluett i solnedgången" />
        </div>
    </header>
</template>

<script>
// Importera och använd routerlink som komponent
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    }
}
</script>

<style scoped>
/* Styling för navigering */
header {
    padding: 0;
    background-color: #948e76;
    color: #100c0c;
}

.container {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
}

ul {
    display: flex;
    list-style-type: none;
    font-size: 1.2em;
}

li {
    padding: 0 1em;
}

a {
    color: #0a0707;
    text-decoration: none;
    text-transform: uppercase;
}

a:hover {
    text-decoration: underline;
}

.banner img {
    display: flex;
    margin: 0 auto;
    width: 100%;
    border-top: 1px solid;
}

@media screen and (max-width: 1000px) {
    .container {
        width: 95%;
    }

    header {
        font-size: 0.6em;
    }
}
</style>