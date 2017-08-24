<template>
    <div class="mr-root">
      <back-header>
        <p class="title">{{$route.params.gameName}}</p>
      </back-header>
      <div class="mr-content">
        <room-item :roomid="$route.params.gameId"></room-item>      
      </div>
      <back-top></back-top>
      
    </div>
</template>

<script>
  import BackHeader from '../components/BackHeader'
  import BackTop from '../components/BackTop'

  import RoomItem from '../components/RoomItem';
  export default{
      components:{
          BackHeader,BackTop,RoomItem
      }    
  }

</script>

<style>
  .mr-content{
    padding:44px 0 0 .3rem;
    overflow: hidden;
  }
  .loadMore{
    margin:10px;
    text-align: center;
  }
  .loadMore span{
    display: inline-block;
    line-height:30px;
    padding:0 20px;
    border-radius:10px;
    border:1px solid #000;
  }
</style>

