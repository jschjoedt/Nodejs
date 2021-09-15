<template>
  <div class="navigation">
    <div>====== This is one mighty footer ======</div>
    <div>Navigation routes in project: {{ navTargets.length }}</div>
    <ul>
      <li v-for="n in navTargets" :key="n.name">
        <div>{{ n.name }}</div>
      </li>
    </ul>

    <button @click="navTo('about')">{{ btnText }}</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  setup() {
    const navTo = (page) => {
      router.push(page);
    };
    return {
      navTo,
      navTargets: [],
      btnText: "About",
    };
  },
  created() {
    this.loadNavigations();
    console.log(this.$route.name + " is loaded and navigation targets have been listed.");
  },
  watch: {
    // watch route changes
    $route: "doShitOnChange",
  },
  methods: {
    doShitOnChange() {
      console.log("You just navigated to: " + this.$route.name);
    },
    loadNavigations() {
      this.navTargets = router.getRoutes();
      console.log(this.navTargets);
    },
  },
};
</script>

<style scoped>
.navigation {
  width: 400px;
  margin: 0 auto;
}

.navigation p {
  text-align: right;
  font-size: 0.7em;
  margin: 0;
}

ul {
  list-style: none;
  width: 50px 0;
  padding: 0;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #ddd;
}

li {
  text-align: left;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

li:nth-last-of-type(1) {
  border-bottom: none;
}
</style>