<template>
    <div class="main">
        <div class="header">header</div>
        <div class="contentContainer">
            <div class="left">left</div>
            <div class="content">Content</div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang="scss">
    .main {
        height: 100%;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        $header-height: 6%;
        .header {
            height: $header-height;
            border: 1px solid black;
        }
        .contentContainer {
            display: flex;
            flex-direction: row;
            height: calc(100% - #{$header-height});
            $left-width: 6%;
            .left {
                width: $left-width;
                border: 1px solid black;
            }
            .content {
                width: calc(100% - #{$left-width});
                border: 1px solid black;
            }
        }
    }
</style>