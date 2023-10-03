<template>
    <div class="ingame-image h-full w-full bg-cover bg-center bg-no-repeat relative">
        <!-- Top Bar -->
        <div class="absolute w-full">
            <div class="grid grid-cols-[1fr_1fr_1fr] justify-center p-2 max-w-6xl mx-auto">
                <div></div>
                <div class="grid justify-center">
                    <div class="inline-grid bg-black/50 py-0.5 px-2 font-bold justify-center items-center text-lg select-none">{{ timerText }}</div>
                </div>
                <div class="grid justify-end">
                    <button class="bg-black/50 hover:bg-black/75 rounded-full p-1 grid justify-center items-center">
                        <IconSettings class="h-7 w-7"></IconSettings>
                    </button>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="absolute bottom-0 w-full">
            <div class="grid grid-cols-[1fr_1fr_1fr] max-w-6xl mx-auto p-2">
                <div></div>
                <div></div>
                <div class="grid justify-end gap-2">
                    <div class="text-sm text-right font-semibold">
                        <div class="text-green-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">AdronTech: 523</div>
                        <div class="text-red-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">UltimateSpinDash: 434</div>
                        <div class="text-blue-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">Wenish: 361</div>
                        <div class="text-yellow-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">akamatsu: 321</div>
                        <div class="text-orange-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">Atvus (Kai): 311</div>
                        <div class="text-white-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">Casjen: 295</div>
                    </div>
                    <Minimap></Minimap>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import IconSettings from '../components/IconSettings.vue';
import Minimap from '../components/Minimap.vue'

const timer = ref(0)
const timerMinutes = computed(() => {
    return Math.floor(timer.value / 60);
})
const timerSeconds = computed(() => {
    return timer.value - timerMinutes.value * 60;
})

const timerText = computed(() => {
    return str_pad_left(timerMinutes.value.toString(), '0', 2) + ':' + str_pad_left(timerSeconds.value.toString(), '0', 2);
})

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const timerTick = async () => {
    timer.value++
    await sleep(1000)
    timerTick()
}

timerTick()

function str_pad_left(string: string, pad: string, length: number) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}
</script>
<style scoped>
.ingame-image {
    background-image: url(../assets/pop-ingame.png)
}
</style>