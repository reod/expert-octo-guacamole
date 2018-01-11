<template>
  <div>
    <div v-if="isLogged" class="nav">
      <div @click="$router.push(`/games/${game.id}`)" v-for="game in lastGames" :key="game.id">
        <button class="button  is-outlined is-warning" type="is-primary">{{ game.short || game.name }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import * as R from 'ramda';

export default {
  name: 'Userbar',
  computed: {
    ...mapGetters(['isLogged', 'avatar', 'username', 'id', 'myProfile']),
    count() {
      return R.pipe(
        R.pickAll(['games', 'contests']),
        R.map(R.pipe(R.values, R.length)),
      )(this.myProfile);
    },
    lastGames() {
      const { games } = this.myProfile;
      const sort = R.sortWith([
        R.descend(R.pipe(R.prop('created'), R.map(d => new Date(d).getTime()))),
      ]);
      return R.pipe(R.values, sort, R.take(2))(games);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/vars";
.nav {
  box-sizing: border-box;
  color: white;
  height: $navBarSize;
  padding: 0.25rem;
  margin-left: $navBarSize;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  div {
    align-content: space-between;
  }
  img.avatar {
    width: auto;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
