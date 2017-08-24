<template>  
    <div class="mr-root">
      <p-header>
        <p class="title">斗鱼TV</p>
      </p-header>
      
      <div class="mr-content">
        <room-item ></room-item>
        
        <div class="clear"></div>
        
      </div>
      <back-top></back-top>
    </div>
</template>

<script>
import Public from '../public.js'
import RoomItem from '../components/RoomItem'
import BackTop from '../components/BackTop'
export default {
  mixins: [Public],
  components: {
    RoomItem, BackTop,
  }
}
</script>

<style>
.mr-content {
  padding: 44px 0 0 .3rem;
  overflow: hidden;
}
</style>
