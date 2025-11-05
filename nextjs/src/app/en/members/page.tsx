import React from "react";
import { Metadata } from "next";
import Members from "./Members";

export const metadata: Metadata = {
    title: 'Powerlifting klub Galacticos - Members',
  };

const MembersPage = () => {

  return (
  <main>
    <Members></Members>
  </main>
  );
};

export default MembersPage;
