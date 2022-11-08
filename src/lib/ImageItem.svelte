<script lang="ts">
    interface Manga {
        id: number,
        name: string,
        cover: string,
        description: string
    }

    export let info: Manga;
</script>


<a href="#/manga/:id" on:keydown on:blur class="item">
    <img src={info.cover} alt={info.name}>
    <div class="flex flex-col grow px-1">
        <h4>{info.name}</h4>
        <p>{info.description}</p>
    </div>
</a>

<style lang="postcss">
    .item {
        @apply rounded flex grow h-[30%] w-full first:mt-0 mt-1 bg-[#34495e] brightness-100 overflow-y-hidden;
    }


    .item:hover, .item:focus {
        @apply brightness-75;
    }
    .item img {
        @apply rounded block h-full;
    }

    .item h4 {
        @apply text-sm text-justify text-slate-50 font-semibold;
    }

    .item p {
        @apply text-[10px]  text-justify text-blue-100 text-ellipsis overflow-hidden;
    }

</style>