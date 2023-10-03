<template>
    <div class="h-full w-full image-wallpaper-cave bg-cover bg-center grid justify-center relative">
        <div class="p-8 flex flex-col gap-2">

            <img src="../assets/ColoniaPrimaTitel.png" class="w-full max-w-6xl py-8 opacity-50 blur-[1px] rounded-lg" />
            <div class="flex flex-col gap-2">
                <router-link
                    to="/modern/loading"
                    class="bg-gray-950/50 w-48 font-bold text-2xl hover:bg-gray-950/70 p-2 group backdrop-blur-sm"
                >
                    <div class="pl-2 group-hover:pl-6 transition-all duration-200">Play</div>
                </router-link>
                <router-link
                    to="/modern/loading"
                    class="bg-gray-950/50 w-48 font-bold text-2xl hover:bg-gray-950/70 px-2 py-1 group backdrop-blur-sm"
                >
                    <div class="pl-2 group-hover:pl-6 transition-all duration-200">Settings</div>
                </router-link>
                <router-link
                    to="/modern/loading"
                    class="bg-gray-950/50 w-48 font-bold text-2xl hover:bg-gray-950/70 px-2 py-1 group backdrop-blur-sm"
                >
                    <div class="pl-2 group-hover:pl-6 transition-all duration-200">Credits</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.image-wallpaper-cave {
    background-image: url('../assets/wallpaper_menu_watercolor.png');
}
</style>