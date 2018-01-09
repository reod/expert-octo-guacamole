<template>
  <div>
    <div class="level">
      <b-field class="has-text-centered level-item">
        <b-checkbox-button v-model="checkboxGroup" native-value="SCHEDULED" type="is-primary-2">
          <b-icon icon="calendar-o" />
          <span>Scheduled</span>
        </b-checkbox-button>
        <b-checkbox-button v-model="checkboxGroup" native-value="PLAYED" type="is-success">
          <b-icon icon="futbol-o" />
          <span>Played</span>
        </b-checkbox-button>
        <b-checkbox-button v-model="checkboxGroup" native-value="WALKOVER" type="is-danger">
          <b-icon icon="fire" />
          <span>Walkover</span>
        </b-checkbox-button>
      </b-field>
      <div class="level-item" v-if="isCompetitor">
        <b-checkbox v-model="onlyMy">
          <b-icon icon="user" />
          <span>Only My Matches</span>
        </b-checkbox>
      </div>
    </div>
    <Matches no-filter :contests="filteredSchedule" searchable :size="filteredSchedule.length" @needFocus="$emit('needFocus')" @updateGame="(game) => $emit('updated', game)" />
  </div>
</template>
<script>
import * as R from 'ramda';
import { mapGetters } from 'vuex';
import Matches from '../../dashboard/Matches';

export default {
  name: 'GameSchedule',
  components: { Matches },
  props: { game: { type: Object, required: true } },
  data() {
    return { checkboxGroup: ['SCHEDULED'], onlyMy: false };
  },
  computed: {
    ...mapGetters(['id', 'isAdmin']),
    isCompetitor() {
      return R.contains(this.id, R.keys(this.game.competitors));
    },
    filteredSchedule() {
      const isContainedInGroup = R.flip(R.contains)(this.checkboxGroup);
      const isMyMatch = ({ home, visitor }) => !this.onlyMy || R.contains(this.id, [home, visitor]);
      return R.pipe(
        R.filter(R.pipe(R.prop('status'), isContainedInGroup)),
        R.filter(isMyMatch),
        R.values,
        R.map(contest => ({
          ...contest,
          gid: this.game,
          home: { club: this.club(contest.home), user: this.user(contest.home) },
          visitor: { club: this.club(contest.visitor), user: this.user(contest.visitor) },
        })),
      )(this.game.schedule);
    },
  },
  created() {
    this.onlyMy = !this.isAdmin;
  },
  methods: {
    club(uid) {
      return this.game.competitors[uid].club;
    },
    user(uid) {
      return this.game.competitors[uid].user;
    },
  },
};
</script>
<style lang="scss" scoped>
.level-item {
  justify-content: center;
}
.results {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-family: "Montserrat";
  letter-spacing: -1px;
  position: relative;
  .edit {
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
  }
}
</style>
