<template>
    <div class="mr-item">
        <loading v-if="showLoad"></loading>
        <router-link :to="'/room/' + room.room_id" v-for="(room,index) in roomList" :key="index">
            <img :src="room.room_src" alt="">
            <div class="room-info">
                <span class="nickname">{{room.nickname}}</span>
                <span class="count">
                    <i class="icon-group"></i>
                    {{room.online | number}}
                </span>
            </div>
            <div class="room-title">
                <i class="icon-desktop"></i>
                {{room.room_name | message}}
            </div>
        </router-link>
        <div class="loadMore" v-if="!showLoad">
            <span @click="loadMore">点击加载更多</span>
        </div>
        <p v-if="error">网络请求失败,请稍后重试...</p>
    </div>
</template>

<script>
import Loading from '../common/Loading'
export default {
    data() {
        return {
            showLoading: true,
            showLoad: true,
            roomList: [],
            error: false,
            count: 0
        }
    },
    props: ['roomid'],
    components: {
        Loading
    }
    ,
    created() {
        this.getInfo(this.count)
    },
    methods: {
        getInfo(page, roomid) {
            if (typeof(roomid)=='undefined') {
              var  url = `/douyuapi/RoomApi/live?offset=${page}&limit=28`
            } else {
              var  url= `/douyuapi/RoomApi/live/${this.roomid}?offset=${page}&limit=28`
            }
            this.axios.get(url)
                .then(response => {
                    this.error = false
                    this.roomList = this.roomList.concat(response.data.data)
                    setTimeout(() => {
                        this.showLoad = false
                    }, 500)
                })
                .catch(err => {
                    console.log(err)
                    this.error = true
                    this.showLoad = false
                })
        },
        loadMore() {
            this.count++
            this.getInfo(this.count)
        }
    }

}
</script>

<style>
.mr-item {
    margin-top: 10px;
    float: left;
    width: 4.4rem;
    margin-right: .3rem;
    position: relative;
}

.mr-item img {
    width: 100%;
    height: 2.6rem;
    border-radius: 5px;
}

.room-info {
    position: absolute;
    bottom: 33px;
    color: #fff;
    padding: 0 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: rgba(10, 10, 10, .5);
    line-height: 24px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.room-info .count {
    float: right;
}

.room-title {
    line-height: 30px;
}
</style>
