"use client"

import {Field, Label, Listbox} from "@headlessui/react";
import {useState} from "react";

export default function Home() {
  const [value, setValue] = useState("u002");

  return (
    <main className="p-12">
      <Field>
        <Label>
          Select user:
        </Label>
        <p className='text-xs text-neutral-500'>
          I want render listbox static, not want open it in popover.
        </p>
        <Listbox as='div' value={value} onChange={setValue} className='w-72 border rounded-lg overflow-hidden mt-2'>
          <Listbox.Options
            // It's ok when refresh it with key.
            // key={value}
            as="li" static
            className='flex flex-col gap-2 h-64 overflow-y-auto p-2 list-none'>
            {
              users.map(user => {
                return <Listbox.Option
                  as='li'
                  key={user.id}
                  value={user.id}
                  className='hover:bg-neutral-100 rounded-lg p-2 cursor-pointer data-[selected]:bg-blue-500 data-[selected]:text-white'
                >
                  <h5 className='font-medium text-sm'>
                    {
                      user.name
                    }
                  </h5>
                  <p className='opacity-50 text-xs mt-1'>
                    {
                      user.email
                    }
                  </p>
                </Listbox.Option>
              })
            }
          </Listbox.Options>
        </Listbox>
      </Field>
    </main>
  );
}

const users = [
  {
    id: "u001",
    name: "Alice Smith",
    email: "alice.smith@example.com",
  },
  {
    id: "u002",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
  },
  {
    id: "u003",
    name: "Charlie Williams",
    email: "charlie.williams@example.com",
  },
  {
    id: "u004",
    name: "Diana Moore",
    email: "diana.moore@example.com",
  },
  {
    id: "u005",
    name: "Ethan Miller",
    email: "ethan.miller@example.com",
  },
  {
    id: "u006",
    name: "Fiona Garcia",
    email: "fiona.garcia@example.com",
  },
  {
    id: "u007",
    name: "George Brown",
    email: "george.brown@example.com",
  },
  {
    id: "u008",
    name: "Hannah Walker",
    email: "hannah.walker@example.com",
  },
  {
    id: "u009",
    name: "Isaac Lee",
    email: "isaac.lee@example.com",
  },
  {
    id: "u010",
    name: "Jasmine Hernandez",
    email: "jasmine.hernandez@example.com",
  },
];