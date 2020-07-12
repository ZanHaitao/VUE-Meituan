<template>
  <div class="deatil-comment">
    <h4 class="total">
      <span>{{ commentList.length }}条网友点评</span>
      <span class="ranking">
        <span>质量排序</span>
        <span>时间排序</span>
      </span>
    </h4>
    <div class="comment-content">
      <div class="comment-category">
        <ul class="clearfix">
          <li class="category-item" v-for="(item,index) in category" :key="index">
            {{item.title}}({{ item.num }})
          </li>
        </ul>
        <div>
          <el-checkbox>只看有图片的评论</el-checkbox>
        </div>
      </div>
      <ul>
        <li v-for="(item,index) in commentList" :key="index">
          <div class="comment-left">
            <img :src="item.image" alt />
          </div>
          <div class="comment-right">
            <p class="userName">{{ item.username }}</p>
            <p class="rate">
              <el-rate v-model="item.rate" disabled></el-rate>
              <span class="date">{{ nowDate }}</span>
            </p>
            <p class="comment-text">
              {{ item.evalaute }}
            </p>
            <p class="comment-image">
              <ul class="clearfix">
                <li v-for="(src,i) in item.pics" :key="i">
                  <img :src="src" alt="">
                </li>
              </ul>
            </p>
            <p class="like">
              <span>
                <i class="el-icon-thumb"></i>
                赞
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    commentList() {
      const list = [];
      for (let i = 0; i < 3; i += 1) {
        this.commentData.forEach((item) => {
          list.push(item);
        });
      }
      return list;
    },
    nowDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`;
      const day = `${date.getDate()}`;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
  },
  data() {
    return {
      category: [
        {
          title: '服务热情',
          num: 46,
        },
        {
          title: '环境很好',
          num: 21,
        },
        {
          title: '味道赞',
          num: 71,
        },
        {
          title: '干净整洁',
          num: 10,
        },
        {
          title: '菜品不错',
          num: 88,
        },
        {
          title: '性价比高',
          num: 16,
        },
        {
          title: '上菜快',
          num: 34,
        },
        {
          title: '分量足',
          num: 12,
        },
        {
          title: '价格实惠',
          num: 66,
        },
        {
          title: '回头客',
          num: 11,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/detail/comment.scss';
</style>
