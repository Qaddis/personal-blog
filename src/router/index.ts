import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import AuthorPage from "../pages/AuthorPage.vue"
import MainPage from "../pages/MainPage.vue"
import ProjectsPage from "../pages/ProjectsPage.vue"

const routes: RouteRecordRaw[] = [
	{ path: "/", component: MainPage },
	{ path: "/projects", component: ProjectsPage },
	{ path: "/author", component: AuthorPage }
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
