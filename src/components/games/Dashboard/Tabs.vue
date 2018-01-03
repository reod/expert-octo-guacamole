<template>
  <div class="notification">
    <b-tabs v-model="tab">
      <b-tab-item label="Table" v-if="game.table && game.table.length > 0" icon="list-ol">
        <GameTable :game="game" v-if="!isMobile" />
        <FocusedTable :game="game" v-else :count="game.table.length*2" :focus="id" />
      </b-tab-item>
      <b-tab-item label="Schedule" v-if="game.status !== 'OPEN'" icon="calendar">
        <Schedule :game="game" @updated="(game) => $emit('updated',game)" @needFocus="focus(1)" />
      </b-tab-item>
      <b-tab-item label="Competitors" icon="users">
        <Competitors :game="game" @updated="(game) => $emit('updated',game)" />
      </b-tab-item>
      <b-tab-item label="Rules" v-if="(game.rules || '').length" icon="list-ul">
        <Rules :game="game" />
      </b-tab-item>
      <b-tab-item label="Settings" v-if="isAdmin" icon="cog">
        <Settings :game="game" @updated="(game) => $emit('updated',game)" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Schedule from './Schedule';
import GameTable from './Table';
import Competitors from './Competitors';
import FocusedTable from '../FocusedTable';
import Settings from './Settings';
import Rules from './Rules';

export default {
  components: {
    Schedule, GameTable, FocusedTable, Competitors, Settings, Rules,
  },
  props: ['game', 'index'],
  data() { return { tab: 0 }; },
  name: 'game-tabs',
  computed: { ...mapGetters(['id', 'isAdmin', 'isMobile']) },
  methods: { focus(tab) { this.tab = tab; } },
};
</script>
