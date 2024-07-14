<script setup lang="ts">
import RegisterForm from '@/components/form/RegisterForm.vue'
import flower from '@/assets/img/flower.jpg'
</script>

<template>
  <main class="flex flex-col mx-4 my-4 gap-y-4 lg:flex-row-reverse items-center">
    <div id="img-container" class="w-full h-full lg:w-[50%]">
      <img
        :src="flower"
        alt="flower paints"
        class="h-[180px] w-[100%] rounded-lg object-cover lg:h-[96vh]"
      />
    </div>
    <div id="content" class="flex flex-col w-full lg:w-[50%]">
      <div class="lg:w-[50%] lg:self-center flex flex-col gap-y-4">
        <div id="intro" class="flex flex-col gap-y-2">
          <h1 class="text-[24px] font-semibold">Welcome to Zenmirai</h1>
          <p class="text-[#313957] text-[15px]">
            Sign up for free to access to in any of our products
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  </main>
</template>
