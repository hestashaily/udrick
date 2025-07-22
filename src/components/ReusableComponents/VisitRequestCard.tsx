"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Calendar,
  Clock,
  MapPin,
  User,
  CircleCheckBig,
  Clock4,
  CircleX,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

type VisitCardProps = {
  title: string;
  seller: string;
  location: string;
  date: string;
  time: string;
  requestedDate: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  imageUrl: string;
  onView: () => void;
  onContact: () => void;
};

export const VisitRequestCard = ({
  title,
  seller,
  location,
  date,
  time,
  requestedDate,
  status,
  imageUrl,
  onView,
  onContact,
}: VisitCardProps) => {
  const statusColor =
    status === "Confirmed"
      ? "bg-green-100 text-green-600"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-red-100 text-red-600";

  return (
    <Card className="rounded-2xl w-full p-2">
      <CardContent className="flex flex-col md:flex-row items-start gap-4 p-4">
        {/* Image */}
        <div className="w-full md:w-24 h-24 rounded-md overflow-hidden shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            width={96}
            height={96}
            className="object-cover h-full w-full"
          />
        </div>

        {/* Info */}
        <div className="flex-1 w-full flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
              <p className="text-sm flex items-center gap-1 mt-1 text-muted-foreground">
                <User className="w-4 h-4" /> Seller: {seller}
              </p>
              <p className="text-sm flex items-center gap-1 mt-1 text-muted-foreground">
                <MapPin className="w-4 h-4" /> {location}
              </p>
              <p className="text-sm flex items-center gap-1 mt-1 text-muted-foreground">
                <Calendar className="w-4 h-4" /> {date}
              </p>
              <p className="text-sm flex items-center gap-1 mt-1 text-muted-foreground">
                <Clock className="w-4 h-4" /> {time}
              </p>
            </div>

            {/* Status Badge */}
            <div className="sm:ml-auto">
              <Badge
                className={`${statusColor} text-sm px-6 py-2 font-medium flex items-center gap-2`}
              >
                {status === "Confirmed" ? (
                  <CircleCheckBig className="w-4 h-4" />
                ) : status === "Pending" ? (
                  <Clock4 className="w-4 h-4" />
                ) : (
                  <CircleX className="w-4 h-4" />
                )}
                {status}
              </Badge>
            </div>
          </div>

          {/* Rejection Reason */}
          {status === "Cancelled" && (
            <div className="border border-[#FFCECE] my-2 rounded-2xl bg-[#FFCECE] p-4">
              <div className="flex gap-4">
                <CircleX color="#FB333C" className="shrink-0" />
                <div className="flex flex-col space-y-2">
                  <p className="text-[#AB0712] font-medium text-base">
                    Rejection Reason
                  </p>
                  <p className="text-[#AB0712] text-sm font-normal">
                    Property is currently under maintenance and not available
                    for viewing until January 2025.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
            <p className="text-xs text-gray-500">
              Requested {requestedDate}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                className="rounded-xl px-6 py-3 font-normal text-base w-full sm:w-auto"
                onClick={onView}
              >
                <Eye className="w-4 h-4 mr-1" /> View Property
              </Button>
              {status === "Confirmed" && (
                <Button
                  className="rounded-xl bg-gradient-to-t from-[#A68A64] to-[#936639] px-6 py-3 text-white font-normal text-base w-full sm:w-auto"
                  onClick={onContact}
                >
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Contact Seller
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
