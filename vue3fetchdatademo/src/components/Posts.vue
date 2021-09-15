<template>
  <div class="list">
    <h1>Vue 3 and axios example</h1>
    <ul v-if="!loading">
      <li v-for="e in data" :key="e.FirstName">
        <div>{{ e.FirstName }} {{ e.LastName }}</div>
        <div>{{ e.Address }}</div>
      </li>
    </ul>
    <p v-if="loading">Loading data...</p>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Posts",
  props: {},
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    return {
      data,
      loading,
      error,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://services.odata.org/V3/Northwind/Northwind.svc/Employees")
        .then((response) => {
          this.data = response.data.value;
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>
.list {
  width: 400px;
  margin: 0 auto;
}

.list p {
  text-align: center;
  font-size: 2em;
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