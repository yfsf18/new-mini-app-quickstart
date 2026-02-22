"use client";
import { useEffect } from "react";
import sdk from "@farcaster/miniapp-sdk";
import { useMiniApp } from "./providers/MiniAppProvider";

export default function Home() {
  const { isReady } = useMiniApp();

  useEffect(() => {
    if (isReady) {
      sdk.actions.ready();
    }
  }, [isReady]);

  return (
    <iframe
      src="https://mice18.netlify.app/"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
    />
  );
}