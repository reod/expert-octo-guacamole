<template>
  <div>
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
      return R.pipe(
        R.filter(R.complement(R.propEq('status', 'SCHEDULED'))),
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
