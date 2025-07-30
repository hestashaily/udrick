"use client";


import clsx from "clsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Option = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

interface ToggleSwitchProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  activeColors?: {
    from: string;
    to: string;
  };
  borderColor?: string;
}

export default function ToggleSwitch({
  options,
  value,
  onChange,
  activeColors = { from: "#9c6b3c", to: "#b38758" },
  borderColor = "#b38758",
}: ToggleSwitchProps) {
  return (
    <div
    className="relative inline-flex rounded-full p-1 overflow-hidden border"
      style={{ borderColor }}
    >
      {/* Active Background Slider */}
      <div
        className={clsx(
          "absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full transition-all duration-300",
          value === options[1]?.value
            ? "translate-x-[calc(94%+0.4rem)]"
            : "translate-x-0"
        )}
        style={{
          background: `linear-gradient(to right, ${activeColors.from}, ${activeColors.to})`,
        }}
      />

      {/* Toggle Items */}
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(val) => val && onChange(val)}
        className="relative z-10 flex gap-x-2"
      >
        {options.map((opt) => (
          <ToggleGroupItem
            key={opt.value}
            value={opt.value}
            className={clsx(
              "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              "data-[state=on]:bg-transparent",
              value === opt.value ? "!text-white" : `text-[${activeColors.from}]`
            )}
          >
            {opt.icon}
            {opt.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
