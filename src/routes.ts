import Home from "./views/Home.svelte";
import NotFound from "./views/Notfound.svelte"

const routes = {
    "/": Home,

    "*": NotFound
}

export default routes;