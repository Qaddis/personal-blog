<script setup lang="ts"></script>

<template>
	<section class="landing"></section>
</template>

<style scoped lang="scss">
.landing {
	background: radial-gradient(
			circle at 4% 8%,
			rgba($color: #fff959, $alpha: 0.3),
			transparent 50%
		),
		radial-gradient(
			circle at 96% 92%,
			rgba($color: #9a59ff, $alpha: 0.3),
			transparent 50%
		);
	background-color: var(--dark);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
