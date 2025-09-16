<script>
export default {
	props: {
		select: {
			type: String,
			default: 'projects',
			required: true,
		},
		selectOptions: {
			type: Array,
			default: () => [
				'Web Application',
				'Mobile Application',
				'UI/UX Design',
				'Branding & Anim',
			],
		},
	},
};
</script>

<template>
	<select
		@change="$emit('filter', $event.target.value)"
		:name="select"
		:id="select"
		class="input-black text-base"
	>
		<option value class="text-base">All Projects</option>
		<option
			v-for="option in selectOptions"
			:key="option"
			:value="option"
			class="text-base"
		>
			{{ option }}
		</option>
	</select>
</template>

<style lang="scss" scoped></style>
