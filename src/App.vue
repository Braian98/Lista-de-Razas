<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
.slide-fade-enter-active {
  transition: all .1.5s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
