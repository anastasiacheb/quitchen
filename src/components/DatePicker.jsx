'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function DatePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  // const [date, setDate] = useState(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={`font-satoshi font-light text-sm md:text-base md:leading-[180%] !text-light placeholder:text-light outline-none py-4 px-6 border border-tertiary bg-secondary rounded-[10px] focus:border-light w-full transition-all ease-linear !h-13.5 md:!h-15.75 shadow-none flex items-start justify-start hover:bg-secondary`}>
            {value ? value.toLocaleDateString() : 'Select Date '}
            {/* <img src="/icons/calendar_month.svg" alt="calendar icon" className="size-6" /> */}
          </Button>
        </PopoverTrigger>
        <input required type="hidden" name="deliveryDate" value={value ? value.toLocaleDateString() : ''} />
        <PopoverContent
          className="w-auto overflow-hidden p-0 rounded-[10px] border-base-700 shadow-none font-satoshi"
          align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
            disabled={{ before: new Date() }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
