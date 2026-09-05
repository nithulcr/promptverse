"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/useLenis";
import CustomCursor from "@/components/CustomCursor";

export default function Type() {
  useLenis();
  return (
    <>
      <CustomCursor />
      <Navbar />
    </>
  );
}
