<script lang="ts">
  import { page } from '$app/stores';


  const currentPage = $page.url.pathname;
  const pages = [
    {
      url: 'manifestar-interesse',
      title: 'Manifestar Interesse'
    },
    {
      url: 'mapa',
      title: 'Mapa'
    },
    {
      url: 'o-que-e',
      title: 'O que é?'
    },
    {
      url: 'faq',
      title: 'Perguntas Frequentes'
    },
    {
      url: 'casos-de-sucesso',
      title: 'Casos de Sucesso'
    }
  ].map((page) => {
    return {
      ...page,
      url: `/${page.url}`,
      active: currentPage.includes(page.url)
    };
  });

  const title = pages.find((page) => page.active)?.title;

</script>

<section class="relative h-screen bg-cover bg-center">
  <nav
    class="absolute left-0 top-0 flex w-full items-center justify-between bg-gray-800 bg-opacity-50 p-6"
  >
    <h1 class="text-2xl font-bold text-white">
      <a href="/">Quero Acolher</a>
    </h1>
    <ul class="flex space-x-4">
      {#each pages as { url, title }, i}
        <li>
          <a
            href={url}
            class="text-white hover:text-gray-300"
            class:selected={url === $page.url.pathname}
          >
            {title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="flex h-full items-center justify-center">
    <h1 class="text-5xl font-bold text-white">{title}</h1>
  </div>
</section>

<style>
  section {
    max-height: 400px;
    background-image: url('/imgs/drone-shot.jpg');
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.3);
  }

  nav {
    z-index: 10;
  }

  a {
    transition: color 0.3s;
  }

  a.selected {
    color: #fbbf24;
  }
</style>
