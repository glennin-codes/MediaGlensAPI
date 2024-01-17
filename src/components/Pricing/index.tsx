import React from "react";
import { basicFeatures, premiumFeatures, standardFeatures } from "./types";
import { PricingCard } from "./PriceCard";
export default function PricingCards() {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mx-auto">
      <PricingCard title="Basic" isActive={false} price={20} features={basicFeatures} />
      <PricingCard title="Standard"  isActive={true} price={30} features={standardFeatures} />
      <PricingCard title="Premium" isActive={true} price={50} features={premiumFeatures} />
    </div>
  );
}