<template>
  <div class="h-screen bg-white shadow-lg transition-all duration-300 ease-in-out" :class="{ 'w-64': !collapsed, 'w-20': collapsed }">
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center space-x-2" v-if="!collapsed">
        <el-icon class="text-2xl text-gray-600"><Monitor /></el-icon>
        <span class="text-lg font-semibold text-gray-800">Muse Dashboard</span>
      </div>
      <el-button @click="toggleCollapse" :icon="collapsed ? Expand : Fold" circle class="text-gray-600 hover:bg-gray-100" />
    </div>

    <el-menu :default-active="activeIndex" class="border-r-0" :collapse="collapsed" @select="handleSelect">
      <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><User /></el-icon>
          <span>Account Pages</span>
        </template>
        <el-menu-item index="5-1">Profile</el-menu-item>
        <el-menu-item index="5-2">Sign In</el-menu-item>
        <el-menu-item index="5-3">Sign Up</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Monitor,
   Grid, CreditCard, Operation, User, Expand, Fold } from "@element-plus/icons-vue";

const collapsed = ref(false);
   const activeIndex = ref("1");

// 动态菜单项数据
const menuItems = ref([
  { index: "1", title: "Dashboard", icon: Monitor },
  { index: "2", title: "Tables", icon: Grid },
  { index: "3", title: "Billing", icon: CreditCard },
  { index: "4", title: "RTL", icon: Operation },
]);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

const handleSelect = (index) => {
  activeIndex.value = index;
};

console.log(collapsed.value);
</script>
