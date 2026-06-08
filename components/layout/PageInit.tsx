"use client";

import { useEffect } from "react";
import { useLoading } from "@/components/providers/LoadingProvider";

export default function PageInit() {
  const { setLoaded } = useLoading();
  useEffect(() => { setLoaded(); }, [setLoaded]);
  return null;
}
