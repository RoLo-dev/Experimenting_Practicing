<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <slot>
                <h3>Hello World</h3>
            </slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    methods: {
        closeModal() {
            this.$emit("close")
        }
    }
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
    .modal h1 {
        margin-bottom: 2rem;
        color: firebrick;
    }
</style>