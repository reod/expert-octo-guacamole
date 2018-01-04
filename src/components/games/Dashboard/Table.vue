<template>
  <div>
    <b-table :data="game.table" striped :row-class="rowClass">
      <template slot-scope="props">
        <b-table-column label="P" width="1" numeric>
          <span v-if="(props.index + 1) === props.row.position">
            {{ props.row.position }}.
          </span>
        </b-table-column>
        <b-table-column label="Player">
          <div class="is-flex">
            <router-link :to="`/users/${props.row.id}`"> {{user(props.row.id).name}} -
              <span class="italic">{{club(props.row.id).name}}</span>
            </router-link>
          </div>
        </b-table-column>
        <b-table-column label=" PL " width=1 centered> {{props.row.played}}</b-table-column>
        <b-table-column label="W " class="is-hidden-mobile " width=1 centered numeric>{{props.row.wins}}</b-table-column>
        <b-table-column label="D " class="is-hidden-mobile " width=1 centered numeric>{{props.row.draws}}</b-table-column>
        <b-table-column label="L " class="is-hidden-mobile " width=1 centered numeric>{{props.row.loses}}</b-table-column>
        <b-table-column label="B " class="is-hidden-mobile " width=1 centered numeric>{{(props.row.balance > 0 ? '+'+props.row.balance : props.row.balance)}}</b-table-column>
        <b-table-column label="GS-GC " class="is-hidden-mobile " width=80 centered numeric>{{props.row.scored}}-{{props.row.lost}}</b-table-column>
        <b-table-column label="PTS " width=1 centered numeric>{{props.row.points}}</b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>
import * as R from 'ramda';
import { mapGetters } from 'vuex';
import ClubEmblem from '../../clubs/ClubEmblem';

export default {
  components: { ClubEmblem },
  props: ['game'],
  name: 'game-table',
  computed: {
    ...mapGetters(['id', 'isAdmin']),
  },
  methods: {
    rowClass(row, index) {
      return R.cond([
        [R.pathEq(['row', 'id'], this.id), R.always('me')],
        [R.propEq('parity', 0), R.always('even')],
        [R.T, R.always('odd')],
      ])({ row, parity: index % 2 });
    },
    promoted(uid) {
      return R.filter(R.pipe(R.prop('promoted'), R.contains(uid)), this.game.continueIn || []);
    },
    club(uid) {
      return this.game.competitors[uid].club;
    },
    user(uid) {
      return this.game.competitors[uid].user;
    },
  },
};
</script>
<style lang="scss">
@import "../../../style/vars.scss";

.odd {
  background-color: $odd !important;
}

.even {
  background-color: $even !important;
}
.me {
  background-color: $primary-2 !important;
}
.promoted {
  margin-left: 1rem;
}
.italic {
  font-style: italic;
  font-weight: 100;
}
</style>
