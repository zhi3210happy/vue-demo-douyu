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

.loadMore {
  margin: 10px;
  text-align: center;
}

.loadMore span {
  display: inline-block;
  line-height: 30px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #000;
}
</style>
