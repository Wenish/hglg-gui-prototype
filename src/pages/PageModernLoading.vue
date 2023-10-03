<template>
    <div class="h-full w-full image-wallpaper-cave bg-cover bg-center grid grid-rows-[1fr_1fr_1fr] relative">
        <div></div>
        <div></div>
        <div class="inline-grid justify-center items-center">
            <div>
                <div class="border border-gray-800 p-px rounded w-52">
                    <div class="text-sm bg-gray-800 rounded text-center italic relative h-6">
                        <div class="absolute z-10 h-full flex justify-center items-center w-full">{{ loadText }}</div>
                        <div class="absolute top-0 h-full w-3/5 bg-gray-900 z-0 rounded transition-all duration-500" :style="{ width: `${progress}%`}"></div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/modern/ingame" class="absolute h-8 w-8 bottom-0 right-0">
            <IconArrowRight class="text-gray-900 hover:text-gray-950"></IconArrowRight>
        </router-link>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import IconArrowRight from '../components/IconArrowRight.vue';

const loadText = ref('bip bup bap loading...')

const showLoadingText = async () => {
    loadText.value = 'bip bup bap loading...'
    await sleep(1000)
    showGenerateMapText()
}

const showGenerateMapText = async () => {
    loadText.value = 'generate map...'
    await sleep(1000)
    showLoadingText()
}


const progress = ref(0)

const load = async () => {
    progress.value = 0
    await sleep(1000)
    progress.value = 10
    await sleep(500)
    progress.value = 30
    await sleep(400)
    progress.value = 35
    await sleep(600)
    progress.value = 45
    await sleep(400)
    progress.value = 50
    await sleep(400)
    progress.value = 55
    await sleep(600)
    progress.value = 60
    await sleep(300)
    progress.value = 70
    await sleep(700)
    progress.value = 75
    await sleep(500)
    progress.value = 100
    await sleep(1000)
    load()
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

load()
showLoadingText()
</script>
<style scoped>
.image-wallpaper-cave {
    background-image: url('../assets/wallpaper_watercolor.png');
}
</style>