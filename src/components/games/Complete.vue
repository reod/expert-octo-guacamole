<template>
  <div class="modal-card notification">
    <header class="modal-card-head">
      <p class="title is-centered">Completing a game</p>
      <p class="subtitle"> {{game.name}}, {{game.location}} </p>
    </header>
    <section class="modal-card-body  is-primary">
      <article>
        <p>Completing a game is
          <span class="has-text-weight-bold">irrevertable</span> operation! Create as many games as you want. </p>
        <p>In each games may appears the players from previous</p>
      </article>
      <p>&nbsp;</p>
      <div>
        <CompleteRow :game="game" @data="d=>handle(index,d)" :isFirst="index===0" :isLast="index===newGames.length-1" :data=data v-for="(data, index) in newGames" :key="index" @remove="remove(index)" @add="add" />
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-danger" type="button" @click="$parent.close(false)">Cancel</button>
      <button class="button is-success is-pulled-right " @click="start ">Proceed complete</button>
    </footer>
  </div>
</template> 

<script>
import CompleteRow from './CompleteRow';

export default {
  name: 'ModalComplete',
  components: { CompleteRow },
  props: { game: { type: Object, default: () => {} } },
  data() {
    return {
      newGames: [
        { from: 1, to: this.game.competitorsSize, name: this.game.name },
      ],
    };
  },
  methods: {
    start() {
      this.$api('POST', `games/${this.game.id}/complete`, {
        split: 'position',
        continueIn: this.newGames,
      })
        .then((game) => {
          this.$toast.open({ type: 'is-success', message: `Successfuly completed a game ${game.name}` });
          this.$emit('updated', game);
          this.$emit('completed', game);
        })
        .catch((err) => {
          this.$toast.open({ type: 'is-danger', message: err.response.text });
        });
    },
    selected(club) {
      this.club = club;
    },
    handle(index, data) {
      this.newGames[index] = data;
    },
    remove() {
      this.newGames = this.newGames.slice(0, this.newGames.length - 1);
    },
    add() {
      this.newGames.push({ from: 1, to: this.game.competitorsSize, name: this.game.name });
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
