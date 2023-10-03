<template>
    <div class="h-full w-full image-wallpaper-cave bg-cover bg-center grid grid-rows-[1fr_1fr_1fr] relative">
        <div></div>
        <div></div>
        <div class="inline-grid justify-center items-center select-none">
            <div class="inline-flex flex-col items-center gap-2">
                <p class="text-center">{{ currentSaying }}</p>
                <div class="border border-gray-800/70 p-px rounded w-52">
                    <div class="text-sm bg-gray-800/70 rounded text-center italic relative h-6">
                        <div class="absolute z-10 h-full flex justify-center items-center w-full">{{ loadText }}</div>
                        <div class="absolute top-0 h-full w-3/5 bg-gray-900/70 z-0 rounded transition-all duration-500" :style="{ width: `${progress}%`}"></div>
                    </div>
                </div>
            </div>
        </div>
        <!--
            <router-link to="/modern/ingame" class="absolute h-8 w-8 bottom-0 right-0">
                <IconArrowRight class="text-gray-900 hover:text-gray-950"></IconArrowRight>
            </router-link>
        -->
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const isLoading = ref(false)

const loadText = ref('bip bup bap loading...')

const showLoadingText = async () => {
    if (!isLoading.value) return
    loadText.value = 'bip bup bap loading...'
    await sleep(1000)
    showGenerateMapText()
}

const showGenerateMapText = async () => {
    if (!isLoading.value) return
    loadText.value = 'generate map...'
    await sleep(1000)
    showLoadingText()
}

const sayings = ref([
    'A plant a day keeps the bad land away.',
    'Smile, happy looks good on you.',
    'Start each day with a grateful heart.',
    'It’s a good day for a good day.'
])

const currentSaying = ref('')

const setRandomSaying = () => {
    currentSaying.value = sayings.value[randomIntFromInterval(0, sayings.value.length - 1)]
}

setRandomSaying()

const progress = ref(0)

const load = async () => {
    isLoading.value = true
    showLoadingText()
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
    isLoading.value = false
    loadText.value = 'ready'
    await sleep(1500)
    router.push('/modern/ingame')
}


load()
function sleep (ms: number){ return new Promise((r) => setTimeout(r, ms))};
function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
</script>
<style scoped>
.image-wallpaper-cave {
    background-image: url('../assets/wallpaper_watercolor.png');
}
</style>