<script>
  export let question;
  export let answer;
</script>

<div class="faq-item mb-6 border-b border-gray-300 pb-4">
  <h2 class="mb-2 text-lg font-bold">{question}</h2>
  <p class="text-gray-700">{@html answer}</p>
</div>
