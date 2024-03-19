<template>
    <div class="wrapper">

        <div class="photo">
            <img src="@/assets/profile.jpg" alt="Michael Salmas Profile" />
        </div>
        <div class="name">
            Michael Salmas
        </div>
        <div class="title">
            Software Engineer
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;
}

.photo {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
}

.name {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.title {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-weight: lighter;
}
</style>