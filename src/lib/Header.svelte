
<script>
    export let show = true;
    export let height = 0;
</script>

<!-- Navbar -->
<header class:scrolled={!show} bind:clientHeight={height}>
    <div class="header-container">
        <img class="logo" alt="App logo" src="/logo.png">

        <div class="navbar">
            <div class="search-box">
                <input type="text" placeholder="Tìm kiếm" class="search-input">
                <button class="">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <a href="#" class="sign-in">Đăng nhập</a>
        </div>
    </div>
</header>


<style lang="postcss">
    header {
        position: fixed;
        @apply w-full bg-slate-800 flex justify-center h-12 transition-transform duration-[600ms];
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

    .search-box {
        @apply bg-[#2c3e50] flex grow p-1 px-4 ring-black outline-none h-7 rounded-[2rem] mx-2;
    }
    .search-input {
        @apply w-full outline-none bg-transparent;
    }


</style>
<!-- End Navbar -->