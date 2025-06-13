"use client";

import RuixenCard01 from "@/components/Cards/card-01";
import RuixenCard02 from "../components/Cards/card-02";
import RuixenCard03 from "@/components/Cards/card-03";
import SocialPostCard from "@/components/Cards/card-04";

const Page = () => {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full">
          <RuixenCard01 />
        </div>
        <div className="w-full">
          <RuixenCard02 />
        </div>
        <div className="w-full">
          <RuixenCard03 />
        </div>
        <div className="w-full">
          <SocialPostCard />
        </div>
      </div>
    </main>
  );
};

export default Page;
