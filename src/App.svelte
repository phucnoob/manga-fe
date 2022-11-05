<script>
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import Card from "./lib/Card.svelte";

  let headerHeight = 0;
  let lastScollY = Number.NEGATIVE_INFINITY;
  let scrollY = 0;
  $: show = scrollY < headerHeight * 5 || scrollY < lastScollY; // Scroll up.

  $: console.log(scrollY, headerHeight);
  function handleScroll() {
    lastScollY = scrollY;
    scrollY = window.scrollY;
  }

  const mangas = async () => {
    const response = await fetch("http://localhost:8080/api/v1/mangas/");
    const body = await response.json();
    if (body.success) {
      return body.data;
    } else {
      return null;
    }
  }
</script>

<Header bind:height={headerHeight} {show}/>
<main>
  {#await mangas()}
    <p>Loading......</p>
  {:then items}
    {#each items as item}
       <Card info={item} />
    {/each}
  {/await}
</main>
<svelte:window on:scroll={handleScroll}/>
<Footer />

<style>
  main {
    color: #06060e;
    padding-top: 4rem;
    min-height: 800px;
  }
</style>
