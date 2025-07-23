'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileCard = () => {
    const [profile, setProfile] = useState({
        name: "John Mitchell",
        email: "john.mitchell@email.com",
        mobile: "9876543210",
      });
  return (
    <div>
        <Card className="p-4">
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
      </Card>
    </div>
  )
}

export default ProfileCard