export default {
  name: 'SwimLane',
  props: {
    title: String,
    cards: Array
  },
  data() {
    return {
      startIndex: 0,
      isEnd: false
    };
  },
  computed: {
    visibleCards() {
      return this.cards.slice(this.startIndex, this.startIndex + 7);
    }
  },
  methods: {
    scrollLeft() {
      this.startIndex = Math.max(this.startIndex - 6, 0);
      this.isEnd = false;
    },
    scrollRight() {
      if (this.startIndex + 6 < this.cards.length) {
        this.startIndex = Math.min(this.startIndex + 6, this.cards.length - 6);
        if (this.startIndex + 6 >= this.cards.length) {
          this.isEnd = true;
        }
      }
    }
  }
};