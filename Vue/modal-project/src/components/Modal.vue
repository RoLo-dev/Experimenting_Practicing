<template>
    <div class="backdrop">
        <div class="modal">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [ "header", "text" ]
}
</script>

<style>
    .modal {
        width: 500px;
        padding: 30px;
        margin: 100px auto;
        background: #fff;
        border-radius: 12px;
        text-align: center;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
</style>