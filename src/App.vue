<template>
  <div id="app">
    <SwimLane v-for="(lane, index) in lanes" :key="index" :title="lane.title" :cards="lane.cards" />
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>

