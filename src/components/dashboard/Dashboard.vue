<template>
  <div v-if="isLogged" class="root">
    <div class="tile is-ancestor">
      <div class="tile is-12 is-parent">
        <div class="tile is-child box notification is-primary">
          <p v-if="loggedId === id" class="title">Your dashboard</p>
          <p v-else class="title">{{ profile.meta.name }}'s dashboard</p>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent" :class="focusedGame.length > 0 ? 'is-6' : 'is-12'">
        <div class="tile is-child box notification is-primary">
          <Stats :games="profile.games" :user-id="id" />
        </div>
      </div>
      <div class="tile is-parent is-6" v-if="focusedGame.length > 0">
        <div class="tile is-child box notification is-primary">
          <span v-if="focusedGame.length === 1">
            <FocusedTable title="Current Game" expanders :focus="id" :game="focusedGame[0]" />
          </span>
          <span v-else>
            <b-tabs>
              <b-tab-item :label="game.name" v-for="game in focusedGame" :key="game.id" icon="list-ol">
                <FocusedTable expanders :focus="id" :game="game" />
              </b-tab-item>
            </b-tabs>
          </span>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-6 is-parent ">
        <div class="tile is-child box notification is-primary">
          <Matches title="Last Matches " :contests="profile.contests " @refresh="$emit('refresh')" completed :user-id="id" />
        </div>
      </div>
      <div class="tile is-6 is-parent ">
        <div class="tile is-child box notification is-primary">
          <Matches title="Upcoming " :contests="profile.contests" sort :user-id="id" @refresh="$emit('refresh')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as R from 'ramda';
import FocusedTable from '../games/FocusedTable';
import Matches from './Matches';
import Stats from './stats/Stats';

export default {
  name: 'Dashboard',
  components: { Matches, Stats, FocusedTable },
  props: ['id', 'profile'],
  computed: {
    ...mapGetters({ isLogged: 'isLogged', loggedId: 'id' }),
    focusedGame() {
      return R.pipe(
        R.filter(R.both(
          R.propEq('status', 'ONGOING'),
          R.has('table'),
        )),
        R.values,
        R.take(2),
      )(this.profile.games || []);
    },
  },
};
</script>

<style lang="scss">
.club-logo {
  width: 100px;
  height: 100px;
}
</style>
