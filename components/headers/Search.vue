<template>
  <div class="nav-search py-10">
    <button class="far fa-search" @click="this.toggle = !toggle"></button>
    <form
      @submit.prevent="this.toggle = false"
      action="#"
      :class="toggle ? '' : 'hide'"
    >
      <input type="text" placeholder="Search" class="searchbox" />
      <button type="submit" class="searchbutton far fa-search"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
