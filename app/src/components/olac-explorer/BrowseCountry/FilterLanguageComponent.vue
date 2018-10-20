<template>
    <div class="row my-2">
        <div class="col">
            <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Hide Language</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dynamicTags: ["Tag 1", "Tag 2", "Tag 3"],
            inputVisible: false,
            inputValue: ""
        };
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = "";
        }
    }
};
</script>

<style lang="scss" scoped>
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}
</style>
