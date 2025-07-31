"use client";
import { useState } from "react";
import {
  ArrowLeft,
  FileText,
  RefreshCcw,
  Save,
  ChevronDown,
  ChevronUp,
  Pencil,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

const defaultClauses = [
  {
    title: "Property Condition",
    content:
      "The property is sold in its current condition as inspected by the buyer. The seller warrants that all major systems (electrical, plumbing, HVAC) are in working order as of the date of this agreement. Any defects discovered after inspection must be reported within 48 hours of signing this agreement.",
  },
  {
    title: "Payment Terms",
    content: "Add your custom payment terms here.",
  },
  {
    title: "Title and Transfer",
    content: "Add your custom title and transfer terms here.",
  },
];

const ReviewLegalClauses = () => {
  const [clauses, setClauses] = useState(
    defaultClauses.map((c) => ({ ...c, isOpen: false }))
  );
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const propertyType = searchParams.get("type") || "";
  const { step } = useAppSelector((state) => state.step);

  const toggleClause = (index: number) => {
    setClauses((prev) =>
      prev.map((clause, i) =>
        i === index ? { ...clause, isOpen: !clause.isOpen } : clause
      )
    );
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditValue(clauses[index].content);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...clauses];
      updated[editIndex].content = editValue;
      setClauses(updated);
      setEditIndex(null);
    }
  };

  const handleReset = () => {
    if (editIndex !== null) {
      setEditValue(defaultClauses[editIndex].content);
    }
  };

  const handleBackOrNext = () => {
    router.push(
      `/add-listing/add-unit-details?type=${propertyType}&step=${step}`
    );
  };

  return (
    <div>
      <div className="bg-white shadow p-4 mt-[76px]">
        <div className="container flex items-center mx-auto">
          <Link href="/add-listing">
            <div className="flex justify-center items-center">
              <ArrowLeft size={18} />
            </div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="p-6 max-w-4xl mx-auto">
          <div className="space-y-2 flex justify-center items-center flex-col">
            <div className="text-2xl text-center text-[#936639] font-medium">
              <FileText />
            </div>
            <h2 className="text-lg font-semibold mt-2">
              Under Property Document
            </h2>
            <p className="text-sm text-center text-gray-500">
              These are standard clauses applied to all property listings. You
              can review and make edits to match your property’s legal and
              transactional terms.
            </p>
          </div>

          <div className="space-y-4 mt-6">
            {clauses.map((clause, index) => (
              <Card key={index} className="border p-0 px-4 py-4 rounded-lg">
                <div
                  className="flex justify-between items-center  cursor-pointer"
                  onClick={() => toggleClause(index)}
                >
                  <div className="flex gap-2 items-center">
                    <h3 className="font-medium text-sm">
                      Clause {index + 1}: {clause.title}
                    </h3>
                    {clause.isOpen ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(index);
                      }}
                    >
                      <Pencil className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {clause.isOpen && (
                  <div className="px-4 pb-4">
                    {editIndex === index ? (
                      <div className="mt-3 space-y-2">
                        <Textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="text-sm"
                        />
                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleReset}
                            className="border-[#D6A77A] py-5 !px-6 rounded-full text-[#A57951]"
                          >
                            <RefreshCcw size={18} /> Reset to Default
                          </Button>
                          <div className="space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => setEditIndex(null)}
                              className="rounded-full py-5 !px-6"
                            >
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-t from-[#A68A64] to-[#936639] text-white rounded-full py-5 !px-6"
                              onClick={handleSave}
                            >
                              <Save size={18} /> Save Changes
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600 mt-2">
                        {clause.content}
                      </p>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="my-10 flex justify-between items-center">
            <Button
              className="py-5 px-6 rounded-full"
              onClick={handleBackOrNext}
              variant="outline"
            >
              <ArrowLeft size={18} /> Back
            </Button>
            <p className="text-xs px-6 text-center text-gray-500">
              Review all clauses before proceeding to the next step
            </p>
            <Button
              onClick={handleBackOrNext}
              className="py-5 px-6 bg-gradient-to-r from-[#C19A6B] to-[#936639] h-2 rounded-full"
            >
              Next <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLegalClauses;
