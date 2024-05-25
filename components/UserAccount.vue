<template>
  <Card v-if="createAccount">
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl">
        Manager System
      </CardTitle>
      <CardDescription>
        Enter your email below to create your account
      </CardDescription>
    </CardHeader>
    
    <CardContent class="grid gap-4">
      <div v-if="errorMessages" class="bg-red-200 text-red-500 rounded p-3 border-red-500 text-xs">{{ errorMessages }}</div>
      <!-- <div>
        <Button class="w-full" variant="outline" @click="signInWithGoogle">
          <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
            <path
              fill="currentColor"
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            />
          </svg>
          Google
        </Button>
      </div> -->
      <!-- <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div> -->
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" v-model="form.email" />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <div class="flex items-center m-1">
          <Input id="password" :type="showPass ? 'password' : 'text'" v-model="form.password" />
          <Eye v-if="showPass" @click="showPass = !showPass" class="cursor-pointer"></Eye>
          <EyeOff v-else @click="showPass = !showPass" class="cursor-pointer"></EyeOff>
        </div>
      </div>
      <div class="flex justify-end">
        <p class="text-xs underline cursor-pointer" @click="changeView">Esqueci minha senha</p>
      </div>
    </CardContent>
    <CardFooter class="flex flex-col gap-2">
      <Button class="w-full bg-green-400 hover:bg-green-500" @click="signInWithEmailAndPass">
        LogIn
      </Button>
      <Button class="w-full text-gray-600 hover:text-white bg-white hover:bg-green-400" @click="signInWithEmailAndPass">
        Quero fazer parte
      </Button>
    </CardFooter>
  </Card>
  <Card v-else>
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl">
        Create account
      </CardTitle>
      <CardDescription>
        Enter your email below to create your account
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div v-if="errorMessages" class="bg-red-200 text-red-500 rounded p-3 border-red-500 text-xs">{{ errorMessages }}</div>
      <div class="grid gap-2">
        <Label for="name">Name</Label>
        <Input id="name" type="name" placeholder="Joe Doe" v-model="form.name" />
      </div>
      <div class="grid gap-2">
        <Label for="phone">Phone</Label>
        <Input id="phone" type="phone" placeholder="(xx) xxxxx-xxxx" v-model="form.phone" />
      </div>
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" v-model="form.email" />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <div class="flex items-center m-1">
          <Input id="password" :type="showPass ? 'password' : 'text'" v-model="form.password" />
          <Eye v-if="showPass" @click="showPass = !showPass" class="cursor-pointer"></Eye>
          <EyeOff v-else @click="showPass = !showPass" class="cursor-pointer"></EyeOff>
        </div>
      </div>
      <div class="flex justify-end cursor-pointer" @click="changeView">
        <p class="text-xs underline">Create account</p>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full" @click="signInWithEmailAndPass">
        Create account
      </Button>
    </CardFooter>
  </Card>
</template>
<script setup lang="ts">
import { Eye, EyeOff } from 'lucide-vue-next';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   getAuth
// } from 'firebase/auth'

const createAccount = ref(true)
const showPass = ref(true)

const form = ref({
  name: '',
  phone: '',
  email: '',
  password: ''
})

const emit = defineEmits(['changeViewEvent'])

const errorMessages = ref()

// const {auth} = useFirebaseClient()

// function create() {
//   createUserWithEmailAndPassword(auth, form.value.email, form.value.password)
//     .then((user) => {
//       console.log(user.user?.accessToken)
//       navigateTo('/home')
//     })
//     .catch((e) => {
//       console.log(e);
//       navigateTo('/')
//     })
// }

// const signInWithEmailAndPass = () => {
//   signInWithEmailAndPassword(auth, form.value.email, form.value.password)
//   .then((user) => {
//       console.log(user.user?.accessToken)
//       navigateTo('/home')
//     })
//     .catch((e) => {
//       errorMessages.value = 'Crendenciais inválidas, tente novamente!'
//       navigateTo('/')
//     })
// }

//  const signInWithGoogle = () => {
//    const provider = new GoogleAuthProvider()
//    signInWithPopup(getAuth(), provider)
//     .then((result) => {
//       console.log(result.user)
//       navigateTo('/home')
//     })
//     .catch((error) => {

//     })
//  }

 const changeView = () => {
  emit('changeViewEvent', false)
  createAccount.value = !createAccount.value
 }

</script>
