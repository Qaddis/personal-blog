<script setup lang="ts">
import Contacts from "../components/pages/MainPage/Contacts.vue"
import Landing from "../components/pages/MainPage/Landing.vue"
</script>

<template>
	<section class="main-page">
		<landing />

		<contacts />
	</section>
</template>

<style scoped lang="scss">
.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}
</style>
