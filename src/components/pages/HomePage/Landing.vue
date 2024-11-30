<script setup lang="ts">
import { onMounted, ref } from "vue"

interface IAnimSettings {
	value: string
	values: string[]
	isAnimate: boolean
	valueIndex: number
	charIndex: number
}

const animationSettings = ref<IAnimSettings>({
	value: "",
	values: ["full-stack web developer", "web designer", "guitarist"],
	isAnimate: false,
	valueIndex: 0,
	charIndex: 0
})

const typeText = (): void => {
	const anim = animationSettings.value

	if (anim.charIndex < anim.values[anim.valueIndex].length) {
		if (!anim.isAnimate) anim.isAnimate = true

		anim.value += anim.values[anim.valueIndex].charAt(anim.charIndex)
		anim.charIndex++

		setTimeout(typeText, 150)
	} else {
		anim.isAnimate = false

		setTimeout(eraseText, 2150)
	}
}

const eraseText = (): void => {
	const anim = animationSettings.value

	if (anim.charIndex > 0) {
		if (!anim.isAnimate) anim.isAnimate = true

		anim.value = anim.values[anim.valueIndex].substring(0, anim.charIndex - 1)
		anim.charIndex--

		setTimeout(eraseText, 75)
	} else {
		anim.isAnimate = false
		anim.valueIndex++

		if (anim.valueIndex >= anim.values.length) anim.valueIndex = 0

		setTimeout(typeText, 1650)
	}
}

onMounted(() => {
	setTimeout(typeText, 2000)
})
</script>

<template>
	<section class="landing">
		<div class="content">
			<h2 class="name">👋 Hi! My name's <span>Qaddis</span>.</h2>
			<h3 class="activity">
				I am a <span class="typed-text">{{ animationSettings.value }}</span>
				<span class="cursor" :class="{ typing: animationSettings.isAnimate }">
					&nbsp;
				</span>
			</h3>
		</div>
	</section>
</template>

<style scoped lang="scss">
.landing {
	width: 100vw;
	height: 100vh;
	padding: 70px 25px 0;
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

.content {
	max-width: 1140px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.name {
	font-size: 3.4rem;
	font-weight: bold;

	span {
		color: var(--violet);
	}
}

.activity {
	font-size: 2.8rem;
	font-weight: 600;
	margin-left: 5.4rem;
}

.typed-text {
	color: var(--banana);
}

.cursor {
	display: inline-block;
	width: 5px;
	height: 100%;
	margin-left: 3px;
	background-color: #bdbdbd;
	border-radius: 100vmax;
	animation: blinking 1.35s ease-in-out infinite;
	transition: opacity 0.2s;

	&.typing {
		animation: none;
	}
}

@keyframes blinking {
	45% {
		opacity: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 0;
	}
}
</style>
