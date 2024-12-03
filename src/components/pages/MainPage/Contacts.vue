<script setup lang="ts"></script>

<template>
	<section class="socials">
		<ul class="socials-list">
			<li class="socials-list__li">
				<a href="#" class="socials-link" target="_blank">
					<svg>
						<use xlink:href="#linkedin-icon"></use>
					</svg>
				</a>
			</li>
			<li class="socials-list__li">
				<a
					href="https://github.com/qaddis"
					class="socials-link"
					target="_blank"
				>
					<svg>
						<use xlink:href="#github-icon"></use>
					</svg>
				</a>
			</li>
			<li class="socials-list__li">
				<a href="https://t.me/qaddis" class="socials-link" target="_blank">
					<svg>
						<use xlink:href="#telegram-icon"></use>
					</svg>
				</a>
			</li>
			<li class="socials-list__li">
				<a href="https://vk.com/qaddis" class="socials-link" target="_blank">
					<svg>
						<use xlink:href="#vk-icon"></use>
					</svg>
				</a>
			</li>
		</ul>
	</section>
</template>

<style scoped lang="scss">
.socials {
	width: 100%;
	height: auto;
	padding: 20px 25px;
	background-color: var(--add);
	box-shadow: 0 0 35px rgba($color: #000, $alpha: 0.3) inset;
}

.socials-list {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 50px;

	&__li {
		svg {
			display: block;
			width: 100px;
			height: 100px;
			fill: var(--light);
			transition-property: fill, opacity, translate;
			transition-duration: 0.25s, 0.15s, 0.15s;
			transition-timing-function: ease-in-out;

			&:hover {
				fill: var(--banana);
			}

			&:active {
				translate: 0 3px;
				opacity: 0.6;
			}
		}
	}
}

.socials-link {
	display: contents;
}
</style>
