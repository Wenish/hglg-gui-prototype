<template>
    <div class="h-40 w-40">
        <div class="relative drop-shadow-lg select-none inline-block h-40 w-40">
            <div class="minimap-image bg-blue-400 h-40 w-40 rounded-lg bg-cover bg-center border-2 border-gray-100/50"></div>
            <div class="font-bold text-xs absolute top-1 left-0 grid justify-center w-full [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] opacity-75">N</div>
            <div class="font-bold text-xs absolute top-0 right-2 h-full grid items-center [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] opacity-75">O</div>
            <div class="font-bold text-xs absolute bottom-1 left-0 grid justify-center w-full [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] opacity-75">S</div>
            <div class="font-bold text-xs absolute top-0 left-2 h-full grid items-center [text-shadow:_0_0_7px_rgb(0_0_0_/_90%)] opacity-75">W</div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.minimap-image {
    background-image: url(../assets/minimap-minecraft.jpg)
}
</style>