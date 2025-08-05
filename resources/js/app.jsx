// import './Assets/css/main.css';
// import './Assets/css/util.css';
// import './Assets/css/util.min.css';


import './Assets/vendor/bootstrap/css/bootstrap.min.css';
import './Assets/fonts/fontawesome-5.0.8/css/fontawesome-all.min.css';
import './Assets/fonts/iconic/css/material-design-iconic-font.min.css';
import './Assets/vendor/animate/animate.css';
import './Assets/vendor/css-hamburgers/hamburgers.min.css';
import './Assets/vendor/animsition/css/animsition.min.css';
import './Assets/css/util.min.css';
import './Assets/css/main.css';

import './Assets/vendor/jquery/jquery-3.2.1.min.js';
import './Assets/vendor/animsition/js/animsition.min.js';
// import './Assets/vendor/bootstrap/js/popper.js';
// import './Assets/vendor/bootstrap/js/bootstrap.min.js';
import './Assets/js/main.js';



// Your existing app initialization code
// import './bootstrap';
// import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) =>
    //     resolvePageComponent(
    //         `./Pages/${name}.jsx`,
    //         import.meta.glob('./Pages/**/*.jsx'),
    //     ),
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || (page => <Layout children={page} />)
        return page
      },
    setup({ el, App, props }) {
        // const root = createRoot(el);

        // root.render(<App {...props} />);
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: '#4B5563',
    },
});
