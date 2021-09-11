<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                    OZONE
                </v-list-item-title>
                <v-list-item-subtitle>
                    Gestion de internet
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <inertia-link :href="route('main')">
                    OZONE
                </inertia-link>
                
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <inertia-link :href="route('login')">
                <v-btn color="success" icon>
                    Ajustes
                </v-btn>
            </inertia-link>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <slot></slot>
            </v-container>
        </v-main>

        <v-footer app>
        <!-- -->
        </v-footer>
    </v-app>
    
</template>

<script>
    export default {
        data () { 
            return {
                drawer: null,
            }
            
        },
        methods: {
            logout() {
                this.$inertia.post(route('logout'));
            },
        }
        
    }
</script>