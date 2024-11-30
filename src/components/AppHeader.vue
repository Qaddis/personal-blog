<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
	<header class="header">
		<div class="wrapper">
			<h1 class="logo">Personal Blog</h1>

			<nav class="navbar">
				<router-link to="/" class="navbar__link" active-class="--active">
					Главная
				</router-link>
				<router-link
					to="/projects"
					class="navbar__link"
					active-class="--active"
				>
					Проекты
				</router-link>
				<router-link to="/author" class="navbar__link" active-class="--active">
					Автор
				</router-link>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	padding: 15px 25px;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-family: var(--jost-font);
	font-size: 2.2rem;
	font-weight: 600;
	line-height: 1;
}

.navbar {
	display: flex;
	align-items: center;
	column-gap: 15px;

	&__link {
		position: relative;
		font-size: 1.1rem;
		color: var(--light);
		font-weight: 500;
		transition-property: opacity, color;
		transition-duration: 0.25s;

		&:hover {
			color: var(--violet);
		}

		&:active {
			opacity: 0.65;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -3px;
			left: 0;
			display: block;
			width: 100%;
			height: 2.5px;
			background-color: var(--dark-violet);
			border-radius: 2px;
			pointer-events: none;
			transition: opacity 0.25s;
			opacity: 0;
		}

		&.--active {
			color: var(--light);
			opacity: 1;

			&::after {
				opacity: 1;
			}
		}
	}
}
</style>
