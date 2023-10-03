<template>
    <div class="bg-slate-950 h-screen w-screen max-h-screen overflow-hidden text-white grid grid-rows-[auto_1fr]">
        <div class="grid justify-center py-2">
            <div class="flex gap-2">
                <button
                    class="bg-blue-950 py-1 px-2 hover:bg-blue-900 text-sm font-bold rounded-md"
                    v-for="screenSize in screenSizes"
                    @click="setCurrentScreenSize({ width: screenSize.width, height: screenSize.height })"
                    :key="screenSize.name"
                >{{ screenSize.name }}</button>
            </div>
        </div>
        <div class="grid items-center">
            <div class="grid justify-center overflow-auto">
                <main 
                    class="bg-black border-black border-[12px] rounded-md"
                    :style="{ width: currentScreenSizeStyles.width, height: currentScreenSizeStyles.height}" >
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const screenSizes = ref([
    {
        name: 'Full HD (16:9)',
        width: 1920,
        height: 1080
    },
    {
        name: 'Wide (21:9)',
        width: 2560,
        height: 1080
    },
    {
        name: 'Small (16:9)',
        width: 1366,
        height: 768
    },
    {
        name: 'Small (4:3)',
        width: 1024,
        height: 768
    }
])

const setCurrentScreenSize = (value: { width: number, height: number}) => {
    currentScreenSize.value = value
}

const currentScreenSize = ref({
    width: 1920,
    height: 1080
})

const currentScreenSizeStyles = computed(() => {
    return {
        width: `${currentScreenSize.value.width}px`,
        height: `${currentScreenSize.value.height}px`
    }
})
</script>