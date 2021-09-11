<template>
    <gest-layout>
        <v-row justify="center">
            <v-col cols="12" md="5">
                <form @submit.prevent="submit">
                    <v-card elevation="10">
                        <v-card-title>
                            <v-row align-content="center">
                                <v-col>
                                    <h1 class="text-center my-10">Ingresar</h1>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <jet-validation-errors class="mb-4" />
                                    <div v-if="status">
                                        {{ status }}
                                    </div>

                                    <v-text-field label="Usuario" type="text" v-model="form.username" required autofocus outlined />

                                    <v-text-field label="Contraseña" type="password" v-model="form.password" required autocomplete="current-password" outlined />

                                    <v-checkbox label="Recuerdame" v-model="form.remember"></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="text-right">
                                    <v-btn type="submit" color="primary" :disabled="form.processing" :loading="form.processing">Ingresar</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </form>
            </v-col>
        </v-row>
    </gest-layout>
</template>

<script>
    import GestLayout from '@/Layouts/GestLayout'
    import JetValidationErrors from '@/Jetstream/ValidationErrors'

    export default {
        components: {
            GestLayout,
            JetValidationErrors,
        },

        props: {
            canResetPassword: Boolean,
            status: String
        },

        data() {
            return {
                form: this.$inertia.form({
                    username: '',
                    password: '',
                    remember: false
                })
            }
        },

        methods: {
            submit() {
                this.form
                    .transform(data => ({
                        ... data,
                        remember: this.form.remember ? 'on' : ''
                    }))
                    .post(this.route('login'), {
                        onFinish: () => this.form.reset('password'),
                    })
            }
        }
    }
</script>
