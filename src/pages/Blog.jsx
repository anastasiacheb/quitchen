import Page from '../components/Page';

const blogPages = [
  {
    image: 'Image13.webp',
    date: '24th Aug 2023',
    title: 'How Qitchen Redefines Flavor Harmony in Every Bite',
    description:
      "Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavors.",
    heading: "Unveiling Culinary Artistry: A Journey into Qitchen's Soul",
    // paragraph:
    //   "In a world where dining experiences often blend into the ordinary, Qitchen stands as an emblem of culinary passion redefined. Beyond being a restaurant that serves sushi, Qitchen is an embodiment of dedication, creativity, and a profound love for the art of gastronomy. As you step through its doors, you're not merely entering an eatery; you're immersing yourself in an experience that goes beyond the boundaries of a traditional dining encounter.",
    // heading: 'Crafting a Feast for the Senses',
    // paragraph:
    //   "The heart of Qitchen's allure lies in its meticulous attention to every detail, from the selection of ingredients to the presentation of each dish. While renowned for its exceptional sushi, Qitchen's passion for perfection extends to every facet of the culinary journey. The talented chefs curate a symphony of flavors, seamlessly blending textures, colors, and aromas to create a multisensory masterpiece.",
    // paragraph:
    //   "The ambiance itself speaks of a story where modern elegance meets warmth, inviting patrons to relish not only the food but also the atmosphere that envelopes them. Each dish that graces the table is not just a meal; it's a tale told through taste—a testament to the tireless commitment Qitchen has toward crafting an experience that resonates with food enthusiasts and connoisseurs alike.",
    // heading: 'Beyond Sushi: Nurturing Connections',
    // paragraph:
    //   "While the gastronomic delights are undoubtedly the centerpiece, Qitchen goes beyond being a culinary haven. It's a place that fosters connections, where conversations flow as smoothly as the sake, and moments turn into cherished memories. The passionate team at Qitchen believes that dining is an act of bonding—a chance to share joy, laughter, and stories over a beautifully laid table.",
    // paragraph:
    //   "The Qitchen experience transcends the physical walls of the restaurant. It's an invitation to step out of the ordinary and into a world where passion for food is an art, and every guest is a cherished canvas. Through the symphony of flavors, the artistry of presentation, and the warmth of connection, Qitchen invites you to witness passion personified in every aspect of your dining journey.",
  },
  {
    image: 'pexels-cottonbro-studio-3296539_1.webp',
    date: '24th Aug 2023',
    title: 'Unveiling the Mastery Behind Our Culinary Craftsmanship',
    description: "Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection.",
  },
  {
    image: 'pexels-cottonbro-studio-3296392_1.webp',
    date: '24th Aug 2023',
    title: 'Journey through Freshness Exquisite Sushi Selection',
    description: "Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea.",
  },
  {
    image: 'pexels-cottonbro-studio-3338497_2.webp',
    date: '24th Aug 2023',
    title: "Palate with Qitchen's Unsurpassed Sushi Delicacies",
    description:
      "Discover the heights of gastronomic delight as Qitchen's sushi transports you to a new culinary realm.",
  },
  {
    image: 'pexels-cottonbro-studio-3298641_2.webp',
    date: '24th Aug 2023',
    title: 'The Qitchen Experience Beyond Sushi',
    description:
      "Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish—it's an experience.",
  },
];

function BLogItem({ image, date, title, description }) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-12 cursor-pointer">
      <img
        src={`/assets/images/${image}`}
        alt="photo"
        className="aspect-[280/210] rounded-2xl object-cover md:max-w-70"
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <img src="/assets/icons/Grid2.svg" alt="decor" />
          <p className="uppercase font-satoshi font-normal text-xs">{date}</p>
        </div>
        <h3 className="font-forum font-normal text-2xl uppercase">{title}</h3>
        <p className="font-satoshi text-base font-light opacity-70 leading-[1.8]">{description}</p>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <Page title="Blog" image="Image12.webp" sticky>
      <div className="rounded-2xl border border-tertiary flex flex-col p-8 gap-8 md:gap-16 md:p-16 lg:px-24 lg:py-20 lg:gap-20">
        <div className="flex gap-4 w-fit m-auto">
          <img src="/assets/icons/Grid.svg" alt="decor" className="w-15" />
          <h2 className="font-forum text-[28px] md:text-[32px] lg:text-[40px] uppercase text-center">
            Behind the Scenes <br />& Latest News
          </h2>
          <img src="/assets/icons/Grid.svg" alt="decor" className="w-15 rotate-180" />
        </div>
        <div className="flex flex-col gap-12">
          {blogPages.map((page, index) => (
            <BLogItem key={index} {...page} />
          ))}
        </div>
      </div>
    </Page>
  );
}
