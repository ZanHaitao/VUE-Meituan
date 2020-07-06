<template>
  <div class="category" @mouseleave="menuLeave">
    <dl>
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuListData" :key="index" @mouseenter="menuEnter(item)">
        <i :class="'iconfont '+ item.type"></i>
        <span>{{item.name}}</span>
        <span class="el-icon-arrow-right"></span>
      </dd>
    </dl>
    <div class="detall" v-if="showMenu">
      <template v-for="(item,index) in showMenu">
        <h4 :key="index">
          {{ item.title }}
          <span>
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </h4>
        <span v-for="(t,i) in item.items" :key="i+'1'">
          <a href="#">{{t}}</a>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: null,
      menuListData: [
        {
          type: 'food',
          name: '美食',
          items: [
            {
              title: '美食',
              items: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐'],
            },
          ],
        },
        {
          type: 'takeout',
          name: '外卖',
          items: [
            {
              title: '外卖',
              items: ['美团外卖'],
            },
          ],
        },
        {
          type: 'hotel',
          name: '酒店',
          items: [
            {
              title: '酒店星级',
              items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星'],
            },
          ],
        },
      ],
    };
  },
  methods: {
    menuEnter(item) {
      this.showMenu = item.items;
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        this.showMenu = null;
      }, 200);
    },
  },
};
</script>
