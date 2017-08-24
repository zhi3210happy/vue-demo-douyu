<template>
  <div class="mr-root">
    <p-header>
      <p class="title">全部分类</p>
    </p-header>
    <div class="mr-content">
      <ul>
        <li v-for="(g,index) in categoryList"  :key="index">
          <router-link :to="'/roomList/' + g.cate_id + '/' + g.game_name">
            <img :src="g.game_icon" alt="">
            <p>{{g.game_name}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <loading v-if="showLoading"></loading>
    <back-top></back-top>
  </div>
</template>

<script>
import Public from '../public';
import BackTop from '../components/BackTop'
export default {
  data() {
    return {
      categoryList: [],
      showLoading: true
    }
  },
  components: {
     BackTop
  },
  mixins: [Public],
  created() {
    this.axios.get('/douyuapi/RoomApi/game')
      .then(response => {
        this.categoryList = response.data.data
        setTimeout(() => {
          this.showLoading = false
        }, 500)
      })
      .catch(err => {
        console.log(err)
        this.showLoading=false
      })
  }
}

</script>

<style scoped>
.mr-content {
  padding: 44px 0 0 0;
}

.mr-content ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex-basis: 33.3333%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 20px 0;
}

li:nth-child(3n) {
  border-right: none;
}

li img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

li p {
  margin-top: 10px;
}
</style>
