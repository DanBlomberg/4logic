<svelte:head>
  <title>**Hanson Custom Painting</title>
</svelte:head>

<script>
import { Gallery } from 'flowbite-svelte';

const images1 = [
  { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
  { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
  { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' }
];
const images2 = [
  { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
  { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
  { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' }
];
const images3 = [
  { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
  { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
  { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' }
];
const images4 = [
  { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
  { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg' },
  { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
];
</script>


<h1>Hanson Custom paiting Gallery</h1>
<div style:background-color="gray">
  <Gallery class="gap-4 border-r-slate-800 grid-cols-2 md:grid-cols-4 " >
    <Gallery items={images2} />
    <Gallery items={images1} />
    <Gallery items={images3} />
    <Gallery items={images4} />
    <Gallery items={images1} />
    <Gallery items={images2} />
    <Gallery items={images3} />
    <Gallery items={images4} />

  </Gallery>
</div>

<style>
div {
margin-bottom: 5em;
width: auto;
padding-top: 1%;
height: auto;
padding-right: 1%;
padding-left: 1%;
padding-bottom: 1%;
}</style>

