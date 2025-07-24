"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  onSignClick: () => void;
  onSaveAgreement: () => void;
  signature: string | null;
};

export default function AgreementDialog({
  open,
  onOpenChange,
  signature,
  onSignClick,
  onSaveAgreement,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] !max-w-3xl overflow-y-auto text-sm">
        <DialogHeader>
          <DialogTitle className="text-lg text-center font-semibold">
            Purchase Agreement
          </DialogTitle>
        </DialogHeader>

        <div className="text-[#333] space-y-4 leading-5 text-[13px]">
          <p>
            <strong>Please Review the terms and conditions carefully</strong>
          </p>

          <p>
            Twenty (20) days from execution hereof a statement from all
            mortgagee(s) setting forth principal balance, method of payment,
            interest rate and whether the mortgage(s) is in good standing. If a
            mortgage requires approval of the Buyer by the mortgagee in order to
            avoid default, or for assumption by the Buyer of said mortgage, and:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              a) the mortgagee does not approve the Buyer, the Buyer may rescind
              the contract, or
            </li>
            <li>
              b) the mortgagee requires an increase in the interest rate or
              charges a fee for any reason in excess of $500.00, the Buyer may
              rescind the Contract unless Seller elects to pay such increase or
              excess. Seller and Buyer shall pay 50% of any such fees. Buyer
              shall use reasonable diligence to obtain approval. The amount of
              any escrow deposits held by mortgagee shall be credited to Seller.
            </li>
          </ul>

          <p className="font-semibold">XIII. PURCHASE MONEY MORTGAGES:</p>
          <p>
            The purchase money note and mortgage, if any, shall provide for a
            thirty (30) day grace period in the event of default, if it is a
            first mortgage and a 15 day grace period in the event of default if
            a second mortgage; shall provide for the right of prepayment in
            whole or in part without penalty; shall be assumable and shall not
            provide for acceleration or interest adjustment in event of resale
            of the Property...
          </p>

          <p className="font-semibold">XIV. CURRENT SURVEY:</p>
          <p>
            Within fifteen (15) days from the date hereof, Seller, at Sellers
            sole cost and expense, shall furnish a current survey of the
            Property prepared and certified by a duly registered Land Surveyor.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>a) Set forth an accurate legal description;</li>
            <li>
              b) Show all easements and rights-of-way (setting forth the book
              and page number of the recorded instruments creating the same),
              alleys, streets, and
            </li>
            <li>c) Show any encroachments;</li>
            <li>
              d) Show all existing improvements (such as buildings, power lines,
              fences, etc.);
            </li>
            <li>
              e) Show all dedicated public streets provided access and whether
              such access is paved to the property line; and
            </li>
            <li>
              f) Show the location of any easements necessary for the furnishing
              of off-site improvements; and
            </li>
            <li>
              g) Be certified to the Seller, the Buyer, the Title Company and
              any lender that may be involved in the transaction.
            </li>
          </ul>

          <p className="font-semibold">XV. TERMITE:</p>
          <p>
            The Buyer, within time allowed for delivery of evidence and
            examination thereof, or no later than ten (10) days prior to
            closing, whichever date occurs last, may have the Property inspected
            by a pest control operator to determine whether there is any visible
            active infestation of termites or other wood-destroying organisms...
          </p>

          {/* Signature preview */}
          {signature && (
            <div className="mt-6 flex justify-end">
              <Image
                src={signature}
                alt="Signature"
                width={120}
                height={60}
                className="border border-gray-300 rounded"
              />
            </div>
          )}

          {/* Action Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={signature ? onSaveAgreement : onSignClick}
              className="rounded-xl px-6 py-2 bg-[#936639] text-white"
            >
              {signature ? "Save Agreement" : "Confirm & Sign Agreement"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
