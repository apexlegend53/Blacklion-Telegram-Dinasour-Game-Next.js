"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UnityPage() {
  const router = useRouter();

  useEffect(() => {
    const container = document.createElement("div");
    container.id = "unity-container";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100vh"; // Full viewport height
    document.body.appendChild(container);

    const iframe = document.createElement("iframe");
    iframe.src = "/unity-webgl/index.html" + window.location.search;
    iframe.style.border = "none";
    iframe.style.width = "1920px"; // Set width to 1920px
    iframe.style.height = "1080px"; // Set height to 1080px
    container.appendChild(iframe);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return null; // No UI for this page
}
