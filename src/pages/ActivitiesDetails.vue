<template>
  <base-layout
    :page-title="loadedActivity ? loadedActivity.title : 'Loading...'"
    page-default-back-link="/activities/"
  >
    <h2 v-if="!loadedActivity">Couldn't find an activity for the given id !</h2>
    <activity-overview
      v-else
      :title="loadedActivity.title"
      :image="loadedActivity.image"
      :description="loadedActivity.description"
    ></activity-overview>
  </base-layout>
</template>

<script>
import ActivityOverview from "../components/activities/ActivityOverview.vue";

export default {
  components: {
    ActivityOverview,
  },
  data() {
    return {
      activityId: this.$route.params.id,
    };
  },
  computed: {
    loadedActivity() {
      return this.$store.getters.activity(this.activityId);
    },
  },
};
</script>

<style>
</style>