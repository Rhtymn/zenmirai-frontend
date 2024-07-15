<script setup lang="ts">
import { TokenKey } from '@/constants/cookie'
import { Unauthorized } from '@/exceptions/unauthorized'
import { getProfile } from '@/services/users'
import type { UserProfile } from '@/types/responses/users'
import CookiesService from '@/utils/cookiesService'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const profile = ref<UserProfile>({
  id: 0,
  name: '',
  username: ''
})
const isFetchError = ref<boolean>(false)

const router = useRouter()

const logout = () => {
  CookiesService.delete(TokenKey)
  router.replace('/login')
}

onMounted(async () => {
  try {
    const token = CookiesService.get(TokenKey)
    if (!token) {
      throw new Unauthorized('token not found')
    }

    const res = await getProfile(token)
    profile.value.id = res?.data?.id ?? 0
    profile.value.name = res?.data?.name ?? ''
    profile.value.username = res?.data?.username ?? ''
  } catch (e) {
    if (e instanceof Unauthorized) {
      router.replace('/login')
    } else {
      isFetchError.value = true
    }
  }
})
</script>

<template>
  <nav class="py-3 px-4 bg-[#162D3A] text-white fixed top-0 left-0 right-0">
    <div class="flex justify-between items-center max-w-[1400px] mx-auto">
      <div id="logo" class="text-xl">Zenmirai</div>
      <div class="nav-items">
        <button class="cursor-pointer" @click="logout">Log out</button>
      </div>
    </div>
  </nav>
  <main class="px-4 py-[71px]">
    <div class="max-w-[1400px] mx-auto">
      <h1 class="text-2xl">Hello 👋</h1>
      <span class="text-lg">{{ profile.name ? profile.name : '....' }}</span>
    </div>
  </main>
</template>
