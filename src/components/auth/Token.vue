<template>
  <div/>
</template>
<script>
import { mapActions } from 'vuex';

const { API_URL } = process.env;
export default {
  name: 'TokenConsume',
  data() { return { API_URL }; },
  mounted() {
    const { token, where = '/dashboard' } = this.$route.query;
    this.$router.push(where);
    this.login(token);
  },
  methods: { ...mapActions(['login']) },
};
</script>
