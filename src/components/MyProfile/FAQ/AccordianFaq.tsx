import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";



const items = [
  {
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

const AccordianFaq = () => {
  return (
    <div className='p-4'>
        <Accordion
      defaultValue="item-0"
      type="single"
      collapsible
      className=" my-4 w-full"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 text-[#936639] items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45">
              {title}
              <Plus
                  className="h-5 w-5 shrink-0 transition-transform duration-200 
                  text-muted-foreground group-data-[state=open]:text-[#936639]"
                />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  )
}

export default AccordianFaq