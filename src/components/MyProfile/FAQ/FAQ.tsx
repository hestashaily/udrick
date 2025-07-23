import React from "react";
import ProfileCard from "../ProfileCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AccordianFaq from "./AccordianFaq";
import ContactUsForm from "./ContactUsForm";

const FAQ = () => {
  return (
    <div>
      <ProfileCard />
      <div className="my-4">
        <h2 className="font-medium mb-4 text-2xl text-[#313131]">FAQ’s & Support</h2>

        <Card className="my-2 p-4">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="w-full p-0 bg-background justify-start border-b border-[#E5E5E5] rounded-none">
              <TabsTrigger
                value="faq"
                className="rounded-none border-0 font-medium text-lg border-b-2 border-transparent data-[state=active]:border-[#A68A64] data-[state=active]:text-[#A68A64] text-muted-foreground "
              >
                FAQ&#39;s
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="rounded-none border-0 border-b-2 font-medium text-lg border-transparent data-[state=active]:border-[#A68A64] data-[state=active]:text-[#A68A64] text-muted-foreground "
              >
                Contact Us
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <AccordianFaq />
            </TabsContent>
            <TabsContent value="contact">
              <ContactUsForm />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
