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
      return this.cards.slice(this.startIndex, this.startIndex + 6);
    },
    leftNavCard() {
      return this.startIndex > 0 ? this.cards[this.startIndex - 1] : null;
    },
    rightNavCard() {
      return (this.startIndex + 6 < this.cards.length) ? this.cards[this.startIndex + 6] : null;
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
    },
    handleKeyDown(event) {
      const cardElements = Array.from(this.$refs.cards.children);
      switch (event.key) {
        case 'ArrowRight':
          if (document.activeElement === this.$refs.leftNavButton || document.activeElement === this.$refs.rightNavButton) {
            cardElements[0].focus();
          } else {
            const currentIndex = cardElements.indexOf(document.activeElement);
            if (currentIndex !== -1) {
              if (currentIndex + 1 < cardElements.length) {
                cardElements[currentIndex + 1].focus();
              } else if (!this.isEnd) {
                this.$refs.rightNavButton.focus();
              }
            }
          }
          break;
        case 'ArrowLeft':
          if (document.activeElement === this.$refs.rightNavButton || document.activeElement === this.$refs.leftNavButton) {
            cardElements[cardElements.length - 1].focus();
          } else {
            const currentIndex = cardElements.indexOf(document.activeElement);
            if (currentIndex !== -1) {
              if (currentIndex > 0) {
                cardElements[currentIndex - 1].focus();
              } else if (this.startIndex > 0) {
                this.$refs.leftNavButton.focus();
              }
            }
          }
          break;
        case 'ArrowDown':
          if (document.activeElement.classList.contains('card-img')) {
            document.activeElement.nextElementSibling.firstElementChild.focus();
          }
          break;
        case 'ArrowUp':
          if (document.activeElement.classList.contains('card-title')) {
            document.activeElement.parentElement.previousElementSibling.focus();
          }
          break;
      }
    },
    handleCardFocus(index) {
      this.$refs.cards.children[index].classList.add('focused');
    },
    handleCardBlur(index) {
      this.$refs.cards.children[index].classList.remove('focused');
    }
  }
};
