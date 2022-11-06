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

<div class="container mx-auto mt-16 mb-4 min-h-screen rounded">
  <Router {routes} />
</div>

<Footer/>

<a href="#" class="to-header border-[#222f3e] py-1 px-1 bg-[#b2bec3] hover:bg-[#2d3436] transition-colors text-blue-50 bg-opacity-20 border rounded fixed right-12 bottom-1">
  <i class="fas fa-angle-double-up"></i>
</a>

<style>
</style>
