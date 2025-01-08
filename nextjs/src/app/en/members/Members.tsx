'use client'
import React, { useEffect, useState } from "react";
import { members } from "@/app/constants/membersData";
import MemberCard from "@/app/components/MemberCard";

const Members = () => {
  const [currentMember, setCurrentMember] = useState(members[0]);

  useEffect(() => {
    window.scrollTo(0, 1);
  }, );

  return (
    <main
      id="members"
      className="px-4 py-8 lg:px-16 lg:pb-32 pt-32 bg-black text-white gradient-sm md:gradient-md lg:gradient"
    >
      <div className="flex flex-col justify-center items-center max-container">
        <div className="pb-32">
          <h1 className="heading-text">
            Galactico
          </h1>
        </div>

        {currentMember && (
          <div className="flex w-full flex-col xl:flex-row justify-center items-start gap-16 mt-16">
            <div className="flex flex-col gap-8 flex-1 mx-auto">
              <h2 className="font-palanquin font-bold text-2xl xl:text-3xl">
                {currentMember.name}
                {currentMember.nickname_en && <span> ({currentMember.nickname_en})</span>}
              </h2>
              <div className="data flex flex-col justify-start items-start gap-2">
                {/* <div className="flex flex-row justify-start gap-4">
                  <p className="pill">{currentMember.weight} kg</p>
                  <p className="pill">{currentMember.category}</p>
                </div> */}
                <p className="">Weight category: {currentMember.weight} kg</p>
                <p className="">Age category: {currentMember.category}</p>
                <div className="flex flex-row justify-start gap-3">
                  <div className="flex flex-row">
                    <img
                      className="w-8 lg:w-10 h-auto mr-2"
                      src="/icons/medal.svg"
                      alt="POWERLIFTING MEDAL ICON"
                    />
                    <p>
                      Years: {currentMember.years_competing}
                    </p>
                  </div>
                  {currentMember.records > 0 && (
                    <div className="flex flex-row">
                      <img
                        className="w-8 lg:w-10 h-auto mr-2"
                        src="/icons/trophy-yellow.svg"
                        alt="POWERLIFTING TROPHY ICON"
                      />
                      <p>Records: {currentMember.records}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-row justify-start gap-2">
                  <a href={currentMember.ig} target="_blank" rel="noreferrer">
                    <img
                      className="w-8 lg:w-10 h-auto"
                      src="/icons/ig-white.svg"
                      alt="POWERLIFTING CLUB IG"
                    />
                  </a>
                  <a href={currentMember.ipf} target="_blank" rel="noreferrer">
                    <img
                      className="w-8 lg:w-10 h-auto"
                      src="/icons/trophy.svg"
                      alt="POWERLIFTING CLUB TROPHY"
                    />
                  </a>
                </div>
                <p className="mt-4 max-w-lg" dangerouslySetInnerHTML={{ __html: currentMember.description_en }} />
              </div>
            </div>
            {currentMember.imgUrl && (
              <div className="w-full flex flex-row justify-center items-center flex-1">
                <img
                  className="object-cover w-full max-w-2xl max-h-[60vh] mx-auto rounded-md"
                  src={currentMember.imgUrl}
                  alt="Slika clana powerlifting kluba"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-28 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              imgUrl={member.imgUrl}
              name={member.name}
              isCurrent={currentMember === member}
              onClick={() => setCurrentMember(member)}
            >
            </MemberCard>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Members;
