<script>
    import {RouterLink} from 'vue-router'

    export default{
        data(){
            return {
                links:[
                    {name:'Erkek', slot:"erkek",href:"/erkek"},
                    {name:'Kadın', slot:"kadin",href:"/kadin"},
                    {name:'Aksesuar', slot:"aksesuar",href:"/aksesuar"},
                    {name:'Outdor', slot:"outdoor",href:"/outdoor"},
                    {name:'Outleet', slot:"outleet",href:"/outleet"},
                ]
            }
        }
    }
</script>
<template>
    <nav class="w-full h-20 flex items-center justify-around">
        <div class="text-3xl font-bold">VL Commerce</div>
        <ul class="flex gap-8 items-center">
            <router-link :to="link.slot" v-for="link in links" class="text-lg hover:text-red-500">{{ link.name }}</router-link>
            <router-link to="/basket">
                <div class="absolute bg-red-500 h-5 w-5 flex justify-center items-center text-xs rounded-full text-white ml-4 -mt-2">2</div>
                <img src="../../assets/card.png" alt="">
            </router-link>
        </ul>
    </nav>
</template>