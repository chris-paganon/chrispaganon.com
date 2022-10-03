<template>
  <main>
    <section class="hero-banner" :style="{backgroundColor: `#${projectContent.color}`}">
      <h1>{{ projectContent.Title }}</h1>
    </section>
    <article>
      <ul>
        <li>{{ $t('ProjectPage.date-from') }} {{ projectContent.startDate }}</li>
        <li>{{ $t('ProjectPage.date-to') }} {{ projectContent.endDate }}</li>
        <li><a :href="projectContent.url" target="_blank">{{ $t('ProjectPage.visit') }}</a></li>
      </ul>
      <nuxt-content :document="projectContent"></nuxt-content>
      <img :src="projectContent.image" />
    </article>
  </main>
</template>

<script>
export default {
  name: 'ProjectPage',
  async asyncData (context) {
    const { $content, app } = context;
    const defaultLocale = app.i18n.defaultLocale;
    const currentLocale = app.i18n.locale;
    let path = '';

    if (currentLocale === defaultLocale) {
      path = `${currentLocale}/${context.route.path}`;
    } else {
      path = context.route.path;
    }
    const projectContent = await $content(path).fetch();
    return {
      projectContent,
    }
  },
};
</script>

<style scoped>
article {
  max-width: 1024px;
  margin: 40px auto;
  padding: 0px 20px;
}
a,
li {
  font-size: 25px;
}
p {
  margin: 20px 0;
}

.hero-banner {
  min-height: 300px;
}

ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
  text-align: center;
}
li {
  padding: 0 15px;
  margin-bottom: 15px;
}

img {
  max-width: 800px;
  display: block;
  margin: 60px auto;
  width: 600px;
  max-width: 100%;
}

@media (max-width: 600px) {
  a,
  li {
    font-size: 22px;
  }
}
</style>
