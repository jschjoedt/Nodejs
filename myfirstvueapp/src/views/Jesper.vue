<template>
  <div class="jesper">
    <img alt="Vue logo" src="../assets/logo.png" />
    <JesperComp/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import JesperComp from "@/components/JesperComp.vue"; // @ is an alias to /src

@Options({
  components: {
    JesperComp,
  },
})
export default class Jesper extends Vue {}
</script>
