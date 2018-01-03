<template>
  <div class="root">
    <p class="title" v-if="title">{{title}}</p>
    <div v-if="searchable">
      <b-field grouped>
        <b-input expanded v-model="phrase" placeholder="Search for match..." type="search" icon-pack="fa" icon="search">
        </b-input>
      </b-field>
    </div>
    <div v-if="relatedMatches.length">
      <div v-for="(match, index) in relatedMatches" :key="match.id" @click="modalScore(match)">
        <div class="columns match notification results is-primary-1">
          <div class="column is-5 has-text-centered">
            <div class="title">{{match.home.user.name}}</div>
            <div class="subtitle is-size-6">{{match.home.club.name}}</div>
          </div>
          <div class="column is-2" v-if="match.result">
            <div class="is-size-4 has-text-weight-bold has-text-centered">
              {{match.result.home}}&nbsp;:&nbsp;{{match.result.visitor}}
            </div>
          </div>
          <div class="column is-2 has-text-centered" v-else>
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
          <div class="column is-5 has-text-centered">
            <div class="title">{{match.visitor.user.name}}</div>
            <div class="subtitle is-size-6">{{match.visitor.club.name}}</div>
          </div>
        </div>
      </div>
      <b-modal :active.sync="isSubmitActive" has-modal-card :canCancel="true" @close="handle('close')">
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

export default {
  components: { ModalScore },
  data() {
    return {
      game: null,
      selectedMatch: null,
      isSubmitActive: false,
      phrase: '',
    };
  },
  props: {
    contests: {
      type: Array,
      default: () => [],
    },
    title: String,
    completed: { type: Boolean, default: false },
    noFilter: { type: Boolean, default: false },
    searchable: { type: Boolean, default: false },
    size: { type: Number, default: 5 },
  },
  created() {
    this.checkFocus();
  },
  computed: {
    ...mapGetters(['isMobile']),
    relatedMatches() {
      const filterBy = this.completed ? R.reject : R.filter;
      const ifFilter = this.noFilter ? (() => R.identity) : filterBy;
      return R.pipe(
        ifFilter(R.propEq('status', 'SCHEDULED')),
        this.search(),
        R.sortWith([
          R.descend(R.pipe(R.prop('updated'), d => new Date(d).getTime())),
        ]),
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
  name: 'matches',
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
  watch: {
    contests() {
      this.checkFocus();
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
.match {
  transition: all 0.4s ease;
  outline: 1px solid rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0);
  &:hover {
    outline: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);

    background: lighten($primary-1, 3%);
    cursor: pointer;
  }
}
</style>

