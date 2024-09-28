<script>
  import Nav from '$components/Nav.svelte';
  import { language, t } from '$lib/locale';
</script>

<Nav />

<div class="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
  <form action="" class="space-y-4">
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

    <div>
      <button
        type="submit"
        class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >{t($language).form.submit}</button
      >
    </div>
  </form>
</div>
