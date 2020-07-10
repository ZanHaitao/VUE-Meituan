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
      menuListData: [],
    };
  },
  created() {
    this.$api.getNavList().then((res) => {
      this.menuListData = res;
    });
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
