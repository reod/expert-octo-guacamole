<template>
  <div v-if="game" class="notification">
    <p class="title">{{game.name}}</p>
    <p class="subtitle has-text-centered is-size-6">{{game.location}}</p>
    <p>{{game.description}}</p>
    <p>&nbsp;</p>
    <div class="level">
      <div class="level-item">
        <a class="button is-dark" @click="$router.push('/games')">
          <b-icon icon="angle-left"></b-icon>
          <span>Games</span>
        </a>
        <a class="button is-success" @click="$emit('action','start')" v-if="isAdmin && isOpen && game.competitorsSize >= 2">
          <b-icon icon="play"></b-icon>
          <span>Start</span>
        </a>
        <a class="button is-warning" @click="$emit('action','join')" v-if="!isMember && isOpen">
          <b-icon icon="sign-in"></b-icon>
          <span>Join</span>
        </a>
        <a class="button is-danger" @click="$emit('action','leave')" v-if="isMember && isOpen">
          <b-icon icon="sign-out"></b-icon>
          <span>Leave</span>
        </a>
        <a class="button is-primary" @click="$emit('action','complete')" v-if="isAdmin && isOngoing">
          <b-icon icon="check"></b-icon>
          <span>Complete</span>
        </a>
      </div>
      <div class="level-item is-mobile-flex">
        <b-tag type="is-danger" v-if="isMember">Member Of</b-tag>
        <b-tag type="is-info" class="is-hidden-mobile">{{game.status}}</b-tag>
        <b-tag type="is-primary">{{game.competitorsSize}} players</b-tag>
        <b-taglist attached v-if="progress.total > 0">
          <b-tag type="is-dark">Progress</b-tag>
          <b-tag type="is-info">{{progress.played}}/{{progress.total}} ({{progress.percent}}%)</b-tag>
        </b-taglist>
      </div>
    </div>
  </div>
</template>
<script>
import * as R from 'ramda';
import { mapGetters } from 'vuex';

export default {
  props: ['game'],
  name: 'game-dashboard-navigation',
  data() {
    return {
      from: null,
    };
  },
  computed: {
    ...mapGetters(['id', 'isAdmin']),
    isMember() {
      return R.findIndex(R.propEq('id', this.id), this.game.players) !== -1;
    },
    isOpen() {
      return this.game.status === 'OPEN';
    },
    isOngoing() {
      return this.game.status === 'ONGOING';
    },
    progress() {
      const matches = R.values(this.game.schedule);
      const total = matches.length;
      const played = R.filter(R.complement(R.propEq('status', 'SCHEDULED')), matches).length;
      return { total, played, percent: Math.round(100 * (played / total)) };
    },
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.level {
  &-item > .tag,
  &-item > .tags,
  &-item > .button {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
}
</style>
