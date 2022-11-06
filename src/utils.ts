export async function fetchMangaInfo(url: string){
    let response = await fetch(url);
    let mangas = await response.json();

    return mangas["data"];
};