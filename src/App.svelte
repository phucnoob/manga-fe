<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import Card from "./lib/Card.svelte";
  import Section from "./lib/Section.svelte";
  import Router from "svelte-spa-router"
  import routes from "./routes"

  let headerHeight = 0;
  let lastScollY = Number.NEGATIVE_INFINITY;
  let scrollY = 0;
  $: show = scrollY < headerHeight || scrollY < lastScollY; // Scroll up.

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
<svelte:window on:scroll={handleScroll}/>

<Header bind:height={headerHeight} {show}/>

<Section>
  <div>
    <Router {routes} />
  </div>
</Section>

<Footer />

<style>
</style>
