<template>
    <div class="mr-root">
      <back-header>
        <p class="title">{{$route.params.gameName}}</p>
      </back-header>
      <div class="mr-content">
        <loading v-if="showLoad"></loading>
        <room-item  v-for="(room,index) in roomList" :r="room" :key="index"></room-item>
       <p v-if="error">网络请求失败,请稍后重试...</p>  
      </div>
      <back-top></back-top>
      <div class="loadMore" v-if="!showLoad">
          <span @click="loadMore">点击加载更多</span>
        </div>
    </div>
</template>

<script>
  import BackHeader from '../components/BackHeader'
  import BackTop from '../components/BackTop'
  import Loading from '../common/Loading'
  import RoomItem from '../components/RoomItem';
  export default{
      data(){
        return {
            roomList:[],
            error:false,
            showLoad:true,
            count:0
        }
      },
      components:{
          BackHeader,BackTop,Loading,RoomItem
      },
      created(){
          this.getInfo(this.count)
      },
      methods:{
          getInfo(page){
            this.axios.get(`/douyuapi/RoomApi/live/${this.$route.params.gameId}?offset=${page}&limit=28`)
              .then(response =>{
                this.error = false
                this.roomList = this.roomList.concat(response.data.data)
                setTimeout(() => {
                  this.showLoad = false
                },500)
              })
              .catch(err => {
                this.error = true
                this.showLoad = false
              })
          },
          loadMore(){
              this.count ++
              this.getInfo(this.count)
          }
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

