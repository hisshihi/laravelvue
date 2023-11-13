import './bootstrap';

import Alpine from 'alpinejs';

import {createApp} from "vue/dist/vue.esm-bundler";
import HelloVue from './components/ExampleComponent.vue';

window.Alpine = Alpine;

Alpine.start();


const app = createApp({
    components: {
        'example-component': HelloVue,
    }
})

app.mount('#app')
