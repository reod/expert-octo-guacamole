<template>
  <div>
    <NotLogged v-if="!isLogged" class="margin-after" />
    <article class="notification margin-after">
      <p class="title is-size-3">About Us</p>
      <section class="content">
        Schibsted Professional League System (SPLS) started its life as a HackDay project. It was initially planned as a basic solution for a single league purposes. Over time the project has evolved to a scalable platform that enables users to run multiple leagues, with reach statistics, advanced club search function and fixtures previews.</p>
        Here is a quick overview of the possibilities within the platform:
        <ul>
          <li>GitHub integration (login/register); </li>
          <li>User’s dashboard with global statistic, last matches & future matches preview and table preview; </li>
          <li>A list of games with table previews for finished, ongoing and planned leagues;</li>
          <li>Ability to save scores; </li>
          <li>A league view with statistics, past & upcoming fixtures; </li>
          <li>Automatic league split after closing a league (admin only), which enables to promote/demote players based on the league position; </li>
          <li>A list of users with individual dashboards (with the same functionality as personal ones) Intelligent Club search (try “Czelsi”, “Munsiengladbach”, and “London”); </li>
          <li>Ability to send a link to a specific league even to a non-logged users; </li>
          <li>Buttons at the top of the page that directs you to your current league page; </li>
        </ul>
        If you have an idea or you would like to take a part in developing this project or you found a bug, join #premiersted Slack channel and tell us about it!
        <p>
          Things planned for the future:
          <ul>
            <li>Slack integration (with Slack notifications to invited players) </li>
            <li>Global ranking (based on the performance in all leagues) </li>
          </ul>
        </p>

        <p>
          If you have an idea or you would like to take a part in developing this project or you found a bug, join #premiersted Slack channel and tell us about it!
        </p>
        <p> Contributors:
          <ul>
            <li>Mateusz Odelga</li>
            <li>Robert Fijałkowski</li>
            <li>Rafał Sojecki</li>
            <li>Remigiusz Specht</li>
          </ul>
        </p>
        <p>
          Enjoy responsibly and feel the game!
        </p>
      </section>
    </article>

  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NotLogged from './NotLogged';

export default {
  components: { NotLogged },
  name: 'about',
  computed: { ...mapGetters(['isLogged']) },
};
</script>
<style lang="scss" scoped>
.margin-after {
  margin-bottom: 1.5rem;
}
</style>
