<template>
  <div>
    <p class="title" v-if="title">{{ title }}</p>
    <section style="width: 80%">
      <b-field label="Id" :type="result ? 'is-danger' : ''" :message="result">
        <b-input v-model="properties.id" expanded minlength="10" readonly />
      </b-field>
      <b-field label="Name" :type="result ? 'is-danger' : ''" :message="result">
        <b-input v-model="properties.name" expanded minlength="10" />
      </b-field>
      <b-field label="ShortCode" :type="result ? 'is-danger' : ''" :message="result">
        <b-input v-model="properties.short" expanded minlength="3" />
      </b-field>
      <b-field label="Custom color (#hex, rgba)" :type="result ? 'is-danger' : ''" :message="result">
        <b-input v-model="properties.color" expanded @keydown.enter.native="validate" />
      </b-field>
      <b-field label="Location">
        <b-select v-model="properties.location" placeholder="Select a location">
          <option value="Gdańsk" selected="true">Gdańsk</option>
          <option value="Kraków">Kraków</option>
          <option value="Stockholm">Stockholm</option>
        </b-select>
      </b-field>

      <b-field label="Description">
        <b-input v-model="properties.description" type="textarea" />
      </b-field>
      <b-field label="Rules (markdown)">
        <b-input v-if="!preview" v-model="properties.rules" type="textarea" />
      </b-field>
      <div class="content" v-if="preview" v-html="compiledRules" />
      <a class="is-block subtitle" @click="preview = !preview">preview</a>

      <b-field label="">
        <b-checkbox v-model="properties.ranked" type="textarea">
          <span>Ranked game</span>
        </b-checkbox>
      </b-field>
      <b-field label="">
        <b-checkbox v-model="properties.archived" type="textarea">
          <span>Archived</span>
        </b-checkbox>
      </b-field>
      <b-field>
        <p class="control">
          <button @click="validate" class="button is-primary-2">
            {{ actionName }}
          </button>
        </p>
      </b-field>
    </section>
  </div>
</template>
<script>
import * as R from 'ramda';
import * as marked from 'marked';

export default {
  name: 'GamePropertiesForm',
  props: {
    game: { type: Object, default: () => ({}) },
    actionName: { type: String, default: 'Create' },
    title: { type: String, default: 'Create game' },
  },
  data() {
    return {
      properties: {
        id: '',
        name: '',
        short: '',
        location: 'Gdańsk',
        ranked: false,
        archived: false,
        description: '',
        color: '',
        rules: '',
        ...R.pick(['id', 'short', 'name', 'location', 'ranked', 'description', 'archived', 'rules', 'color'], this.game),
      },
      result: '',
      preview: false,
    };
  },
  computed: {
    compiledRules() {
      return marked(this.properties.rules);
    },
  },
  methods: {
    validate() {
      if (this.properties.name) {
        this.$emit('submit', this.properties);
        this.result = '';
      } else {
        this.result = 'Invalid name';
      }
    },
  },
};
</script>
<style lang="scss">
@import "../../style/vars.scss";
.label {
  color: $primary-invert;
}
</style>

