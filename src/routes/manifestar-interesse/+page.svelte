<script lang="ts">
  import Nav from '$components/Nav.svelte';
  import { PUBLIC_FORM_ENDPOINT } from '$env/static/public';
  import { language, t } from '$lib/locale';
  // import '@hcaptcha/vanilla-hcaptcha';
  import { onMount } from 'svelte';

  interface HCaptchaEvent extends Event {
    token: string;
  }

  let token: string;

  onMount(() => {
    const signupCaptcha = document.getElementById('signupCaptcha');
    if (signupCaptcha) {
      signupCaptcha.addEventListener('verified', (e) => {
        token = (e as HCaptchaEvent).token;
      });
      signupCaptcha.addEventListener('error', (e) => {
        console.log('error event', { error: e.error });
      });
    }
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('h-captcha-response', token);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData
    });

    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Form submission failed');
    }
  }
</script>

<Nav />

<div class="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
  <form
    on:submit={handleSubmit}
    action={PUBLIC_FORM_ENDPOINT}
    method="POST"
    enctype="multipart/form-data"
    class="space-y-4"
  >
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700"
        >{t($language).form.labels.name}</label
      >
      <input
        type="text"
        id="name"
        name="name"
        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700"
        >{t($language).form.labels.email}</label
      >
      <input
        type="email"
        id="email"
        name="email"
        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label for="dob" class="block text-sm font-medium text-gray-700"
        >{t($language).form.labels.dob}</label
      >
      <input
        type="date"
        id="dob"
        name="dob"
        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700"
        >{t($language).form.labels.phone}</label
      >
      <input
        type="tel"
        id="phone"
        name="phone"
        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700"
        >{t($language).form.labels.message}</label
      >
      <textarea
        id="message"
        name="message"
        rows="4"
        class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      ></textarea>
    </div>

    <div class="flex justify-center">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <h-captcha
        id="signupCaptcha"
        site-key="4c26b52c-1e4c-4dd2-92aa-ed2c8084cd58"
        size="normal"
        tabindex="0"
      ></h-captcha>
    </div>

    <div>
      <button
        type="submit"
        class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >{t($language).form.submit}</button
      >
    </div>
  </form>
</div>
