<template>
  <div class="swim-lane">

 <span style="color: white; font-size: medium; margin-left: 6px; font-weight:bold;">{{ title }}</span>
  
    <div class="cards-container">
      <div class="cards" ref="cards">

        <div class="card" v-for="(card, index) in visibleCards" :key="index">
          <img :src="card.img" alt="" class="card-img">
          <p class="card-title">{{ card.title }}</p>
        </div>
      </div>
      <button @click="scrollRight" class="nav-button right" v-if="!isEnd">&gt;</button>
      <button @click="scrollLeft" class="nav-button left" v-if="isEnd">&lt;</button>
    </div>
  </div>
</template>

<script src="./SwimLane.js"></script>
<style src="./SwimLane.css"></style>
