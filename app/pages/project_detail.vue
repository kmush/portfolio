<script setup lang="ts">
const route = useRoute()
const id = route.params.id
console.log('Project ID:', id)
const { data: project_details } = await useAsyncData('project_detail', () => {
  return queryCollection('project_detail').path(route.path).first()
})

const { data: page } = await useAsyncData('project_detail', () => {
  return queryCollection('project_detail').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    >
    </UPageHero>
    <UPageSection>
      <div v-if="project_details">
        <h3>{{ project_details.title }}</h3>
        <p>{{ project_details.description }}</p>
      </div>
    </UPageSection>
  </UPage>
</template>
