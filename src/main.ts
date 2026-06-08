import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import router from './router';
import 'primeicons/primeicons.css';
import './style.css';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

const MyCustomPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        formField: {
          focusBorderColor: '{stone.800}',
        },
      },
    },
  },
});

app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyCustomPreset,
    options: {
      darkModeSelector: 'none',
    },
  },
});
app.use(ConfirmationService);
app.use(ToastService);
app.mount('#app');



