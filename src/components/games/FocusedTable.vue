<template>
  <div v-if="table && table.length > 0" class="in-table">
    <span v-if="title">
      <p class="title">{{title}}</p>
      <p class="subtitle has-text-centered is-size-6">
        <router-link :to="`/games/${game.id}`">{{game.name}}</router-link>
      </p>
    </span>
    <table class="table is-fullwidth is-stripped">
      <thead>
        <th class="is-narrow">Pos.</th>
        <th>Player</th>
        <th class="is-narrow">PL</th>
        <th class="is-narrow">PTS</th>
      </thead>
      <tbody>
        <tr v-for="({id, position, points, played, aClass=''},index) in focusedTable" :key="id" :class="aClass">
          <td>{{position === 'no-position' || (focusedTable[index-1] || {}).position === position ? '' : position+'.'}}</td>
          <td class="player">
            <router-link v-if="aClass !== 'empty-row'" :to="`/users/${id}`">
              {{player(id)}}
            </router-link>
            <span v-else>{{player(id)}}</span>
          </td>
          <td class="has-text-centered">{{played}}</td>
          <td class="has-text-centered">{{points}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 

<script>
import * as R from 'ramda';

export default {
  name: 'games-list',
  props: {
    game: { type: Object, default: R.always({}) },
    focus: { type: String, default: null },
    title: { type: String, default: '' },
    count: { type: Number, default: 3 },
    expanders: { type: Boolean, default: false },
  },
  computed: {
    indexedPlayers() {
      return R.indexBy(R.prop('id'), this.players);
    },
    table() {
      return this.game.table;
    },
    players() {
      return this.game.players;
    },
    focusedTable() {
      const players = R.pluck('id', this.players);
      const { length } = this.table;
      const focusingIndex = R.cond([
        [R.equals('top'), R.always(0)],
        [R.flip(R.contains)(players), id => R.findIndex(R.propEq('id', id), this.table)],
        [R.T, R.always(0)],
      ])(this.focus);
      const halfWindow = Math.round((this.count - 1) / 2);
      const focused = R.pipe(
        R.cond([
          [R.equals(0), R.always([0, this.count])],
          [R.equals(length), R.always([length - this.count, length])],
          [R.T, p => [p - halfWindow, p + 1 + halfWindow]],
        ]),
        ([from, to]) => ([Math.max(from, 0), Math.min(to, length)]),
        ([from, to]) => R.pipe(
          R.slice(from, to),
          R.ifElse(
            R.always(to === length || !this.expanders),
            R.identity,
            (n) => {
              if ((length - to) === 1) {
                return n.concat(R.last(this.table)); // if only one left attach him, instead of naive empty-row
              }
              return n.concat({ aClass: 'empty-row', position: 'no-position', id: `${length - to} players more` });
            },
          ),
          R.map((e) => {
            if (e.id === this.focus) {
              return { ...e, aClass: 'focused' };
            }
            return e;
          }),
        ),
      )(focusingIndex);
      return focused(this.table);
    },
  },
  methods: {
    player(id) {
      const { meta = {}, name } = this.indexedPlayers[id] || {};
      return name || meta.name || meta.login || id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/vars.scss";
.focused {
  background: $primary-2 !important;
  color: $primary-2-invert;
}
</style>
