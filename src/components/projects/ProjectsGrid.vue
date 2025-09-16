<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
	components: { ProjectSingle, ProjectsFilter },
	data: () => {
		return {
			projects,
			projectsHeading: 'Projects Portfolio',
			selectedCategory: '',
			searchProject: '',
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-16 sm:pt-20">
		<!-- Projects grid title -->
		<div class="text-center mb-16">
			<p
				class="heading-display mb-6 gradient-text"
			>
				{{ projectsHeading }}
			</p>
			<div class="w-32 h-1.5 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full shadow-glow"></div>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-16 sm:mt-20">
			<h3
				class="body-large text-center text-black-body mb-10"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="flex justify-between items-center border-b-2 border-gray-400 dark:border-gray-500 pb-6 gap-6"
			>
				<div class="flex justify-between gap-6 flex-1">
					<span
						class="hidden sm:block glass p-4 shadow-soft rounded-2xl cursor-pointer hover:shadow-glow transition-all duration-300 border-visible"
					>
						<i
							data-feather="search"
							class="text-black-body w-6 h-6"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="input-black flex-1 text-base"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:gap-8 lg:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
				class="animate-scale-in"
			/>
		</div>
	</section>
</template>

<style scoped></style>
