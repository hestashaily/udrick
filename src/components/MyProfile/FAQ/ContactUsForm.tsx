import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="p-4">
      <form className="space-y-6">
        <div>
          <Label className="mb-2 font-medium text-base text-[#6A6A6A]">Your Name</Label>
          <Input
            type="text"
            placeholder="Name"
            className="w-full  !px-4 !py-5"
          />
        </div>
       <div>
         <Label className="mb-2 font-medium text-base text-[#6A6A6A]">Email</Label>
        <Input
          type="email"
          placeholder="Email@gmail.com"
          className="w-full  !px-4 !py-5"
        />
        
       </div>
        <div>
         <Label className="mb-2 font-medium text-base text-[#6A6A6A]">Phone Number</Label>
        <Input
          type="number"
          placeholder="Phone Number"
          className="w-full  !px-4 !py-5"
        />
        
       </div>
        <div>
         <Label className="mb-2 font-medium text-base text-[#6A6A6A]">Message</Label>
        <textarea
        cols={15}
        rows={5}
          
          placeholder="Type Your Meassage.."
          className="w-full  !px-4 !py-5 border rounded-2xl"
        />
        
       </div>
       <div>
        <Button className="w-full !py-6 bg-gradient-to-t from-[#A68A64] to-[#936639] text-white">Send</Button>

       </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
