<script>
    import axios from 'axios';
import FilePreview from './FilePreview.vue';

    export default {
        name: "FormNews",
        data() {
            return {
                title: "",
                text: "",
                publication_time: "",
                image: ""
            }
        },
        methods: {
            submitForm() {
                const newsData = {
                    title: this.title,
                    text: this.text,
                    publication_time: this.publication_time,
                    image: this.image
                };

                axios.post("/admin/submit", newsData).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            },
            captureImage(file) {
                this.image = file;
            },
        },
        components: {
            FilePreview,
        },
    };
</script>
<template>
    
        <div class="mb-3">
            <label for="title" class="form-label">Оглавление</label>
            <input type="text" class="form-control" v-model="title">
        </div>

        <div class="mb-3">
            <label for="text" class="form-label">Текст</label>
            <input type="text" class="form-control" v-model="text">
        </div>
        
        <div class="mb-3">
            <label for="publication_time" class="form-label">Время публикации</label>
            <input type="datetime-local" class="form-control" v-model="publication_time">
        </div>

        <FilePreview @send-file="captureImage"/>

        <div class="container px-4">
            <div class="row 5 gx-5">
                <div class="col">
                    <button class="btn btn-primary" @click="submitForm">Создать</button>
                </div>
                <div class="col">
                    <button class="btn btn-primary">Опубликовать</button>
                </div>
            </div>
        </div>

</template>
<style>
</style>