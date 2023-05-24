<template>
  <HeaderView />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from '../../components/layout/HeaderView.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderView
  }
}
</script>