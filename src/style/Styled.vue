<template>
  <ClubSprite/>
</template>
<script>
import ClubSprite from './ClubSprite';

export default {
  name: 'Styled',
  components: { ClubSprite },
};

</script>
<style lang="scss">
@import "./vars.scss";

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin-ext");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
$gold: #febb33;
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "gray": (#999, #300),
  "gold": ($gold, invert($gold)),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, darken($primary-invert, 15%)),
  "primary-1":($primary-1, $primary-1-invert),
  "primary-2":($primary-2, $primary-2-invert),
  "primary-3":($primary-3, $primary-3-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "average": (#aadd33, black),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "twitter": ($twitter, $twitter-invert)
);
a {
  text-decoration: none !important;
}
// Links
$text: darken($primary-2-invert, 20%);
$text-strong: darken($primary-2-invert, 15%);
$link: $primary-invert;
$link-active: $primary-2-invert;
$link-invert: $primary-invert;
$link-focus-border: $primary-2;

html {
  background-color: $background;
}
// Import Bulma and Buefy styles
@import "~bulma";
@import "~bulma-timeline";
@import "~buefy/src/scss/buefy";

.title {
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-size: 130%;
}
.subtitle {
  text-align: center;
  font-family: "Montserrat";
}
.notification {
  padding: 0.5rem;
}
.is-clickable {
  cursor: pointer;
}
$border: lighten($even, 15%);
.in-table {
  padding: 0.5rem 0rem;
}
.b-tabs .tab-content {
  padding: 0;
}
table.table {
  color: lighten($primary-invert, 10%);
  td {
    border-bottom: 0;
    border-top: 1px solid $border;
  }
  th {
    border: 0;
  }
  thead {
    background-color: $primary;
    td,
    th {
      color: $primary-invert;
    }
  }
  tbody tr {
    &.empty-row {
      font-style: italic;
    }
    &:nth-child(2n + 1) {
      background-color: $even;
    }
    &:not(.is-selected):nth-child(2n) {
      background-color: $odd;
    }
  }
}
.b-table .table {
  border: 0;
  border-radius: 0;
}

html {
  @media screen and (max-width: ($tablet - 2px)) {
    font-size: 12px;
  }
}
</style>
