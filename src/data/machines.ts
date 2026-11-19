import machineWaterBottle from "@/assets/machine-water-bottle-filling.jpg";
import machineManualBottle from "@/assets/machine-manual-bottle-filling.jpg";
import machineSoda from "@/assets/machine-soda.jpg";
import machineAutomatic from "@/assets/machine-automatic-filling.jpg";
import machineGoliSoda from "@/assets/machine-goli-soda.jpg";
import machineManualFilling from "@/assets/machine-manual-filling.jpg";
import machineSodaFilling from "@/assets/machine-soda-filling.jpg";
import machineJarRinsing from "@/assets/machine-jar-rinsing.jpg";

export type Machine = {
  name: string;
  series: string;
  category: string;
  output: string;
  heads: string;
  power: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
};

export const machines: Machine[] = [
  {
    name: "AquaFill BF-Series",
    series: "Water Bottle Filling Machine",
    category: "Automatic",
    output: "1,000 – 6,000 BPH",
    heads: "8 / 16 / 24 head",
    power: "2 – 7.5 HP",
    description:
      "Rinse–fill–cap monobloc for 200 ml to 2 litre PET bottles, built on a stainless steel frame with servo-indexed star wheels for drip-free transfer.",
    features: [
      "Rinse, fill & cap monobloc",
      "SS 304 contact parts",
      "No-bottle-no-fill sensor",
      "PLC + HMI touch control",
    ],
    applications: [
      "Packaged drinking water",
      "Mineral water plants",
      "Beverage bottlers",
    ],
    image: machineWaterBottle,
  },
  {
    name: "AquaFill MB-4",
    series: "Manual Bottle Filling Machine",
    category: "Manual",
    output: "400 – 900 BPH",
    heads: "2 / 4 / 6 head",
    power: "0.5 HP",
    description:
      "Compact bench-top gravity filler for start-up bottling units — accurate fill levels with minimal power draw and near-zero maintenance.",
    features: [
      "Gravity / level filling",
      "Height-adjustable nozzles",
      "Food-grade silicone tubing",
      "Tool-free cleaning",
    ],
    applications: ["Small water plants", "Home businesses", "Pilot production"],
    image: machineManualBottle,
  },
  {
    name: "FizzTech CS-200",
    series: "Soda Machine",
    category: "Carbonation",
    output: "200 – 2,000 LPH",
    heads: "Inline carbonator",
    power: "1 – 3 HP",
    description:
      "Chilled carbonation unit that blends CO₂ and treated water at precise pressure to deliver consistent fizz across every batch.",
    features: [
      "SS carbonation tank",
      "Pressure & CO₂ regulation",
      "Inline water chiller ready",
      "Safety relief valve",
    ],
    applications: ["Soda plants", "Beverage units", "Restaurants & bars"],
    image: machineSoda,
  },
  {
    name: "AutoLine AF-24",
    series: "Automatic Filling Machine",
    category: "Automatic",
    output: "2,000 – 8,000 BPH",
    heads: "12 / 24 / 32 head",
    power: "3 – 10 HP",
    description:
      "High-speed rotary filler with automatic cap feeding, conveyor sync, and recipe memory for switching between bottle formats in minutes.",
    features: [
      "Rotary volumetric filling",
      "Auto cap feeder & sealer",
      "Recipe-based format change",
      "Fault alarms & diagnostics",
    ],
    applications: ["Water plants", "Soft drinks", "Edible oil & syrups"],
    image: machineAutomatic,
  },
  {
    name: "Goli Classic GS-6",
    series: "Goli Soda Filling Machine",
    category: "Specialty",
    output: "600 – 1,800 BPH",
    heads: "4 / 6 / 8 head",
    power: "1 – 2 HP",
    description:
      "Purpose-built for codd-neck marble bottles — fills, carbonates, and seals traditional goli soda with a repeatable marble-lock action.",
    features: [
      "Marble-lock sealing head",
      "Counter-pressure filling",
      "Glass-safe bottle grippers",
      "Adjustable carbonation",
    ],
    applications: [
      "Goli soda units",
      "Regional beverage brands",
      "Heritage soda makers",
    ],
    image: machineGoliSoda,
  },
  {
    name: "HandFill MF-1",
    series: "Manual Filling Machine",
    category: "Manual",
    output: "300 – 700 units/hr",
    heads: "1 / 2 head",
    power: "Hand operated",
    description:
      "Hand-lever volumetric filler for liquids of varying viscosity — set the volume once and repeat the exact fill without electricity.",
    features: [
      "50 ml – 1000 ml range",
      "Volume set screw",
      "SS 304 piston cylinder",
      "Zero power operation",
    ],
    applications: ["Sauces & syrups", "Sanitizers", "Small-batch bottling"],
    image: machineManualFilling,
  },
  {
    name: "FizzTech SF-12",
    series: "Soda Filling Machine",
    category: "Carbonation",
    output: "1,200 – 4,000 BPH",
    heads: "8 / 12 / 18 head",
    power: "2 – 5 HP",
    description:
      "Counter-pressure filler engineered to hold carbonation in the bottle — minimal foaming, consistent fill height, and crown or ROPP sealing.",
    features: [
      "Counter-pressure filling",
      "Low-foam fill valves",
      "Crown / ROPP capping",
      "CIP-ready pipeline",
    ],
    applications: ["Soda & soft drinks", "Flavoured water", "Energy drinks"],
    image: machineSodaFilling,
  },
  {
    name: "JetWash JR-90",
    series: "Jar Rinsing Machine",
    category: "Washing",
    output: "60 – 250 jars/hr",
    heads: "2 / 4 / 6 station",
    power: "1 – 3 HP",
    description:
      "Semi and fully automatic 20-litre jar washer with brush scrubbing, hot-water rinse, and sanitizer dosing before the filling stage.",
    features: [
      "Inside & outside brushing",
      "Hot water + sanitizer rinse",
      "Timer-controlled cycles",
      "Drain & recirculation tank",
    ],
    applications: [
      "20 L jar plants",
      "Water distributors",
      "Bulk water suppliers",
    ],
    image: machineJarRinsing,
  },
];
