<script lang="js">
    import Navbar from './components/Navbar.vue'
    export default{
        components:{
            Navbar
        },
        data(){

        },
        methods:{
            setHeart(id){
                
            }
        }
    }
</script>
<template>
    <Navbar></Navbar>
    <section class="w-full h-section justify-center">
        <div class="w-10/12 mx-auto flex h-full py-12">
            <div class="w-5/12 h-full flex flex-col justify-center items-start gap-12">
                <h1 class="text-6xl font-bold flex flex-col gap-6">
                    <b><span class="text-[#42b883]">Vue</span> & <span class="text-red-500">Laravel</span></b>
                    <span>Popüler E-Ticaret Sitesi</span>
                </h1>
                <h3 class="text-xl w-10/12 text-gray-400">
                    <b>Vue</b> & <b>Laravel</b> ile yapılmış bir deneme web sitesidir. Back-End'de Laravel, Front-End'de VueJs kullandığım <u>deneme</u> web sitesidir. Fikirlerinizi <a href="https://www.linkedin.com/in/hasan-basri-b10b6b1ba/" target="_blank" class="text-gray-600">linkedin</a> hesabımdan bana yazarak bildirebilirsiniz 
                </h3>
                <button class="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 text-lg">Hemen Satın Al</button>
            </div>
            <div class="w-7/12 h-full flex justify-end items-center">
                <img src="../assets/wall.png" class="w-[45em]" alt="">
            </div>
        </div>
    </section>
    <section class="w-full">
        <div class="w-10/12 mx-auto flex flex-col h-full py-4">
            <h3 class="text-2xl font-black">Popüler Ürünler</h3>
            <div class="w-full flex grid grid-cols-5 grid-flow-row gap-4 mt-6 group">
                <div class="border cursor-pointer h-card group/card">
                    <div class="w-12 h-12 transition opacity-0 duration-300 flex justify-center items-center ease-in-out absolute mt-4 ml-4 group-hover/card:opacity-90">
                        <img src="../assets/icons/heart.png" @click="setHeart(this)" alt="">
                    </div>
                    <div class="w-12 h-12 transition opacity-0 duration-300 ease-in-out flex justify-center items-center absolute mt-20 ml-4 group-hover/card:opacity-90">
                        <img src="../assets/card.png" alt="">
                    </div>

                    <div class="h-card_image p-2">
                        <img src="../assets/product.jpg" class="h-full w-full" alt="">
                    </div>
                    <div class="h-card_title text-2xl flex items-center justify-center">
                        Kırmızı kol saati
                    </div>
                    <div class="h-card_price flex justify-around items-center">
                        <span class="text-xl font-bold text-green-400">3125 ₺</span>
                        <span class="flex gap-1">
                            <img src="../assets/icons/star.png" alt="">
                            <img src="../assets/icons/star.png" alt="">
                            <img src="../assets/icons/star.png" alt="">
                            <img src="../assets/icons/star-empty.png" alt="">
                            <img src="../assets/icons/star-empty.png" alt="">
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
        <br><br><br><br><br><br><br><br><br><br>
    </section>
</template>