<template>
    <!-- HTML-kod -->
     <!-- Inkludera huvudmeny -->
     <Header />
     <main>
        <!-- Vyer -->
         <RouterView />
     </main>
    </template>
    
    <script>
    // Javascript-kod
    import { RouterView } from 'vue-router'
    import Header from "./components/Header.vue";
    
    export default {
        components: {
            Header,
            RouterView
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