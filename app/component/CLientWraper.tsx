// ClientWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const ServerComponent = dynamic(() => import('./ServerComp'), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

export default function ClientWrapper() {
  return <ServerComponent />;
}
