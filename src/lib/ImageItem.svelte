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
    <div class="flex flex-col grow p-1">
        <h4>{info.name}</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit excepturi dignissimos dolores iure qui pariatur, exercitationem, nesciunt repellendus expedita repellat voluptatem, temporibus possimus deleniti recusandae perspiciatis aspernatur asperiores. Unde?</p>
    </div>
</a>

<style lang="postcss">
    .card {
        @apply rounded flex grow h-[30%] w-full my-2 bg-[#34495e] brightness-100 overflow-y-hidden;
    }

    .card:hover {
        @apply brightness-75;
    }
    .card img {
        @apply rounded block h-full;
    }

    .card h4 {
        @apply text-sm text-justify text-slate-50 font-semibold;
    }

    .card p {
        @apply text-[10px]  text-justify text-blue-100 text-ellipsis overflow-hidden;
    }

</style>