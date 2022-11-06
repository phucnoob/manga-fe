<script lang="ts">
    interface Manga {
        id: number,
        name: string,
        cover: string
    }

    export let info: Manga;
</script>


<a href="#/manga/:id" class="card">
    <img src={info.cover} alt={info.name}>
    <p>{info.name}</p>
</a>

<style>
    .card {
        @apply rounded bg-[#34495e] brightness-100 overflow-y-hidden relative;
    }

    .card:hover {
        @apply brightness-75;
    }
    .card img {
        @apply rounded object-contain block;
    }

    .card p {
        @apply absolute translate-y-full bottom-0 mx-auto w-full text-center text-blue-50 bg-slate-600 bg-opacity-70 border-slate-700 rounded;
    }

    .card:hover p {
        @apply translate-y-0 transition-transform ease-in-out;
    }
</style>