import Page from '../components/Page';
import { useState } from 'react';

function Input({ type, placeholder, name, id, value, onChange, ...props }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      required
      {...props}
      value={value}
      onChange={onChange}
      className="font-satoshi font-light text-sm md:text-base md:leading-[180%] placeholder:text-light outline-none py-4 px-6 border border-tertiary bg-secondary rounded-[10px] focus:border-light w-full"
      placeholder={placeholder}
    />
  );
}

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    time: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const reservationDetails = `
    Reservation Confirmed!
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Guests: ${formData.guests}
    Date: ${formData.date}
    Time: ${formData.time}
  `;
    alert(reservationDetails);

    setFormData({
      name: '',
      phone: '',
      email: '',
      guests: '',
      date: '',
      time: '',
    });
  }

  return (
    <Page
      title={
        <>
          Book
          <br />a Table
        </>
      }
      image="Image5.webp">
      <div className="rounded-2xl border border-tertiary flex flex-col p-8 gap-15 md:p-16 lg:px-24 lg:pt-20 lg:gap-20 lg:h-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 w-fit m-auto">
            <img src="assets/icons/Grid.svg" alt="decor" className="w-15" />
            <h2 className="font-forum text-[28px] md:text-[32px] lg:text-[40px] uppercase">Reservation</h2>
            <img src="assets/icons/Grid.svg" alt="decor" className="w-15 rotate-180" />
          </div>
          <p className="text-base md:text-lg font-satoshi font-light text-center max-w-125 m-auto">
            Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
          </p>
        </div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            name="Name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <Input
            type="tel"
            name="Phone"
            id="phone"
            placeholder="Phone Number"
            inputMode="numeric"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') });
            }}
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />

          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="tel"
              maxLength={2}
              className="font-satoshi font-light text-sm md:text-base md:leading-[180%] placeholder:text-light outline-none py-4 px-6 border border-tertiary bg-secondary rounded-[10px] focus:border-light w-full"
              placeholder="Guests"
              required
              value={formData.guests}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (parseInt(value) > 10) {
                  value = value.slice(0, 1);
                }
                setFormData({ ...formData, guests: value });
              }}
            />
            <input
              type="date"
              className="font-satoshi font-light text-sm md:text-base md:leading-[180%] !text-light placeholder:text-light outline-none py-4 px-6 border border-tertiary bg-secondary rounded-[10px] focus:border-light w-full 
                "
              placeholder="Date"
              required
              min={new Date().toISOString().split('T')[0]}
              onKeyDown={(e) => e.preventDefault()}
              value={formData.date}
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
              }}
            />
            <select
              name="time"
              id="time"
              required
              value={formData.time}
              onChange={(e) => {
                setFormData({ ...formData, time: e.target.value });
              }}
              className="font-satoshi font-light text-sm md:text-base md:leading-[180%] placeholder:text-light outline-none py-4 px-6 border border-tertiary bg-secondary rounded-[10px] focus:border-light w-full appearance-none">
              <option value="">Select Time</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
            </select>
          </div>
          <button className="text-dark bg-light font-satoshi text-xs font-normal uppercase py-4 rounded-lg hover:bg-hoverlink">
            Reserve
          </button>
        </form>
      </div>
    </Page>
  );
}
