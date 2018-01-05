<template>
  <div class="root">
    <div class="columns is-multiline">
      <div class="column is-6" v-for="game in games" :key="game.id">
        <div class="notification" @click="$router.push(`/games/${game.id}`)" v-bind:style="{ backgroundColor: game.color  }">
          <router-link :to="`/games/${game.id}`">
            <p class="title">{{game.name}}</p>
          </router-link>
          <p class="subtitle has-text-centered is-size-6">{{game.location}}</p>
          <p>{{game.description}}</p>
          <FocusedTable :game="game" />
          <div class="floating-tag">
            <b-tag type="is-primary">{{game.status}}</b-tag>
            <span @click.stop="$router.push(`/games/join?game=${game.id}`)" class="is-clickable" v-if="game.status === 'OPEN' && !isMember(game)">
              <b-tag type="is-warning">Able to JOIN</b-tag>
            </span>
            <span @click.stop="leave(game)" class="is-clickable" v-if="isMember(game)">
              <b-tag type="is-danger">Member of</b-tag>
            </span>
            <b-tag type="is-info">{{game.players.length}} players</b-tag>
            <b-tag type="is-gold" v-if="game.ranked">ranked</b-tag>
            <b-tag type="is-gray" v-if="isAdmin && game.archived">archived</b-tag>
          </div>
        </div>
      </div>
      <b-modal :active.sync="isJoinActive " :canCancel="false" has-modal-card @close="restore">
        <div class="card">
          <Join :gameId="gameId" @joined="whenJoined" :id="id" />
        </div>
      </b-modal>
    </div>
  </div>
</template> 

<script>
import { mapGetters } from 'vuex';
import * as R from 'ramda';

import FocusedTable from './FocusedTable';
import Join from './Join';

export default {
  name: 'games-list',
  data() {
    return { games: [], isJoinActive: false };
  },
  components: { FocusedTable, Join },
  computed: {
    ...mapGetters(['id', 'isAdmin', 'event']),
    gameId() {
      return this.$route.query.game;
    },
  },
  methods: {
    setModalVisible(visible) { this.isJoinActive = visible; },
    isMember(game) {
      return R.findIndex(R.propEq('id', this.id), game.players) !== -1;
    },
    replace(game) {
      const updatedGameIndex = R.findIndex(R.propEq('id', game.id), R.values(this.games));
      if (updatedGameIndex !== -1) {
        this.games = R.assoc(updatedGameIndex, game, this.games);
      } else {
        this.load();
      }
    },
    leave(game) {
      this.$api('DELETE', `/games/${game.id}/competitors`, { uid: this.id }).then(this.replace);
    },
    whenJoined(game) {
      this.restore();
      this.replace(game);
    },
    restore() {
      this.$router.push('/games');
    },
    load() {
      this.$api('GET', '/games')
        .then(R.filter(g => this.isAdmin || !g.archived))
        .then((games) => { this.games = games; });
    },
  },
  created() {
    this.load();
  },
  watch: {
    event({ type }) {
      if (type === 'games') {
        this.load();
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    const callback = R.cond([
      [R.both(R.has('game'), () => to.fullPath.indexOf('join?game=') !== -1), R.always((vm) => { vm.setModalVisible(true); })],
      [R.T, R.always((vm) => { vm.setModalVisible(false); })],
    ])(to.query);
    next(callback);
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";

.column {
  position: relative;
  .floating-tag {
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
  }
}
.notification {
  max-height: 100%;
  min-height: 15rem;
  box-shadow: 0px 0px 20px transparentize($primary, 0.3);
  transition: background 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(66, 66, 66, 0.3) !important;
  }
}
.card {
  background: transparent;
}
</style>
