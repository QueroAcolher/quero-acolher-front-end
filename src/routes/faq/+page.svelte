<script>
  import Nav from '$components/Nav.svelte';
  import FaqItem from '$components/FaqItem.svelte';
  import FaqData from '../../lib/locale/faq_en.json';
</script>

<Nav />
<section class="p-8">
  <h1 class="text-4x1 mb-12 text-center font-bold">Frequently Asked Questions</h1>
  <div class="max-w-3x1 mx-auto">
    {#each FaqData as item}
      <FaqItem question={item.question} answer={item.answer} />
    {/each}
  </div>
</section>
