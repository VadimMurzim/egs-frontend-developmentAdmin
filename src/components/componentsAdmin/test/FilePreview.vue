<script>
export default {
    name: "FilePreview",
    data() {
        return {
            file: "",
            showPreview: false,
            imagePreview: ""
        }
    },
    methods: {
        handleFileUpload() {
            
            this.file = this.$refs.file.files[0]

            let reader = new FileReader()

            reader.addEventListener("load", function () {
                this.showPreview = true
                this.imagePreview = reader.result
                
            }.bind(this), false)

            if( this.file) {
                if ( /\.(jpe?g|png|gif)$/i.test(this.file.name)) {
                    reader.readAsDataURL(this.file)
                }
            }
        },
        
        sendFileToForm() {
            this.$emit("send-file", this.file);
        }
    },
    mounted() {
        this.sendFileToForm();
    }
};
</script>
<template>
    <div class="container">
        <div class="large-12 medium-12 small-12 cell">
            <label>File Preview
                <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
            </label>
            <img v-bind:src="imagePreview" v-show="showPreview"/>
        </div>
    </div>
</template>
<style>
</style>