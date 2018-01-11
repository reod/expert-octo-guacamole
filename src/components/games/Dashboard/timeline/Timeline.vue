<template>
  <div>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">{{ toPlay > 0 ? toPlay+' matches left in total' : 'Finished' }}</span>
      </header>
      <div class="timeline-item" v-if="toPlay > 0 && firstUpcoming">
        <div class="timeline-marker is-icon has-text-centered is-gray">
          <i class="fa fa-question" />
        </div>
        <div class="timeline-content">
          <p class="heading"> {{ importance }} </p>
          <p class="title is-size-7">{{ club.name }} </p>
          <p class="subtitle is-size-7">{{ user.name }}</p>
        </div>
      </div>
      <PlayedMatch v-for="match in matches" :key="match.id" :match="match" :game="game" :matches="matches" />
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Start</span>
      </header>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import * as R from 'ramda';
import PlayedMatch from './PlayedMatch';

export default {
  name: 'Timeline',
  components: { PlayedMatch },
  props: {
    game: { type: Object, default: () => ({}) },
  },
  computed: {
    ...mapGetters(['id']),
    matches() {
      return R.pipe(
        R.filter(R.both(
          R.either(
            R.propEq('home', this.id),
            R.propEq('visitor', this.id),
          ),
          R.complement(R.propEq('status', 'SCHEDULED')),
        )),
        R.values,
      )(this.game.schedule);
    },
    toPlay() {
      return (2 * (this.game.table.length - 1)) - this.matches.length;
    },
    firstUpcoming() {
      return R.pipe(
        R.values,
        R.filter(R.propEq('status', 'SCHEDULED')),
        R.filter(R.prop('enabled')),
        R.filter(R.either(
          R.propEq('home', this.id),
          R.propEq('visitor', this.id),
        )),
        R.sortWith([R.descend(R.prop('recommended'))]),
        R.head,
      )(this.game.schedule);
    },
    against() {
      return this.firstUpcoming[this.firstUpcoming.visitor === this.id ? 'home' : 'visitor'];
    },
    club() {
      return this.game.competitors[this.against].club;
    },
    user() {
      return this.game.competitors[this.against].user;
    },
    importance() {
      const { recommended } = this.firstUpcoming;
      if (recommended > 0.95) {
        return 'play it now!';
      }
      if (recommended > 0.75) {
        return 'high-priority';
      }
      if (recommended > 0.65) {
        return 'worth to play';
      }
      return 'low-priority';
    },
  },
  methods: {

  },
};
</script>
<style lang="scss">
.timeline .timeline-item .timeline-marker.is-icon {
  line-height: 0.5rem;
}
.timeline {
  padding-top: 1rem;
  .title,
  .subtitle {
    text-align: unset;
  }
}
</style>
