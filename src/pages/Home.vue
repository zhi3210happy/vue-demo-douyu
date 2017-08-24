<template>  
    <div class="mr-root">
      <p-header>
        <p class="title">斗鱼TV</p>
      </p-header>
      <loading v-if="showLoading"></loading>
      <div class="mr-content">
        <room-item v-for="(room,index) in roomList" :r="room" :key="index"></room-item>
        <p v-if="error">不好意思,加载失败,请稍后再试...</p>
        <div class="clear"></div>
        <div class="loadMore">
          <span @click="loadMore">点击加载更多</span>
        </div>
      </div>
      <back-top></back-top>
    </div>
</template>

<script>
import Public from '../public.js'
import RoomItem from '../components/RoomItem'
import BackTop from '../components/BackTop'
export default {
  data() {
    return {
      showLoading: true,
      roomList: [],
      error: false,
      count: 0
    }
  },
  mixins: [Public],
  components: {
    RoomItem, BackTop,
  },
  created() {
    this.getInfo(this.count)
  },
  methods: {
    getInfo(page) {     //接口来源：斗鱼API文档
      this.axios.get(`/douyuapi/RoomApi/live?offset=${page}&limit=28`)
        .then(response => {
          this.error = false
          this.roomList = this.roomList.concat(response.data.data)
          setTimeout(() => {
            this.showLoading = false
          }, 1000)
        })
        .catch(err => {
          this.error = true
          this.showLoading = false
        })
    },
    loadMore() {
      this.count++
      this.getInfo(this.count)
    },
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
