import { useMemo, createRef } from 'react';
import Page from '../components/Page';

function Tag({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="uppercase font-satoshi text-xs border border-tertiary rounded-lg py-2 px-3 hover:bg-hover">
      {text}
    </button>
  );
}

const menuItems = [
  {
    img: 'pexels-yang-hao-10692509 1.webp',
    title: 'Spicy Tuna Maki',
    price: '$5',
    description:
      'A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.',
    category: 'Maki',
  },
  {
    img: 'pexels-yang-hao-10692510_1.webp',
    title: 'Mango Maki',
    price: '$5',
    description:
      'Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.',
    category: 'Maki',
  },
  {
    img: 'pexels-yang-hao-10692517_1.webp',
    title: 'Salmon Maki',
    price: '$5',
    description:
      'Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.',
    category: 'Maki',
  },
  {
    img: 'pexels-yang-hao-10692500_1.webp',
    title: 'Tuna Maki',
    price: '$5',
    description:
      'A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.',
    category: 'Maki',
  },
  {
    img: 'pexels-yang-hao-10692488_1.webp',
    title: 'Volcano Delight',
    price: '$12',
    description:
      'Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692499_2.webp',
    title: 'Rainbow Fusion',
    price: '$12',
    description:
      'A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692515_1.webp',
    title: 'Dragon Elegance',
    price: '$12',
    description:
      'Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692527_1.webp',
    title: 'Sunset Serenity',
    description:
      'Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692528_1.webp',
    title: 'Mystic Garden',
    price: '$12',
    description:
      'Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692529_1.webp',
    title: 'Ocean Breeze',
    price: '$12',
    description:
      'A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692494_1.webp',
    title: 'Tokyo Blossom',
    price: '$12',
    description:
      'Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.',
    category: 'UraMaki',
  },
  {
    img: 'pexels-yang-hao-10692508_(1)_1.webp',
    title: 'Sunrise Bliss',
    price: '$16',
    description:
      'A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.',
    category: 'Special Rolls',
  },
  {
    img: 'pexels-yang-hao-10692480_1.webp',
    title: 'Mango Tango Fusion',
    price: '$16',
    description:
      'Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.',
    category: 'Special Rolls',
  },
  {
    img: 'pexels-yang-hao-10692484_1.webp',
    title: 'Truffle Indulgence',
    price: '$16',
    description:
      'Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.',
    category: 'Special Rolls',
  },
  {
    img: 'pexels-yang-hao-10692491_1.webp',
    title: 'Pacific Firecracker',
    price: '$16',
    description:
      'Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.',
    category: 'Special Rolls',
  },
  {
    img: 'pexels-yang-hao-10692482_1.webp',
    title: 'Eternal Eel Enchantment',
    price: '$16',
    description:
      'An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.',
    category: 'Special Rolls',
  },
];

function MenuItem({ img, title, price, description }) {
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row">
        <img src={`assets/images/${img}`} alt="sushi photo" className="aspect-[3/2] rounded-xl w-full md:w-37.5" />
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-4 font-forum text-[22px] uppercase">
            <h3 className="whitespace-nowrap">{title}</h3>
            <div className="border border-tertiary w-full h-0.25 my-2 border-dashed"></div>
            <p>{price}</p>
          </div>
          <p className="font-satoshi text-sm font-light opacity-70">{description}</p>
        </div>
      </div>
    </div>
  );
}

function MenuSection({ category, sectionRef }) {
  const items = menuItems.filter((item) => item.category === category);
  return (
    <div ref={sectionRef} className="flex flex-col gap-8 md:gap-12">
      <div className="flex gap-4 w-fit m-auto">
        <img src="assets/icons/Grid.svg" alt="decor" className="w-15" />
        <h2 className="font-forum text-[32px] uppercase">{category}</h2>
        <img src="assets/icons/Grid.svg" alt="decor" className="w-15 rotate-180" />
      </div>
      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <MenuItem key={index} img={item.img} title={item.title} price={item.price} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  const categories = useMemo(() => {
    return [...new Set(menuItems.map((item) => item.category))];
  }, []);

  const sectionRefs = useMemo(() => {
    const refs = {};
    categories.forEach((category) => {
      refs[category] = createRef();
    });
    return refs;
  }, [categories]);

  return (
    <Page title="Menu" image="Image4.webp" sticky>
      <div className="rounded-2xl border border-tertiary flex flex-col p-8 gap-8 md:gap-16 md:px-16 lg:px-24 lg:pb-20">
        <div className="flex gap-1 w-fit m-auto">
          {categories.map((category) => (
            <Tag
              key={category}
              text={category}
              onClick={() => sectionRefs[category].current?.scrollIntoView({ behavior: 'smooth' })}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
          {categories.map((category) => (
            <MenuSection key={category} category={category} sectionRef={sectionRefs[category]} />
          ))}
        </div>
      </div>
    </Page>
    // <main className="p-3 md:p-6 text-light flex flex-col gap-4 lg:grid lg:grid-cols-2 ">
    //   <div className="size-[calc(100dvw-24px)] bg-[url('assets/images/Image4.webp')] bg-cover bg-center bg-no-repeat rounded-2xl flex items-end relative z-10 overflow-hidden justify-between md:w-[calc(100dvw-48px)] md:h-[calc(80dvw-48px)] lg:size-full lg:h-[calc(100dvh-48px)] lg:sticky lg:align-self-start lg:top-6">
    //     <img src="assets/images/Gradient.png" alt="gradient" className="absolute bottom-0 w-full h-1/2 object-fill" />
    //     <h1 className="font-forum text-light text-[56px] md:text-[80px] lg:text-[112px] tracking-wider uppercase leading-none pb-4 text-center mx-auto lg:text-left lg:mx-0 relative z-10 lg:pl-16 lg:pb-14">
    //       Menu
    //     </h1>
    //   </div>
    //   <div className="flex flex-col gap-4">
    //     <div className="rounded-2xl border border-tertiary flex flex-col p-8 gap-8 md:gap-16 md:px-16 lg:px-24 lg:pb-20">
    //       <div className="flex gap-1 w-fit m-auto">
    //         {categories.map((category) => (
    //           <Tag
    //             key={category}
    //             text={category}
    //             onClick={() => sectionRefs[category].current?.scrollIntoView({ behavior: 'smooth' })}
    //           />
    //         ))}
    //       </div>
    //       <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
    //         {categories.map((category) => (
    //           <MenuSection key={category} category={category} sectionRef={sectionRefs[category]} />
    //         ))}
    //       </div>
    //     </div>
    //     <Footer />
    //   </div>
    // </main>
  );
}
