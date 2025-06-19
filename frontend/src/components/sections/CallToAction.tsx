"use client";
import React from "react";
import { useRef } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function CallToAction() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { currentUser } = useAuth();

  if (currentUser) {
    return (
      <div className="max-w-[500px] mx-auto w-full">
        <Link href={"/dashboard"}>
          <Button full dark text="Go to Dashboard" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
      <Button text="Learn more" onClick={scrollToAbout} />
      <Link href={"/dashboard"}>
        <Button text="Login" dark />
      </Link>
    </div>
  );
}
