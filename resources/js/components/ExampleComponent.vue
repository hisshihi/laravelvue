<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body" v-for="name in names" :key="name">
                        {{ name }}
                    </div>
                    <div>
                        <input v-bind:class="{ 'text-red-400': minLength() }" type="text" v-model="text">
                        <div v-if="text.length < 5">
                            <p class="text-current">Не менее 5</p>
                        </div>
                        <div v-else>
                            <button style="background-color: white;" type="button"
                                    class="rounded-md pt-4 pb-4 pr-6 pl-6 mt-6 drop-shadow-2xl hover:text-red-400">
                                Submit
                            </button>
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
            border: 'text-red-400',
        }
    },
    methods: {
        minLength() {
            if (this.text.length < 5) {
                return true
            }
        }
    }
}
</script>
