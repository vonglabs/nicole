<template>
  <ion-item :router-link="`/activities/${activity.id}`">
    <ion-thumbnail>
      <ion-img :src="activity.image" :alt="activity.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ activity.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

export default {
  props: ["activity"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
};
</script>

<style>
</style>