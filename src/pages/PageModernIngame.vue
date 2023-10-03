<template>
    <div class="ingame-image h-full w-full bg-cover bg-center bg-no-repeat relative">
        <!-- Top Bar -->
        <div class="absolute w-full">
            <div class="grid grid-cols-[1fr_auto_1fr] justify-center p-2 max-w-6xl mx-auto">
                <div class="grid grid-cols-[1fr_auto]  justify-end items-center">
                    <div></div>
                    <div class="flex gap-2">
                    </div>
                </div>
                <div class="grid justify-center">
                    <!--
                    <div class="inline-grid bg-gray-950/50 py-1 rounded px-2 font-bold justify-center items-center text-lg select-none">{{ timerText }}</div>
                    -->
                </div>
                <div class="grid grid-cols-[auto_1fr_auto] justify-end items-center">
                    <div class="px-2 flex gap-2">
                    </div>
                    <div class="flex justify-end px-2 gap-2">
                        <button class="group rounded select-none border p-px border-gray-950/50" @click="onRessourcesClick">
                            <div class="inline-flex bg-gray-950/50 gap-2 p-1 group-hover:bg-gray-950/75 rounded">
                                <div class="flex items-center gap-1">
                                    <div class="text-sm font-semibold">{{ stoneCount }}</div>
                                    <div class="grid items-center">
                                        <IconStone class="w-4 h-4"></IconStone>
                                    </div>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="text-sm font-semibold">{{ woodCount }}</div>
                                    <div class="grid items-center">
                                        <IconWood class="w-4 h-4"></IconWood>
                                    </div>
                                </div>
                            </div>
                        </button>


                        <button class="group rounded select-none border p-px border-gray-950/50" @click="onPopulationClick">
                            <div class="inline-flex bg-gray-950/50 gap-2 p-1 group-hover:bg-gray-950/75 rounded">
                                <div class="flex items-center gap-1">
                                    <div class="text-sm font-semibold">{{ workerCount }}</div>
                                    <div class="grid items-center">
                                        <IconPerson class="w-4 h-4"></IconPerson>
                                    </div>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="text-sm font-semibold">{{ soldierCount }}</div>
                                    <div class="grid items-center">
                                        <IconRomanHelmet class="w-4 h-4"></IconRomanHelmet>
                                    </div>
                                </div>
                            </div>
                        </button>


                        <button class="group rounded select-none border p-px border-gray-950/50" @click="onBuildingClick">
                            <div class="inline-flex bg-gray-950/50 gap-2 p-1 group-hover:bg-gray-950/75 rounded">
                                <div class="flex items-center gap-1">
                                    <div class="text-sm font-semibold">{{ houseCount }}</div>
                                    <div class="grid items-center">
                                        <IconHouse class="w-4 h-4"></IconHouse>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div>
                        <div
                            class="inline-grid bg-gray-950/50 py-1 rounded px-2 font-bold justify-center items-center text-lg select-none">
                            {{ timerText }}</div>
                        <!--
                        <button class="group border border-gray-950/50 hover:border-gray-950/75 p-px rounded" @click="onSettingsClick">
                            <div class="bg-gray-950/50 group-hover:bg-gray-950/75 rounded p-1 grid justify-center items-center">
                                <IconSettings class="h-7 w-7"></IconSettings>
                            </div>
                        </button>
                         -->
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-[1fr_auto] justify-center p-2 max-w-6xl mx-auto" v-if="isPopupOpen">
                <div></div>
                <div class="bg-gray-950/50 p-2 rounded grid gap-2">
                    <div class="flex justify-between gap-2 items-center">
                        <div class="font-bold">{{ popupContentType }}</div>
                        <div class="grid items-center">
                            <button class="bg-gray-950/50 p-1 rounded hover:bg-gray-950/75" @click="closePopup">
                                <IconCross class="w-4 h-4"></IconCross>
                            </button>
                        </div>
                    </div>
                    <div class="max-h-72 overflow-auto popup-content p-2">
                        <div v-if="popupContentType == 'Statistics'">
                            <p class="w-60">Imagine some fancy statistics about the game here.</p>
                        </div>
                        <div v-if="popupContentType == 'Ressources'" class="flex flex-col divide-y">
                            <div v-for="ressource in ressources" :key="ressource.name"
                                class="flex justify-between px-2 py-1 text-sm font-semibold">
                                <div>{{ ressource.name }}</div>
                                <div>{{ ressource.count }}</div>
                            </div>
                        </div>
                        <div v-if="popupContentType == 'Population'" class="flex flex-col divide-y">
                            <div v-for="item in population" :key="item.name"
                                class="flex justify-between px-2 py-1 text-sm font-semibold">
                                <div>{{ item.name }}</div>
                                <div>{{ item.count }}</div>
                            </div>
                        </div>
                        <div v-if="popupContentType == 'Buildings'" class="grid gap-2">
                            <div>
                                <div class="pb-1">Village</div>
                                <div class="grid grid-cols-4 gap-2">
                                    <div class="w-10 h-10 bg-gray-800/50 hover:bg-gray-800/75 cursor-pointer grid justify-center items-center"
                                        v-for="building in buildings.filter(item => item.category == 'Village')"
                                        :key="building.name">
                                        <div class="font-semibold">{{ building.count }}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="pb-1">Production</div>
                                <div class="grid grid-cols-4 gap-2">
                                    <div class="w-10 h-10 bg-gray-800/50 hover:bg-gray-800/75 cursor-pointer grid justify-center items-center"
                                        v-for="building in buildings.filter(item => item.category == 'Production')"
                                        :key="building.name">
                                        <div class="font-semibold">{{ building.count }}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="pb-1">Military</div>
                                <div class="grid grid-cols-4 gap-2">
                                    <div class="w-10 h-10 bg-gray-800/50 hover:bg-gray-800/75 cursor-pointer grid justify-center items-center"
                                        v-for="building in buildings.filter(item => item.category == 'Military')"
                                        :key="building.name">
                                        <div class="font-semibold">{{ building.count }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <button class="group border border-gray-950/50 hover:border-gray-950/75 p-px rounded"
                            @click="onBuildingClick">
                            <div
                                class="bg-gray-950/50 group-hover:bg-gray-950/75 rounded p-1 grid justify-center items-center">
                                <IconHammer class="h-6 w-6"></IconHammer>
                            </div>
                        </button>
                        <button class="group border border-gray-950/50 hover:border-gray-950/75 p-px rounded"
                            @click="onStatisticClick">
                            <div
                                class="bg-gray-950/50 group-hover:bg-gray-950/75 rounded p-1 grid justify-center items-center">
                                <IconChart class="h-6 w-6"></IconChart>
                            </div>
                        </button>

                        <button class="group border border-gray-950/50 hover:border-gray-950/75 p-px rounded"
                            @click="onSettingsClick">
                            <div
                                class="bg-gray-950/50 group-hover:bg-gray-950/75 rounded p-1 grid justify-center items-center">
                                <!-- <IconSettings class="h-6 w-6"></IconSettings> -->
                                <IconExit class="h-6 w-6"></IconExit>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="grid justify-end gap-2">
                    <div class="text-sm text-right font-semibold select-none">
                        <div
                            class="text-green-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                            AdronTech: 523</div>
                        <div
                            class="text-red-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                            UltimateSpinDash: 434</div>
                        <div
                            class="text-blue-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                            Wenish: 361</div>
                        <div
                            class="text-yellow-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                            akamatsu: 321</div>
                        <div
                            class="text-orange-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                            Atvus (Kai): 311</div>
                        <div
                            class="text-white-500 [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                            Casjen: 295</div>
                    </div>
                    <Minimap></Minimap>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import IconExit from '../components/IconExit.vue';
import Minimap from '../components/Minimap.vue'
import { useRouter } from 'vue-router';
import IconHammer from '../components/IconHammer.vue';
import IconChart from '../components/IconChart.vue';
import IconStone from '../components/IconStone.vue';
import IconWood from '../components/IconWood.vue';
import IconPerson from '../components/IconPerson.vue';
import IconRomanHelmet from '../components/IconRomanHelmet.vue';
import IconHouse from '../components/IconHouse.vue';
import IconCross from '../components/IconCross.vue';

const router = useRouter()

const isPopupOpen = ref(false)

const popupContentType = ref<'Ressources' | 'Population' | 'Buildings' | 'Statistics'>('Ressources')

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

const houseCount = ref(7)

const onSettingsClick = () => {
    router.push('/modern/menu')
}

const onBuildingClick = () => {
    popupContentType.value = 'Buildings'
    openPopup()
}

const onPopulationClick = () => {
    popupContentType.value = 'Population'
    openPopup()
}

const onRessourcesClick = () => {
    popupContentType.value = 'Ressources'
    openPopup()
}

const onStatisticClick = () => {
    popupContentType.value = 'Statistics'
    openPopup()
}

const openPopup = () => {
    isPopupOpen.value = true
}

const closePopup = () => {
    isPopupOpen.value = false
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

const ressources = computed(() => {
    return [
        {
            name: 'Wood',
            count: woodCount.value
        },
        {
            name: 'Stone',
            count: stoneCount.value
        },
        {
            name: 'Planks',
            count: 12
        },
        {
            name: 'Water',
            count: 23
        },
        {
            name: 'Coal Ore',
            count: 5
        },
        {
            name: 'Silver Ore',
            count: 3
        },
        {
            name: 'Gold Ore',
            count: 2
        },
        {
            name: 'Silver Ingot',
            count: 7
        },
        {
            name: 'Gold Ingot',
            count: 4
        },
        {
            name: 'Bread',
            count: 6
        },
        {
            name: 'Meat',
            count: 3
        }
    ]
})

const population = computed(() => {
    return [
        {
            name: 'Worker',
            count: workerCount.value
        },
        {
            name: 'Shovelers',
            count: 5
        },
        {
            name: 'Builder',
            count: 7
        },
        {
            name: 'Swordsmen',
            count: 17
        },
        {
            name: 'Archer',
            count: 32
        },
        {
            name: 'Captain',
            count: 3
        }
    ]
})

const buildings = computed<{
    name: string,
    count: number,
    category: 'Village' | 'Production' | 'Military'
}[]>(() => {
    return [
        {
            name: "Lumberjack's hut",
            count: 3,
            category: 'Production'
        },
        {
            name: "Stone mason's hut",
            count: 2,
            category: 'Production'
        },
        {
            name: "Sawmill",
            count: 1,
            category: 'Production'
        },
        {
            name: "Forester's lodge",
            count: 2,
            category: 'Production'
        },
        {
            name: 'Fishing lodge',
            count: 0,
            category: 'Production'
        },
        {
            name: 'Cereal farm',
            count: 5,
            category: 'Production'
        },
        {
            name: 'Waterworks',
            count: 1,
            category: 'Production'
        },
        {
            name: 'Small house',
            count: 3,
            category: 'Village'

        },
        {
            name: 'Middle house',
            count: 1,
            category: 'Village'

        },
        {
            name: 'Large house',
            count: 0,
            category: 'Village'

        },
        {
            name: 'Barracks',
            count: 0,
            category: 'Military'

        },
        {
            name: 'Small Tower',
            count: 0,
            category: 'Military'

        },
        {
            name: 'Small Tower',
            count: 0,
            category: 'Military'

        },
        {
            name: 'Great Tower',
            count: 0,
            category: 'Military'

        },
        {
            name: 'Castle',
            count: 0,
            category: 'Military'

        }
    ]
})

function str_pad_left(string: string, pad: string, length: number) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}

function sleep(ms: number) { return new Promise((r) => setTimeout(r, ms)) };

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
</script>
<style scoped>.ingame-image {
    background-image: url(../assets/pop-ingame.png)
}

.popup-content::-webkit-scrollbar {
    @apply h-2 w-2 !important;
}

.popup-content::-webkit-scrollbar-track {
    @apply bg-slate-950/25;
}

.popup-content::-webkit-scrollbar-thumb {
    @apply bg-slate-950/75 hover:bg-slate-950 rounded-lg;
}</style>