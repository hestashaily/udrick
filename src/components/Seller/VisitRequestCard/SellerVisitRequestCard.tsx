


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Check, X } from "lucide-react";
import Image from "next/image";

interface VisitRequestCardProps {
  name: string;
  avatar: string;
  property: string;
  visitDate: string;
  requestedDate: string;
  status: "Pending" | "Accepted" | "Rejected";
  onAccept?: () => void;
  onReject?: () => void;
}

export default function VisitRequestCard({
  name,
  avatar,
  property,
  visitDate,
  requestedDate,
  status = "Pending",
  onAccept,
  onReject,
}: VisitRequestCardProps) {
  return (
    <Card className="rounded-2xl shadow-sm border border-[#EDEDED] w-full">
      <CardContent className="p-3 space-y-4">
      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
       
          <div className="flex items-start sm:items-center gap-3 w-full">
            <Image
              src={avatar}
              alt={name}
              width={60}
              height={60}
              className="rounded-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-base">{name}</h3>
              <p className="text-sm text-gray-600">{property}</p>
              <p className="text-sm text-gray-800 mt-1">{visitDate}</p>
              <p className="text-xs italic text-gray-500 mt-1">
                Requested {requestedDate}
              </p>
            </div>
          </div>

   
          <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-xs sm:text-sm font-medium">
            <Clock className="w-4 h-4" />
            {status}
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#C69C6D] to-[#936639] text-white flex items-center justify-center gap-1 rounded-full px-4 py-2 text-sm w-full sm:w-auto"
            onClick={onAccept}
          >
            <Check className="w-4 h-4" />
            Accept
          </Button>
          <Button
            variant="outline"
            className="border-[#C69C6D] text-[#936639] flex items-center justify-center gap-1 rounded-full px-4 py-2 text-sm w-full sm:w-auto"
            onClick={onReject}
          >
            <X className="w-4 h-4" />
            Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
