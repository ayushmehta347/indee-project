import SwimLane from './components/SwimLane.vue';
import imageData from './assets/data.json'; // Import JSON data
export default {
  name: 'App',
  components: {
    SwimLane
  },
  data() {
    return {
      lanes: [
        { title: 'Most-Watch films', cards: generateCards(1, 12) },
      ]
    };
  }
};



function generateCards(start, end) {
  const cards = [];
  for (let i = start; i <= end; i++) {
    cards.push({ img: require(`./assets/images/image${i}.png`), title: imageData[i - 1].title });
  }
  return cards;
}
