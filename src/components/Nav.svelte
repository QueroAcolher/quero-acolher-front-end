<script lang="ts">
  import { page } from '$app/stores';

  import { language, t } from '../lib/locale';

  const currentPage = $page.url.pathname;
  let pages = [];
  $: pages = [
    {
      url: 'manifestar-interesse',
      title: t($language).nav.links.manifestarInteresse
    },
    {
      url: 'mapa',
      title: t($language).nav.links.mapa
    },
    {
      url: 'o-que-e',
      title: t($language).nav.links.oQueE
    },
    {
      url: 'faq',
      title: t($language).nav.links.faq
    },
    {
      url: 'casos-de-sucesso',
      title: t($language).nav.links.casosDeSucesso
    }
  ].map((page) => {
    return {
      ...page,
      url: `/${page.url}`,
      active: currentPage.includes(page.url)
    };
  });

  const title = pages.find((page) => page.active)?.title || t($language).nomeDoSite;

  const changeLanguage = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value as 'en' | 'pt' | undefined;
    $language = value || 'pt';
  };
</script>

<section class="relative h-screen bg-cover bg-center">
  <nav
    class="absolute left-0 top-0 flex w-full items-center justify-between bg-gray-800 bg-opacity-50 p-6"
  >
    <h1 class="text-2xl font-bold text-white">
      <a href="/">{t($language).nomeDoSite}</a>
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
    <div class="relative">
      <select
        class="block w-full appearance-none rounded border border-gray-700 bg-gray-800 px-4 py-2 pr-8 leading-tight text-white hover:border-gray-500 focus:border-gray-500 focus:bg-gray-700 focus:outline-none"
        on:change={changeLanguage}
        bind:value={$language}
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </div>
  </nav>

  <div class="flex h-full items-center justify-center">
    <h1 class="text-5xl font-bold text-white">{title}</h1>
  </div>
</section>

<style>
  section {
    max-height: 400px;
    background-image: url('/imgs/Illustration.svg');
    background-size: contain;
    background-repeat: no-repeat;
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
