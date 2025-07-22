"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Save, SquarePen, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProfileCard from "./ProfileCard";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Mitchell",
    email: "john.mitchell@email.com",
    mobile: "9876543210",
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleChange = (field: string, value: string) => {
    setTempProfile({ ...tempProfile, [field]: value });
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div>
      {/* <Card className="p-4">
        <div className="flex gap-6 items-center">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-2">
            <h1 className="font-medium text-lg text-[#313131]">
              {profile.name}
            </h1>
            <p className="font-normal text-base text-[#51515]">
              {profile.email}
            </p>
          </div>
        </div>
      </Card> */}
      <ProfileCard/>

      <div className="flex justify-between my-8">
        <h1 className="font-medium text-2xl">Personal Information</h1>
        {!isEditing ? (
          <Button
            className="flex gap-2 items-center px-8 py-6 text-base rounded-xl bg-gradient-to-t from-[#A68A64] to-[#936639] text-white"
            onClick={() => setIsEditing(true)}
          >
            <SquarePen /> Edit Profile
          </Button>
        ) : (
          <div className="flex gap-4">
            <Button
              onClick={handleCancel}
              className="bg-transparent border text-black hover:bg-transparent !px-8 !py-6 text-base rounded-xl"
            >
              <X />
              Cancel
            </Button>
            <Button
              onClick={handleSave}
            //   variant="outline"
              className="rounded-xl !px-8 !py-6 text-base text-white  bg-gradient-to-t from-[#A68A64] to-[#936639]"
            >
              <Save />
              Save
            </Button>
          </div>
        )}
      </div>

      <Card className="p-4">
        <div className="flex gap-6">
          <div>
            <Avatar className="h-32 w-32">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {isEditing && (
              <Button
                variant="outline"
                className="mt-2 w-full flex gap-2 items-center justify-center text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l2-2h3l1-2h4l1 2h3l2 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11a3 3 0 100 6 3 3 0 000-6z"
                  />
                </svg>
                Change Photo
              </Button>
            )}
          </div>
          <div className="mt-2 w-full">
            <div className="mb-4">
              <Label className="mb-1 font-medium text-base block">
                Full Name
              </Label>
              {isEditing ? (
                <Input
                  value={tempProfile.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "#936639",
                    borderWidth: "1px",
                    borderRadius: "0.5rem",
                  }}
                />
              ) : (
                <p>{profile.name}</p>
              )}
            </div>
            <div className="flex w-full gap-6">
              <div className="w-1/2">
                <Label className="mb-1 font-medium text-base block">
                  Mobile Number
                </Label>
                {isEditing ? (
                  <Input
                    value={tempProfile.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    className="focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#936639",
                      borderWidth: "1px",
                      borderRadius: "0.5rem",
                    }}
                  />
                ) : (
                  <p>{profile.mobile}</p>
                )}
              </div>
              <div className="w-1/2">
                <Label className="mb-1 font-medium text-base block">
                  Email
                </Label>
                {isEditing ? (
                  <Input
                    value={tempProfile.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "#936639",
                      borderWidth: "1px",
                      borderRadius: "0.5rem",
                    }}
                  />
                ) : (
                  <p>{profile.email}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyProfile;
