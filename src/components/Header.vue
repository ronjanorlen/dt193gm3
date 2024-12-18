<!-- Single file component - header -->
<template>
    <header class="banner">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container d-flex justify-content-between">
                <RouterLink class="navbar-brand" to="/">DOGGOS</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Meny -->
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                    <ul class="navbar-nav">
                        <!-- Routerlink för navigering -->
                        <li class="nav-item">
                            <!-- Startsida -->
                            <RouterLink class="nav-link" to="/">Start</RouterLink>
                        </li>
                        <li class="nav-item">
                            <!-- Undersida med lista på alla hundar -->
                            <RouterLink class="nav-link" to="/my-dogs">Mina hundar</RouterLink>
                        </li>
                        <li class="nav-item">
                            <!-- Undersida Om-sida -->
                            <RouterLink class="nav-link" to="/about">Om</RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <!-- Text på bannerbild -->
        <div class="infostart">
            <h1>DOGGOS</h1>
            <p>Samla alla dina favorithundar på ett ställe!</p>
        </div>
        <!-- Overlay -->
        <div class="overlay"></div>
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
.banner .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}

.banner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('@/assets/images/bannerimage.jpg') no-repeat center center/cover;
    color: white;
    text-align: center;
    min-height: 550px;
    padding: 2em 1em;
    margin-top: 3em;
    overflow: hidden;
}

.banner .infostart {
    position: relative;
    z-index: 2;
    text-align: center;
}

.infostart h1 {
    font-size: 3em;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.infostart p {
    font-size: 1.4em;
    margin: 1em 0 0;
}

.navbar-brand {
    font-weight: bold;
    color: white;
    font-size: 2em;
}

.navbar {
    background-color: #050505;
}

.navbar .nav-link {
    color: white !important;
    margin: 0 1.5em;
    font-size: 1.4em;
}

.navbar .nav-link:hover {
    text-decoration: underline;
}

.navbar-toggler {
    border: 2px solid #fff;
}

/* Gör hamburge-meny vit för bättre synlighet */
.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>