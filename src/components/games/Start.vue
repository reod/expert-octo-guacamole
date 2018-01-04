<template>
  <div class="modal-card notification">
    <header class="modal-card-head">
      <p class="title is-centered">Starting a game</p>
      <p class="subtitle"> {{game.name}}, {{game.location}} </p>
    </header>
    <section class="modal-card-body  is-primary">
      <article>
        Starting a game is
        <span class="has-text-weight-bold">irrevertable</span> operataion!
      </article>
      <article>
        By starting a game you agree that all of the competitors are on place. After this operation, no one can join to the game.
      </article>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-danger" type="button" @click="$parent.close(false)">Cancel</button>
      <button class="button is-success is-pulled-right" @click="start">Proceed starting
      </button>
    </footer>
  </div>
</template> 

<script>
export default {
  name: 'modal-start',
  props: ['game'],
  methods: {
    start() {
      this.$api('POST', `games/${this.game.id}/schedule`)
        .then((game) => {
          this.$toast.open({ type: 'is-success', message: `Successfuly started a game ${game.name}` });
          this.$emit('started', game);
        })
        .catch((err) => {
          this.$toast.open({ type: 'is-danger', message: err.response.text });
        });
    },
    selected(club) {
      this.club = club;
    },
  },
};
</script>

<style lang="scss"  scoped>
@import "../../style/vars";
.modal-card-head {
  flex-direction: column;
}
.modal-card-body {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: $primary;
  color: $primary-invert;
  overflow-x: hidden;
  @media screen and (max-width: $tablet) {
    overflow: auto;
  }
}
</style>
