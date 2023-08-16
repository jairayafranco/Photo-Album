"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/gallery");
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}
