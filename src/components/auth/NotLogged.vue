<template>
  <div class="root">
    <div class="has-text-centered hero is-primary is-medium is-vcentered">
      <div class="hero-body">
        <div>
          <h1 class="title is-size-3">
            You are not logged in.
          </h1>
          <h2 class="subtitle is-hidden-touch">
            Please log in to proceed
          </h2>
          <h2 class="subtitle" v-if="notLoggedCause">
            {{ notLoggedCause }}
          </h2>
          <router-link :to="`/login${redirect ? '?where='+redirect : ''}`">
            <button class="button is-success is-large is-outlined">
              <span>Login with</span>
              <b-icon icon="github" />
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NotLogged',
  computed: {
    ...mapGetters(['isLogged', 'notLoggedCause']),
    redirect() {
      return this.$route.query.redirect;
    },
  },
  methods: {
    redirectIfNeeded(newValue) {
      if ((newValue || this.isLogged) && this.redirect) {
        this.$router.push(this.redirect);
      }
    },
  },
  created() {
    this.redirectIfNeeded();
  },
  watch: {
    isLogged(isLoggedNow) {
      this.redirectIfNeeded(isLoggedNow);
    },
  },
};
</script>
<style lang="scss" scoped>
.pad-top {
  margin-top: 1rem;
}
</style>

