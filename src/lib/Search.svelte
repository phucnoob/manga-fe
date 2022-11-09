<script lang="ts">
    import { getUrl } from "../stores";
    import { ajaxSearch, fetchMangaInfo } from "../utils";
    import ImageItem from "./ImageItem.svelte";
    let info = {
        id: 1,
        name: "Kubo-san wa Boku (Mobu) wo Yurusanai",
        cover: "https://cdn1.lhmanga.com/Store/Manga/60a46e52a2275_60a46e53008dd.jpg",
        description: ""
    };

    let searchStr = "";
    let searchBox: HTMLElement;
    let searchResult: Array<any> = [];
    let searchResultElement: HTMLElement;

    let search = async (term: string) => {
        const url = getUrl("/mangas/ajax/search", {name: term});
        return await ajaxSearch(url);
    }

    let updateSearchResult = async () => {
        setTimeout(async () => {

            searchResult = await search(searchStr);
        }, 200);
    }

    let handleKeydown = (event) => {
        if (event.key === "ArrowDown") {
            let firstResult = searchResultElement.firstElementChild as HTMLElement;
            firstResult.focus();
        }
    }

    let handleFocusNav = (event) => {
        let currentElement = event.target as HTMLElement;
        if (event.key === "ArrowDown") {
            let nextSibling = currentElement.nextElementSibling as HTMLElement;
            nextSibling?.focus();
        } else if (event.key === "ArrowUp") {
            let preSibling = currentElement.previousElementSibling as HTMLElement;
            preSibling?.focus();
        }
    }

    let clearOnLostFocus = (event) => {
        let focusWithin = searchBox.matches(":focus-within");

        if (!focusWithin) {
            searchStr = "";
        }
    }

</script>

<div class="search-box relative" bind:this={searchBox}>
    <input type="text" bind:value={searchStr} on:blur={clearOnLostFocus} on:keydown={handleKeydown} on:input={updateSearchResult} placeholder="Tìm kiếm" class="search-input">
    <button class="outline-none">
        <i class="fa-solid fa-magnifying-glass"></i>
    </button>

    <div class="search-result hidden"
        bind:this={searchResultElement}
        class:search-result-hidden={searchStr.length < 2}
        id="search-result">
        {#each searchResult as manga}
            <ImageItem on:keydown={handleFocusNav} on:blur={clearOnLostFocus} info={manga}></ImageItem>
        {:else}
            <p class="m-auto text-center">Không có kết quả</p>
        {/each}
    </div>
</div>


<style>
    .search-box {
        @apply bg-[#2c3e50] focus-within:ring-slate-900 ring-2 flex grow p-1 px-4 ring-transparent outline-none h-7 rounded-[2rem] mx-2;
    }
    .search-input {
        @apply w-full outline-none bg-transparent;
    }

    .search-box :global(.item) {
        @apply h-20 mt-1 border border-[#2d3436];
    }

    .search-result {
        @apply absolute w-96 hidden border border-[#193a5b] bg-[#43565b] p-[1px] rounded mt-2 left-0 top-full h-fit min-h-[10rem] max-h-80 overflow-y-auto;
    }

    .search-box:focus-within .search-result {
        @apply block;
    }

    .search-result-hidden {
        display: none !important;
    }
</style>