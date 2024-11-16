<template>
  <div class="flex w-full justify-between">
    <div v-for="card in cardInfo" :key="card.title">
      <CardItem
        :title="card.title"
        :value="card.amount"
        :backgroundColor="card.backgroundColor"
      >
        <template #icon>
          <component :is="card.icon" />
        </template>
      </CardItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from "../card/CardItem.vue";
import { cardInfo } from "../card/CardData";
</script>
