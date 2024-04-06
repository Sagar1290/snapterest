const Header = () => {
  return (
    <header class="sticky top-0 z-50 mx-7 flex max-lg:flex-col justify-between py-6 border-b gap-2 border-white/60 pointer-events-auto">
      <div class="whitespace-nowrap">
        <h1 class="font-bold inline align-middle">CSS-Only Carousels</h1>
        <a
          title="Read the article"
          href="https://tympanus.net/codrops/?p=75188"
        >
          <svg
            class="h-3 ml-0.5 inline-block align-middle"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.00006 0.25H11.7501V11H10.2501V2.81066L1.53039 11.5303L0.469727 10.4697L9.1894 1.75H1.00006V0.25Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <nav class="flex items-center gap-10">
        <a href="index.html" aria-current="page">
          Demo 1
        </a>
        <a href="index2.html">Demo 2</a>
        <a href="index3.html">Demo 3</a>
      </nav>
    </header>
  );
};

export default Header;
