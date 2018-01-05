<template>
  <div class="root" v-if="game">
    <Navigation :game="game" @action="handle" :from="from" v-bind:style="{ backgroundColor: game.color  }" />
    <div v-if="game.continueIn" class="notification">
      <p>This games has been completed! Following games has been created as continuation of this one:</p>
      <div v-for="following in game.continueIn" :key="following.id">
        {{following.name}}
      </div>
    </div>
    <Tabs :game="game" @action="handle" @updated="(d) => handle('updated',d)" />
    <b-modal :active.sync="modal" has-modal-card :canCancel="true" @close="$router.push(`/games/${game.id}`)">
      <Join v-if="modalType==='join'" :fullGame="game" @joined="(d) => handle('joined', d)" :id="id" />
      <Start v-else-if="modalType==='start'" :game="game" @started="(d) => handle('started', d)" />
      <Complete v-else-if="modalType==='complete'" :game="game" @completed="(d) => handle('completed', d)" />
    </b-modal>
  </div>
</template>
<script>
import * as R from 'ramda';
import { mapGetters } from 'vuex';
import Navigation from './Navigation';
import Join from '../Join';
import Start from '../Start';
import Complete from '../Complete';
import Tabs from './Tabs';

export default {
  components: {
    Navigation, Join, Tabs, Start, Complete,
  },
  props: ['gameId'],
  name: 'game-dashboard',
  data() {
    return {
      game: null,
      from: null,
      modal: false,
      modalType: false,
      autoUpdated: 0,
    };
  },
  computed: {
    ...mapGetters(['id', 'isAdmin', 'event']),
  },
  methods: {
    handle(action, data) {
      if (data) {
        this.game = data;
        this.autoUpdated = Date.now();
      }
      switch (action) {
        case 'leave':
          return this.$api('DELETE', `/games/${this.game.id}/competitors`, { uid: this.id })
            .then((game) => { this.game = game; });
        case 'join':
          this.$router.push(`/games/${this.game.id}?join`);
        case 'start': // eslint-disable-line
        case 'complete':
          this.modal = true;
          this.modalType = action;
          return true;
        case 'joined':
          this.$router.push(`/games/${this.game.id}`);
        case 'updated':  // eslint-disable-line
        case 'completed':
        case 'started':
          this.modal = false;
          return true;
        default:
          console.log('action', action);
          return true;
      }
    },
    load(gameId) {
      this.$api('GET', `/games/${gameId || this.gameId}`).then((game) => { this.game = game; });
    },
  },
  mounted() {
    this.load();
  },
  watch: {
    event({ type, relate }) {
      if (type === 'games' && relate === this.game.id && (Date.now() - this.autoUpdated) > 1000) {
        this.load();
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (!R.pathEq(['game', 'id'], to.params.gameId, this)) {
      Object.assign(this.$data, this.$options.data());
      this.load(to.params.gameId);
    }
    next();
  },
  beforeRouteEnter(to, from, next) {
    const callback = R.cond([
      [R.both(R.has('join'), () => to.fullPath.indexOf('?join') !== -1), R.always((vm) => { vm.modalType = 'join'; vm.modal = true; })],
      [R.T, R.T],
    ])(to.query);
    next(callback);
  },
};
</script>
<style lang="scss" scoped>
.level {
  &-right > .tag,
  &-right > .tags,
  &-left > .tag,
  &-left > .tags,
  &-right > .button,
  &-left > .button {
    margin-left: 0.125rem;
    margin-right: 0.125rem;
  }
}
.card {
  background: transparent;
}
</style>
