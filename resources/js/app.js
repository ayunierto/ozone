require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';



//add these two line
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import "@fontsource/roboto"; // Defaults to weight 400.
import "mdi-icons/css/materialdesignicons.min.css";


Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(PortalVue);


//also add this line
Vue.use(Vuetify);

const app = document.getElementById('app');

new Vue({

     //finally add this line 
     vuetify: new Vuetify({
        // theme: { dark: true },
     }), 


    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
