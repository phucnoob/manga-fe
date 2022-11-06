<script lang="ts">
    import Card from "../lib/Card.svelte";
    import ImageItem from "../lib/ImageItem.svelte";
    import Section from "../lib/Section.svelte";
    import { fetchMangaInfo } from "../utils";

    let info = {
        id: 1,
        name: "Kubo-san wa Boku (Mobu) wo Yurusanai",
        cover: "https://cdn1.lhmanga.com/Store/Manga/60a46e52a2275_60a46e53008dd.jpg"
    };

    let popularMangas = async () => {
        return await fetchMangaInfo("http://localhost:8080/api/v1/mangas/popular");
    }

    let recentMangas = async () => {
        return await fetchMangaInfo("http://localhost:8080/api/v1/mangas");
    }

</script>
<Section>
    <svelte:fragment slot="title">
        Phổ biến
    </svelte:fragment>

    <svelte:fragment slot="content">
        <div class="hot">
            <div class="flex w-full h-80 p-2 justify-between">
                {#await popularMangas() then mangas }
                    {#each mangas as manga }
                        <Card info={manga} />
                    {/each}
                {/await}
            </div>
        </div>
    </svelte:fragment>
</Section>
<div class="w-full h-4"></div>

<div class="recent-update flex">
    <Section>
        <svelte:fragment slot="title">
            Mới cập nhật
        </svelte:fragment>

        <svelte:fragment slot="content">
            <div class="rounded w-full flex justify-between">
                <div class="flex flex-wrap gap-4 w-full h-fit p-2 justify-between">
                    {#await recentMangas() then mangas }
                        {#each mangas as manga }
                            <Card info={manga} />
                        {/each}
                    {/await}
                </div>
            </div>
        </svelte:fragment>
    </Section>

    <div class="w-1/2 ml-4 rounded h-full">
        <div class="history h-full">
            <Section>
                <svelte:fragment slot="title">Lịch sử đọc truyện</svelte:fragment>
                <svelte:fragment slot="content">
                    <div class="h-72 py-1 pb-2 my-1">
                        <ImageItem {info}></ImageItem>
                        <ImageItem {info}></ImageItem>
                        <ImageItem {info}></ImageItem>
                    </div>
                </svelte:fragment>
            </Section>
        </div>
    </div>
</div>


<style lang="postcss">
    .hot :global(.card) {
        @apply w-56 h-72;
    }

    .recent-update :global(.card) {
        @apply w-28 h-36;
    }

    .recent-update :global(.card p) {
        @apply text-xs;
    }

    .history :global(.card) {
        
    }
</style>