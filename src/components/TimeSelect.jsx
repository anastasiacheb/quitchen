import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { useState } from 'react';

export default function TimeSelect({ onChange, value }) {
  // const [value, setValue] = useState('');

  return (
    <>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={`font-satoshi font-light text-sm md:text-base md:leading-[180%] placeholder:text-light py-4 px-6 border border-tertiary bg-secondary w-full rounded-[10px] focus:border-light !outline-none !outline-transparent transition-all ease-linear !h-13.5 md:!h-15.75 flex items-center !shadow-none focus-visible:ring-0 text-light!`}>
          <SelectValue placeholder="Select Time" />
        </SelectTrigger>
        <SelectContent className="w-full shadow-none border-tertiary !p-0">
          <SelectItem value="16:00" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            16:00
          </SelectItem>
          <SelectItem value="16:30" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            16:30
          </SelectItem>
          <SelectItem value="17:00" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            17:00
          </SelectItem>
          <SelectItem value="17:30" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            17:30
          </SelectItem>
          <SelectItem value="18:00" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            18:00
          </SelectItem>
          <SelectItem value="18:30" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            18:30
          </SelectItem>
          <SelectItem value="19:00" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            19:00
          </SelectItem>
          <SelectItem value="19:30" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            19:30
          </SelectItem>
          <SelectItem value="20:00" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            20:00
          </SelectItem>
          <SelectItem value="20:30" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            20:30
          </SelectItem>
          <SelectItem value="21:00" className="font-satoshi font-light text-sm md:text-base md:leading-[180%]">
            21:00
          </SelectItem>
        </SelectContent>
      </Select>
      <input required type="hidden" name="time" value={value} />
    </>
  );
}
