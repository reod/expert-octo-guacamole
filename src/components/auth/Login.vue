<template>
  <div>
    <div class="has-text-centered hero is-primary is-medium is-vcentered">
      <div class="hero-body">
        <div>
          <h1 class="title is-size-3">
            Redirecting to github...
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

const { API_URL } = process.env;
export default {
  name: 'LogIn',
  data() { return { API_URL }; },
  computed: {
    loginUrl() {
      const { origin } = window.location;
      const { where = '/dashboard' } = this.$route.query;
      return `${this.API_URL}/_github?returnUrl=${origin}/token&where=${where}`;
    },
  },
  mounted() {
    window.location = this.loginUrl;
  },
};
</script>
