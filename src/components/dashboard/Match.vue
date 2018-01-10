<template>
  <div class="columns match notification results is-primary-1" :class="!match.enabled ? 'disabled' : 'enabled'">
    <div class="column is-5 has-text-centered">
      <div class="title">{{ match.home.user.name }}</div>
      <div class="subtitle is-size-6">{{ match.home.club.name }}</div>
    </div>
    <div class="column is-2" v-if="match.result">
      <div class="is-size-4 has-text-weight-bold has-text-centered">
        {{ match.result.home }}&nbsp;:&nbsp;{{ match.result.visitor }}
      </div>
    </div>
    <div class="column is-2 has-text-centered" v-else-if="match.enabled">
      <span v-if="isMobile">
        <div class="button is-primary-2 is-small">
          <b-icon icon="plus" />
        </div>
      </span>
      <span v-else>
        <b-tooltip :label="match.gid.name">
          <div class="button is-primary-2 is-small">
            <b-icon icon="plus" />
          </div>
        </b-tooltip>
      </span>
    </div>
    <div class="column is-2 has-text-centered" v-else>
      Postponed
    </div>
    <div class="column is-5 has-text-centered">
      <div class="title">{{ match.visitor.user.name }}</div>
      <div class="subtitle is-size-6">{{ match.visitor.club.name }}</div>
    </div>
    <div class="priority" v-if="match.recommended > 0.65 && match.status === 'SCHEDULED'">
      <div class="chevrons">
        <b-icon icon="chevron-up" v-if="match.recommended > 0.95" />
        <b-icon icon="chevron-up" v-if="match.recommended> 0.75" />
        <b-icon icon="chevron-up" />
      </div>
    </div>
  </div>
</template>

<script>
import * as R from 'ramda';
import { mapGetters } from 'vuex';

export default {
  name: 'Match',
  props: {
    match: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(['isMobile']),
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/vars.scss";
.notification {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.column {
  // outline: 1px dashed rgba(255, 255, 255, 0.2);
  padding: 0.25rem;
}
.priority {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  .chevrons {
    height: 66%;
    display: flex;
    flex-direction: column-reverse;
    left: 0;
    .icon {
      height: 8px;
      opacity: 0.7;
    }
  }
}
.match {
  &.disabled {
    opacity: 0.5;
  }
  &.enabled {
    cursor: pointer;
    &:hover {
      outline: 1px solid rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
      background: lighten($primary-1, 3%);
    }
  }
  position: relative;
  transition: all 0.4s ease;
  outline: 1px solid rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0);
}
</style>

