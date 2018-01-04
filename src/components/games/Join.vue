<template>
  <div class="modal-card notification">
    <header class="modal-card-head">
      <p class="title is-centered">{{title}}</p>
      <p class="subtitle"> {{game.name}}, {{game.location}} </p>
    </header>
    <section class="modal-card-body is-primary">
      <Search :predata="change ? [change] : null" :preselect="change ? change.id : null" :has-deep-search="false" @selected="selected" simple :limit="21" />
    </section>
    <footer class="modal-card-foot">
      <button class="button is-danger" type="button" @click="$parent.close(false)">Cancel</button>
      <button class="button is-warning is-pulled-right" @click="join" v-if="club && (!change || club.id !== change.id)">
        {{ action }} {{ club.name }}
      </button>
    </footer>
  </div>
</template> 

<script>
import * as R from 'ramda';
import Search from '@/components/clubs/Search';

export default {
  components: { Search },
  name: 'modal-join',
  props: {
    gameId: String,
    fullGame: Object,
    id: String,
    change: { type: Object, default: () => null },
  },
  data() {
    return { game: {}, club: this.change };
  },
  computed: {
    title() {
      return this.change ? 'Change team' : 'Join to game';
    },
    action() {
      return this.change ? 'Change to' : 'Join as';
    },
  },
  created() {
    if (this.fullGame) {
      this.game = this.fullGame;
    } else {
      this.$api('GET', `/games/${this.gameId}`)
        .then((game) => { this.game = game; });
    }
  },
  methods: {
    join() {
      this.$api('POST', `games/${this.game.id}/competitors`, { uid: this.id, club: this.club.id })
        .then((game) => {
          this.$toast.open({ type: 'is-success', message: `Successfuly joined to ${game.name} as ${this.club.name}` });
          this.$emit('joined', game);
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
