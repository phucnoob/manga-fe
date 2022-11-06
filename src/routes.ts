import HomeSvelte from "./views/Home.svelte";
import MangaSvelte from "./views/Manga.svelte";
import Notfound from "./views/Notfound.svelte";

const routes = {
    "/": HomeSvelte,
    "/manga/:id": MangaSvelte,

    "*": Notfound
}

export default routes;