
<script>
    import Search from "./Search.svelte";

    export let show = true;
    export let height = 0;
</script>

<!-- Navbar -->
<header class:scrolled={!show} bind:clientHeight={height}>
    <div class="header-container">
        <a href="#/"><img class="logo" alt="App logo" src="/logo.png"></a>

        <div class="navbar">
            <Search></Search>
            <a href="#" class="sign-in">Đăng nhập</a>
        </div>
    </div>
</header>


<style lang="postcss">
    header {
        @apply w-full z-10 bg-slate-800 fixed top-0 flex justify-center h-12 transition-transform duration-[600ms];
    }

    .scrolled {
        transform: translate(0,calc(-100% - 1rem));
    }

    .sign-in,
    .sign-up {
        @apply font-semibold h-full hover:text-gray-500;
    }

    .header-container {
        @apply container flex items-center justify-between;
    }
    .logo {
        @apply rounded cursor-pointer h-10 px-4 block bg-[#40739e];
    }

    .navbar {
        @apply text-sm py-2 flex justify-between items-center w-1/3 text-stone-100;
    }
</style>
<!-- End Navbar -->