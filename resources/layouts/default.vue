<template>
  <v-app>
    <AppSidebar />
    <AppToolbar />
    <v-container fluid text-xs-center>
      <v-layout row wrap justify-center>
        <nuxt />
      </v-layout>
    </v-container>
    <AppFooter />
  </v-app>
</template>

<script>
import AppToolbar from '../components/layouts/AppToolbar'
import AppSidebar from '../components/layouts/AppSidebar'
import AppFooter from '../components/layouts/AppFooter'

export default {
    components: {
      AppToolbar,
      AppSidebar,
      AppFooter
    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>

<style>

</style>
