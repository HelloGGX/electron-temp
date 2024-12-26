<template>
  <div class="flex min-h-screen items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="text-center mb-8">
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="您的公司" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">欢迎登录管理系统</h2>
        </div>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">用户名</label>
            <div class="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                v-model="username"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"> 记住我 </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> 忘记密码？ </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              :disabled="hasError"
            >
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "@/features/login/apis";

const username = ref("");
const password = ref("");
const { mutate: loginMutate } = useLogin();

const hasError = ref(false); // New reactive variable for error state

const validateForm = () => {
  hasError.value = !username.value || !password.value; // Check if fields are empty
};

const handleLogin = async () => {
  validateForm(); // Call validation before login
  if (hasError.value) return; // Prevent login if validation fails
  loginMutate({ userName: username.value, userPwd: password.value });
};
</script>

<style scoped>
/* 如有需要，请添加其他样式 */
</style>
