<template>
    <router-link :to="to" class="button-menu text-2xl font-semibold bg-contain w-48 h-14 bg-center bg-no-repeat drop-shadow-lg hover:contrast-125 grid justify-center items-center">
        <div class="text-amber-300 hover:text-amber-400 drop-shadow-xl">
            <slot>Play</slot>
        </div>
    </router-link>
</template>
<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>
<style scoped>
.button-menu {
    background-image: url('../assets/woodenPlank_watercolor2.png');
}
</style>