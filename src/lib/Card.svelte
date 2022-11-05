<script>
    export let info = {
        id: 0,
        name: "",
        cover: ""
    };
</script>


<a href="#" class="block">
    <img src={info.cover} alt={info.name}>
    <p>{info.name}</p>
</a>

<style>

</style>