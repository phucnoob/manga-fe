<script lang="ts">
  import Router from "svelte-spa-router";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import routes from "./routes";
  import { getUrl } from "./stores";

  // Handle headerbar scroll transition
  let headerHeight = 0;
  let lastScollY = Number.NEGATIVE_INFINITY;
  let scrollY = 0;
  $: show = scrollY < headerHeight || scrollY < lastScollY; // Scroll up.
  function handleScroll() {
    lastScollY = scrollY;
    scrollY = window.scrollY;
  }
  // End handle headerbar scroll transition


  
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
