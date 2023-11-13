import './bootstrap';

import Alpine from 'alpinejs';

import {createApp} from "vue/dist/vue.esm-bundler";
import ExampleComponent from './components/ExampleComponent.vue';
import PostComponent from "./components/PostComponent.vue";

window.Alpine = Alpine;

Alpine.start();


const app = createApp({
    components: {
        'example-component': ExampleComponent,
        'post-component': PostComponent,
    }
})

app.mount('#app')
