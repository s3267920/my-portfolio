<script setup lang="ts">
import SkillItem from '@/components/skills/SkillItem.vue'
export interface SkillInfoProps {
  title: string
  icon?: string
  detail?: SkillInfoProps[]
}
const data: { [key: string]: SkillInfoProps } =
{
  frontEnd: {
    title: 'Front-End',
    detail: [
      {
        title: 'React.js',
        icon: '',
        detail: [
          { title: 'React Hook' }
        ]
      },
      {
        title: 'Vue.js',
        icon: '',
        detail: [
          { title: 'Vue2' }
        ]
      },
      {
        title: 'JavaScript',
        icon: '',
        detail: [
          { title: 'ES6' }
        ]
      },
      {
        title: 'TypeScript',
      }
    ]
  },
  backEnd: {
    title: 'Back-End',
    detail: [
      { title: 'RESTful API' },
      {
        title: 'ASP.NET',
      },
      {
        title: '.NET FRAMEWORK',
        detail: [
          { title: 'MVC' },
          { title: 'Web API' },
        ]
      },
      {
        title: 'Database',
        detail: [
          { title: 'MS SQL' },
        ]
      }
    ]
  },
  webLayout: {
    title: 'Web Layout',
    detail: [
      {
        title: 'HTML',
      },
      {
        title: 'CSS',
        detail: [
          { title: 'SCSS' },
        ]
      }, {
        title: 'Responsive Web Design(RWD)'
      }
    ]
  },
  other: {
    title: 'Other',
    detail: [
      { title: 'Git' },
      {
        title: 'CI/CD',
        detail: [
          { title: 'Jenkins' }
        ]
      },
      {
        title: 'AWS',
        detail: [
          { title: 'EC2' },
          { title: 'S3' },
          { title: 'CloudFront' },
        ]
      }
    ]
  }
}
defineProps<{
  isSection?: boolean,
}>()
</script>
<template>
  <section class='skill p-2 m-5 shadow-md bg-white grid grid-cols-2 gap-4 relative' :class="{ full: !isSection }">
    <SkillItem class="frontEnd" :data="data.frontEnd" />
    <SkillItem class="backEnd" :data="data.backEnd" />
    <SkillItem class="webLayout" :data="data.webLayout" />
    <SkillItem class="other" :data="data.other" />

  </section>
</template>

<style lang='scss'>
@media (min-width: 1024px) {
  .skill {
    grid-template-areas:
      'front-end back-end'
      'webLayout other';

    .frontEnd {
      grid-area: front-end;
    }

    .backEnd {
      grid-area: back-end;
    }

    .webLayout {
      grid-area: webLayout;
    }

    .other {
      grid-area: other;
    }
  }

}
</style>