import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);

const router = new Router ({
    mode:"history",
    routes: [{
        path:"",
        component:() => import("./components/MainApp.vue"),
        children: [{
                path:"/",
                name:"dashboard",
                component:() => import("./components/views/DashboardAdmin.vue"),
                
            },
            {
                path:"/profile",
                name:"profile",
                component:() => import("./components/views/ProfileAdmin.vue"),
                
            },
            {
                path:"/blog",
                name:"blog",
                component:() => import("./components/views/PrivateBlog.vue"),
                
            },
            {
                path:"/portfolio",
                name:"portfolio",
                component:() => import("./components/views/MyPortfolio.vue"),
                
            },
            {
                path:"/dokumentasi",
                name:"dokumentasi",
                component:() => import("./components/views/DokumentasiPribadi.vue"),
                
            },
        ]
    }]
})

export default router;