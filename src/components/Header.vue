<!-- Single file component - header -->
<template>
    <header>
        <div class="container">
            <h1>Mina hundar</h1>
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
                </ul>
            </nav>

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
    padding: 0.2em;
    background-color: #5b6e2b;
    color: #fff;
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
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
}

a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 1000px) {
    .container {
        width: 95%;
    }
}
</style>