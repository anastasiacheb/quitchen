import Page from '../components/Page';

const openHours = [
  { day: 'Monday', hours: '16:00 - 22:30' },
  { day: 'Tuesday', hours: '16:00 - 22:30' },
  { day: 'Wednesday', hours: '16:00 - 22:30' },
  { day: 'Thursday', hours: '16:00 - 22:30' },
  { day: 'Friday', hours: '16:00 - 22:30' },
  { day: 'Saturday & Sunday', hours: '16:00 - 22:30' },
];

function OpeningHours({ day, hours }) {
  return (
    <div className="flex items-end gap-4 font-satoshi text-base leading-[180%] font-light">
      <h3 className="whitespace-nowrap">{day}</h3>
      <div className="border border-tertiary w-full h-0.25 my-2 border-dashed"></div>
      <p className="whitespace-nowrap">{hours}</p>
    </div>
  );
}

function ImageLink({ image }) {
  return (
    <a href="#" className="rounded-2xl overflow-clip relative group cursor-pointer">
      <img
        src={`assets/images/${image}`}
        alt="photo"
        className="group-hover:opacity-30 transition-all duration-200 ease-linear group-hover:scale-115"
      />
      <div className="flex justify-center items-center w-full h-full absolute top-0">
        <img
          src="assets/icons/ph_instagram-logo-light.svg"
          alt="inst"
          className="size-8 max-w-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear"
        />
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <Page title="Contact" image="Image9.webp">
      <div className="flex flex-col gap-4 lg:h-[calc(100dvh-48px-87px)] md:grid md:grid-cols-2 md:grid-rows-2">
        <div className="rounded-2xl border border-tertiary p-10 md:p-12 flex flex-col gap-8 md:justify-between">
          <div className="flex gap-4 w-fit mx-auto">
            <img src="assets/icons/Grid2.svg" alt="decor" className="w-15" />
            <h2 className="font-forum text-[24px] uppercase whitespace-nowrap">Opening Hours</h2>
            <img src="assets/icons/Grid2.svg" alt="decor" className="w-15 rotate-180" />
          </div>
          <div className="flex flex-col gap-4">
            {openHours.map((item, index) => (
              <OpeningHours key={index} day={item.day} hours={item.hours} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-square lg:h-[calc((100dvh-48px-87px-16px)/2)]">
          <ImageLink image="Image9.webp" />
          <ImageLink image="Image10.webp" />
          <ImageLink image="Image11.webp" />
          <ImageLink image="Image6.webp" />
        </div>
        <div className="rounded-2xl border border-tertiary p-10 md:p-12 flex flex-col gap-4 md:justify-between md:col-start-2">
          <div className="flex gap-8 w-fit mx-auto">
            <img src="assets/icons/Grid2.svg" alt="decor" className="w-15" />
            <h2 className="font-forum text-[24px] uppercase whitespace-nowrap">Get in touch</h2>
            <img src="assets/icons/Grid2.svg" alt="decor" className="w-15 rotate-180" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start font-satoshi font-light">
              <p className="uppercase text-xs pt-2">Address</p>
              <p className="text-right text-base leading-[1.8]">
                23 Greenfield Avenue, <br />
                Prague 120 00
              </p>
            </div>
            <div className="flex justify-between items-start font-satoshi font-light">
              <p className="uppercase text-xs pt-2">Phone</p>
              <p className="text-right text-base leading-[1.8]">+49 1234 567890</p>
            </div>
            <div className="flex justify-between items-start font-satoshi font-light">
              <p className="uppercase text-xs pt-2">Email</p>
              <p className="text-right text-base leading-[1.8]">email@example.com</p>
            </div>
            <div className="flex justify-between items-center font-satoshi font-light">
              <p className="uppercase text-xs ">Follow</p>
              <div className="flex gap-3">
                <a href="#">
                  <img src="assets/icons/ph_instagram-logo-light.svg" alt="inst" className="size-4.5 max-w-none" />
                </a>
                <a href="#">
                  <img src="assets/icons/ph_facebook-logo-light.svg" alt="facebook" className="size-4.5 max-w-none" />
                </a>
                <a href="#">
                  <img src="assets/icons/ph_twitter-logo-light.svg" alt="twitter" className="size-4.5 max-w-none" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-clip aspect-square md:aspect-auto md:col-start-1 md:row-start-2 lg:h-[calc((100dvh-48px-87px-16px)/2)]">
          <img src="assets/images/Image123.webp" alt="kdsfj" className="w-full object-cover" />
        </div>
      </div>
    </Page>
  );
}
