<template>
  <div class="timeline-item">
    <div class="timeline-marker is-icon has-text-centered" :class="color">
      <i class="fa" :class="icon" />
    </div>
    <div class="timeline-content">
      <p class="heading">
        <b-tooltip :label="match.played || match.updated">{{ date }}</b-tooltip>
      | {{ match.result.home }} : {{ match.result.visitor }} </p>
      <p class="title is-size-7">{{ club.name }} </p>
      <p class="subtitle is-size-7">{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as R from 'ramda';
import timeago from 'timeago.js';

const time = timeago();

export default {
  name: 'Timeline',
  props: {
    game: { type: Object, default: () => ({}) },
    match: { type: Object, default: () => ({}) },
    matches: { type: Array, default: () => ([]) },
  },
  computed: {
    ...mapGetters(['id']),
    wonDrawLose() {
      const { result: { home, visitor } } = this.match;
      if (home === visitor) {
        return 'draw';
      }
      const side = this.mySide;
      const wonSide = home > visitor ? 'home' : 'visitor';
      return wonSide === side ? 'won' : 'lose';
    },
    color() {
      switch (this.wonDrawLose) {
        case 'draw': return 'is-warning';
        case 'won': return 'is-success';
        default: return 'is-danger';
      }
    },
    icon() {
      switch (this.wonDrawLose) {
        case 'draw': return 'fa-bars';
        case 'won': return 'fa-check';
        default: return 'fa-times';
      }
    },
    round() {
      return this.matches.length - R.findIndex(R.propEq('id', this.match.id))(this.matches);
    },
    mySide() {
      return this.match.visitor === this.id ? 'visitor' : 'home';
    },
    against() {
      return this.match[this.match.visitor === this.id ? 'home' : 'visitor'];
    },
    club() {
      return this.game.competitors[this.against].club;
    },
    user() {
      return this.game.competitors[this.against].user;
    },
    date() {
      return time.format(this.match.played || this.match.updated);
    },
  },
};
</script>
