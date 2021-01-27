<template v-slot:start>
  <base-layout page-title="Activités">
    <activities-list :activities="activities"></activities-list>
  </base-layout>
</template>

<script>
import ActivitiesList from "../components/activities/ActivitiesList.vue";

export default {
  components: {
    ActivitiesList,
  },
  computed: {
    activities() {
      return this.$store.getters.activities;
    },
  },
};
</script>

<style>
</style>