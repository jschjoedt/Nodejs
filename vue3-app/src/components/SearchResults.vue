<template>
  <div class="root">
    <p>Showing {{ filteredEmployees.length }} results for "{{ query }}"</p>
    <ul>
      <li v-for="e in filteredEmployees" :key="e.FirstName">
        {{ e.FirstName }}, {{ e.LastName }}
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, onMounted} from "vue";
import employees from "../assets/post-data.json";
export default {
  props: {
    query: String,
  },
  setup(props) {
    onMounted(() => {
      console.log("mounted");
    });

    // Filter employees on "FirstName" based on input query sent from "HelloWorld"
    const filteredEmployees = computed(() => {
      return employees.value.filter((s) =>
        s.FirstName.toLowerCase().includes(props.query.toLowerCase())
      );
    });
    return {
      filteredEmployees,
    };
  },
};
</script>

<style scoped>
.root {
  width: 400px;
  margin: 0 auto;
}

.root p {
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