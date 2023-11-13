<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body" v-for="name in names" :key="name">
                        {{name}}
                    </div>
                    <div>
                        <input type="text" v-model="text">
                        <div v-if="text.length < 5">
                            <p class="text-current">Не менее 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                names: ["Денис", "Арина", "Сергей"],
                text: "",
            }
        },
    }
</script>
