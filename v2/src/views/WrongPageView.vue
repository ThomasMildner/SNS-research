<template>
    <div id="wrong-page-view" class="full-padding">
        <div class="text-view scroll-style top-bottom-padding">
            <h1 class="title">Something went wrong!</h1>
            <p>Start the study by scanning the QR code or entering the provided URL.</p>
        </div>
    </div>
</template>

<style scoped>
#end-view {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.text-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 4rem;
}

.title {
    font-size: 2.5rem;
}
</style>