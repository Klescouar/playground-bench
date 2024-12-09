import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useT } from "talkr";
import Contacts from "../Contacts/Contacts";
import useDeviceType from "@/hooks/useDeviceType";

const paragraphsData = [
  "about.part1",
  "about.part2",
  "about.part3",
  "about.part4",
  "about.part5",
];

export const About: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const { T } = useT();
  const device = useDeviceType();
  const isMobile = device === "mobile";

  useEffect(() => {
    if (paragraphs.length === paragraphsData.length) return;

    const interval = setInterval(() => {
      setParagraphs((prev) => {
        if (prev.length === paragraphsData.length) {
          clearInterval(interval);
        }

        return [...prev, paragraphsData[prev.length]];
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [paragraphs]);

  return (
    <div className="About">
      <div className="About__Description">
        <h2 className="About__Description__Title">Hey 👋,</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="About__Description__Paragraph">
            {T(paragraph)}
          </p>
        ))}
        {isMobile && <Contacts />}
      </div>
      <div className="About__Picture">
        <Image
          className="About__Picture__Image"
          priority
          src="/about.png"
          alt="Picture of Le Scouarnec Kevin"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
