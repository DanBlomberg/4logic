<script>
  export let text = "Animated Gradient Text";
  
  let characters = text.split('');
  let spans;
  
  $: if (spans) {
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });
  }
</script>

<div class="gradient-text">
  {#each characters as char, i}
    <span bind:this={spans ? spans[i] : null}>{char}</span>
  {/each}
</div>

<style>
  .gradient-text {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 50%, #ffa07a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  
  span {
    display: inline-block;
    opacity: 0;
    transform: translateY(1em);
    animation: fadeInUp 0.5s ease forwards;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
