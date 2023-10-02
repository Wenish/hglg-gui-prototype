<template>
    <div class="ingame-image h-full w-full bg-cover bg-center bg-no-repeat relative">
        <!-- Top Bar -->
        <div class="absolute w-full">
            <div class="grid grid-cols-[1fr_1fr_1fr] justify-center p-2 max-w-6xl mx-auto">
                <div></div>
                <div class="grid justify-center">
                    <div class="inline-grid bg-black/50 py-0.5 px-2 font-bold justify-center items-center text-lg select-none">04:23</div>
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
                <div class="grid justify-end">
                    <Minimap></Minimap>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import IconSettings from '../components/IconSettings.vue';
import Minimap from '../components/Minimap.vue'


</script>
<style scoped>
.ingame-image {
    background-image: url(../assets/pop-ingame.png)
}
</style>