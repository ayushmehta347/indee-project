<template>
  <div class="swim-lane" tabindex="0" @keydown="handleKeyDown">
    <span style="margin-left: 25px" tabindex="0"  class="swim-lane-title">{{ title }}</span>
    <div class="cards-container">
      <button 
        ref="leftNavButton"
        @click="scrollLeft" 
        class="nav-button left" 
        v-if="startIndex > 0" 
        aria-label="Scroll Left"
      >
        <div class="nav-card-content" v-if="leftNavCard">
          <img :src="leftNavCard.img" alt="" class="nav-card-img">
          <div class="nav-card-title">
            <span v-if="leftNavCard.status === 'New'" class="new-label">New</span>
            {{ leftNavCard.title }}
          </div>
        </div>
        <span class="nav-icon">&lt;</span>
      </button>

      <div class="cards" ref="cards">
        <div
          class="card"
          v-for="(card, index) in visibleCards"
          :key="index"
          :tabindex="0"
          @focus="handleCardFocus(index)"
          @blur="handleCardBlur(index)"
        >
          <img :src="card.img" alt="" class="card-img">
          <div class="card-title">
            <div class="title">
              <span v-if="card.status === 'New'" class="new-label">New</span>
             <div class="content"> {{ card.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        ref="rightNavButton"
        @click="scrollRight" 
        class="nav-button right" 
        v-if="!isEnd" 
        aria-label="Scroll Right"
      >
        <div class="nav-card-content" v-if="rightNavCard">
          <img :src="rightNavCard.img" alt="" class="nav-card-img">
          <div class="nav-card-title">
            <span v-if="rightNavCard.status === 'New'" class="new-label">New</span>
            {{ rightNavCard.title }}
          </div>
        </div>
        <span class="nav-icon">&gt;</span>
      </button>
    </div>
  </div>
</template>

<script src="./SwimLane.js"></script>

<style scoped src="./SwimLane.css"></style>