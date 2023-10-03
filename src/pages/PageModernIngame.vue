<template>
    <div class="ingame-image h-full w-full bg-cover bg-center bg-no-repeat relative">
        <!-- Top Bar -->
        <div class="absolute w-full">
            <div class="grid grid-cols-[1fr_auto_1fr] justify-center p-2 max-w-6xl mx-auto">
                <div class="grid grid-cols-[1fr_auto]  justify-end items-center">
                    <div></div>
                    <div class="px-2 flex gap-2">
                        <button class="inline-flex bg-gray-950/50 gap-2 p-1 rounded hover:bg-gray-950/75 select-none">
                            <div class="flex items-center gap-0.5">
                                <div class="text-sm font-semibold">{{ stoneCount }}</div>
                                <div class="grid items-center">
                                    <IconStone class="w-4 h-4"></IconStone>
                                </div>
                            </div>
                            <div class="flex items-center gap-0.5">
                                <div class="text-sm font-semibold">{{ woodCount }}</div>
                                <div class="grid items-center">
                                    <IconWood class="w-4 h-4"></IconWood>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="grid justify-center">
                    <div class="inline-grid bg-gray-950/50 py-0.5 rounded px-2 font-bold justify-center items-center text-lg select-none">{{ timerText }}</div>
                </div>
                <div class="grid grid-cols-[auto_1fr_auto] justify-end items-center">
                    <div class="px-2 flex gap-2">
                        <button class="inline-flex bg-gray-950/50 gap-2 p-1 rounded hover:bg-gray-950/75 select-none">
                            <div class="flex items-center gap-0.5">
                                <div class="text-sm font-semibold">{{ workerCount }}</div>
                                <div class="grid items-center">
                                    <IconPerson class="w-4 h-4"></IconPerson>
                                </div>
                            </div>
                            <div class="flex items-center gap-0.5">
                                <div class="text-sm font-semibold">{{ soldierCount }}</div>
                                <div class="grid items-center">
                                    <IconRomanHelmet class="w-4 h-4"></IconRomanHelmet>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div></div>
                    <button class="group border border-gray-950/50 hover:border-gray-950/75 p-px rounded" @click="onSettingsClick">
                        <div class="bg-gray-950/50 group-hover:bg-gray-950/75 rounded p-1 grid justify-center items-center">
                            <IconSettings class="h-7 w-7"></IconSettings>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="absolute bottom-0 w-full">
            <div class="grid grid-cols-[1fr_1fr_auto_auto] max-w-6xl mx-auto p-2">
                <div></div>
                <div></div>
                <div class="inline-grid items-end">
                    <div class="flex flex-col gap-1 px-1">
                        <button class="group border border-gray-950/50 hover:border-gray-950/75 p-px rounded" @click="onBuildClick">
                            <div class="bg-gray-950/50 group-hover:bg-gray-950/75 rounded p-1 grid justify-center items-center">
                                <IconHammer class="h-7 w-7"></IconHammer>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="grid justify-end gap-2">
                    <div class="text-sm text-right font-semibold select-none">
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
import { useRouter } from 'vue-router';
import IconHammer from '../components/IconHammer.vue';
import IconStone from '../components/IconStone.vue';
import IconWood from '../components/IconWood.vue';
import IconPerson from '../components/IconPerson.vue';
import IconRomanHelmet from '../components/IconRomanHelmet.vue';

const router = useRouter()

const stoneCount = ref(23)
const stoneUpdate = async () => {
    const newValue = stoneCount.value + randomIntFromInterval(1, 6) - 3
    stoneCount.value = newValue
    if (stoneCount.value < 0) {
        stoneCount.value = 0
    }
    await sleep(randomIntFromInterval(1500, 4000))
    stoneUpdate()
}
stoneUpdate()
const woodCount = ref(17)
const woodUpdate = async () => {
    const newValue = woodCount.value + randomIntFromInterval(1, 6) - 3
    woodCount.value = newValue
    if (woodCount.value < 0) {
        woodCount.value = 0
    }
    await sleep(randomIntFromInterval(1500, 4000))
    woodUpdate()
}
woodUpdate()

const workerCount = ref(167)
const workerUpdate = async () => {
    const newValue = workerCount.value + randomIntFromInterval(0, 3) - 1
    workerCount.value = newValue
    if (workerCount.value < 0) {
        workerCount.value = 0
    }
    await sleep(randomIntFromInterval(4000, 8000))
    workerUpdate()
}
workerUpdate()

const soldierCount = ref(42)
const soldierUpdate = async () => {
    const newValue = soldierCount.value + randomIntFromInterval(0, 2) - 1
    soldierCount.value = newValue
    if (soldierCount.value < 0) {
        soldierCount.value = 0
    }
    await sleep(randomIntFromInterval(8000, 12000))
    soldierUpdate()
}
soldierUpdate()

const onSettingsClick = () => {
    router.push('/modern/menu')
}

const onBuildClick = () => {

}

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

const timerTick = async () => {
    timer.value++
    await sleep(1000)
    timerTick()
}

timerTick()

function str_pad_left(string: string, pad: string, length: number) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

function sleep (ms: number){ return new Promise((r) => setTimeout(r, ms))};

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
</script>
<style scoped>
.ingame-image {
    background-image: url(../assets/pop-ingame.png)
}
</style>