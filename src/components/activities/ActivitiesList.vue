<template>
  <ion-list>
    <activity-list-item
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
    >
    </activity-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import ActivityListItem from "./ActivityListItem.vue";

export default {
  props: ["activities"],
  components: {
    ActivityListItem,
    IonList,
  },
};
</script>

<style>
</style>