<template>
     <!-- Inkludera huvudmeny -->
     <Header />
     <main>
        <!-- Vyer -->
         <RouterView />
     </main>
     <!-- Inkludera footer -->
     <Footer />
    </template>
    
    <script>
    // Importera vyer samt header och footer komponenter
    import { RouterView } from 'vue-router'
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue";
    
    export default {
        components: {
            Header,
            RouterView,
            Footer
        }
    }
    </script>
    
    <style scoped>
    /* CSS-kod */
    main {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
    }
    </style>