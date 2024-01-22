import React from "react";
import { basicFeatures, premiumFeatures, standardFeatures } from "./types";
import { PricingCard } from "./PriceCard";
export default function PricingCards() {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mx-auto">
      <PricingCard title="Basic" isActive={false} price={20} features={basicFeatures} url="https://rapidapi.com/glennincodes/api/mediaglens/pricing" />
      <PricingCard title="Standard"  isActive={true} price={30} features={standardFeatures} url="https://rapidapi.com/glennincodes/api/mediaglens/pricing" />
      <PricingCard title="Premium" isActive={true} price={50} features={premiumFeatures} url="https://rapidapi.com/glennincodes/api/mediaglens/pricing" />
    </div>
  );
}