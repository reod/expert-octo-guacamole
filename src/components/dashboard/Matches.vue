<template>
  <div class="root">
    <p class="title" v-if="title">{{ title }}</p>
    <div v-if="searchable">
      <b-field grouped>
        <b-input expanded v-model="phrase" placeholder="Search for match..." type="search" icon-pack="fa" icon="search" />
      </b-field>
    </div>
    <div class="notification" v-if="relatedMatches.length > perPage">
      <b-pagination :total="relatedMatches.length" :current.sync="page" :is-simple="true" :per-page="perPage" />
    </div>
    <div v-if="relatedMatches.length">
      <div v-for="match in pageView" :key="match.id" @click="match.enabled ? modalScore(match) : ()=>{}">
        <Match :match="match" />
      </div>
      <b-modal :active.sync="isSubmitActive" has-modal-card :can-cancel="true" @close="handle('close')">
        <ModalScore :match="selectedMatch" @apply="game => handle('apply', game)" />
      </b-modal>
    </div>
    <div v-else class="has-text-centered">
      <p style="subtitle">No matches</p>
    </div>
  </div>
</template>

<script>
import * as R from 'ramda';
import { mapGetters } from 'vuex';
import ModalScore from './ModalScore';
import Match from './Match';

export default {
  name: 'Matches',
  components: { ModalScore, Match },
  props: {
    contests: {
      type: Array,
      default: () => [],
    },
    title: String,
    completed: { type: Boolean, default: false },
    noFilter: { type: Boolean, default: false },
    searchable: { type: Boolean, default: false },
    sort: { type: Boolean, default: false },
    size: { type: Number, default: 5 },
  },
  data() {
    return {
      game: null,
      selectedMatch: null,
      isSubmitActive: false,
      phrase: '',
      page: 1,
      perPage: 10,
    };
  },
  computed: {
    ...mapGetters(['isMobile']),
    pageView() {
      const [from, to] = [
        (this.page - 1) * this.perPage,
        ((this.page - 1) * this.perPage) + this.perPage,
      ];
      return this.relatedMatches.slice(from, to);
    },
    relatedMatches() {
      const filterBy = this.completed ? R.reject : R.filter;
      const ifFilter = this.noFilter ? (() => R.identity) : filterBy;
      const ifSort = !this.sort
        ? R.identity
        : R.sortWith([R.descend(R.prop('recommended')),
          R.descend(R.pipe(R.prop('updated'), d => new Date(d).getTime())),
        ]);
      return R.pipe(
        ifFilter(R.propEq('status', 'SCHEDULED')),
        this.search(),
        R.uniqBy(({
          status, home, visitor, isRematch, id,
        }) => {
          const pl = [home.user.id, visitor.user.id];
          const uniqId = status + (isRematch ? '0' : '1') + R.sortBy(R.identity, pl).join(',');
          return uniqId;
        }),
        ifSort,
        R.take(this.size),
      )(this.contests);
    },
    lPhrase() { return this.phrase.toLocaleLowerCase().split(' ').filter(R.identity); },
    search() {
      if (!this.searchable || !this.phrase) {
        return R.identity;
      }
      const constructPhrases = R.pipe(
        R.xprod(this.lPhrase),
        R.map(([needle, haystack]) => (haystack.indexOf(needle) !== -1) * 1), // TODO: improve it
        R.sum,
        R.lte(this.lPhrase.length),
        Boolean,
      );
      const prepareCompetitors = R.pipe(
        R.map(R.pick(['club', 'user'])),
        R.map(R.pluck('name')),
        R.map(R.values),
        R.flatten,
        R.map(part => part.toLocaleLowerCase()),
      );
      return R.pipe(R.filter(({ home, visitor }) => R.pipe(
        prepareCompetitors,
        constructPhrases,
      )([home, visitor])));
    },
  },
  watch: {
    contests() {
      this.checkFocus();
    },
  },
  created() {
    this.checkFocus();
  },
  methods: {
    modalScore(data) {
      this.selectedMatch = { ...data };
      this.$router.replace(`${this.$route.path}?contest=${data.id}`);
      this.isSubmitActive = true;
    },
    handle(action, data) {
      this.$router.replace(`${this.$route.path}`);
      switch (action) {
        case 'apply':
          this.isSubmitActive = false;
          this.$emit('updateGame', data);
          this.$emit('refresh');
          return true;
        default:
          return true;
      }
    },
    checkFocus() {
      const { contest } = (this.$route.query);
      if (contest) {
        const found = (R.find(R.propEq('id', contest), this.relatedMatches));
        if (found) {
          this.modalScore(found);
          this.$emit('needFocus');
        } else {
          console.log('focused but not found');
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/vars.scss";

.root {
  font-size: 80%;
}
.results {
  font-family: "Montserrat";
  letter-spacing: -1px;
  position: relative;
  .edit {
    position: absolute;
    right: 0.25rem;
    top: 0.25rem;
  }
}
.add-result {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.versus {
  margin-top: 0.25rem;
}
.pagination {
  justify-content: center;
}
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
</style>

