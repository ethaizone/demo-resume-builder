<template>
  <div class="md:col-span-4">
    <label for="firstName">First Name</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.firstName"
      required
    />
  </div>

  <div class="md:col-span-4">
    <label for="lastName">Last Name</label>
    <input
      type="text"
      name="lastName"
      id="lastName"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.lastName"
      required
    />
  </div>

  <div class="md:col-span-4">
    <label for="email">Email Address</label>
    <input
      type="text"
      name="email"
      id="email"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.email"
      required
    />
  </div>

  <div class="md:col-span-4">
    <label for="phone">Phone Number</label>
    <input
      type="text"
      name="phone"
      id="phone"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.phoneNumber"
    />
  </div>

  <div class="md:col-span-8">
    <label for="phone">Address</label>
    <input
      type="text"
      name="address"
      id="address"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.address"
    />
  </div>

  <div class="md:col-span-8">
    <label for="linkedin">Linkedin</label>
    <input
      type="text"
      name="linkedin"
      id="linkedin"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.linkedin"
    />
  </div>
  <div class="md:col-span-8">
    <label for="description">Description</label>
    <input
      type="text"
      name="description"
      id="description"
      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      v-model="resumeForm.description"
    />
  </div>
</template>

<script setup lang="ts">
import { useResumeForm } from '@/stores/resumeForm'

const { resumeForm } = useResumeForm()
</script>
