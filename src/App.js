import SwimLane from './components/SwimLane.vue';
import imageData from './assets/data.json'; 
import './App.css';
export default {
  name: 'App',
  components: {
    SwimLane
  },
  data() {
    return {
      lanes: [
        { title: 'Most-Watched films', cards: generateCards(1, 12) },
      ]
    };
  }
};



function generateCards(start, end) {
  const cards = [];
  for (let i = start; i <= end; i++) {
    const {img}={img: require(`./assets/images/image${i}.png`)};
    const {  title, status } = imageData[i - 1];
    if (status === "false") {
      cards.push({ img, title });
    } else {
      cards.push({ img, title, status: "New" });
    }
  }
  return cards;
}
