"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRedirectAfterSomeSeconds(
  redirectTo: string,
  seconds = 5,
) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining === 0) void router.push("/dashboard/home");

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1) void router.push(redirectTo);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, redirectTo]);

  return { secondsRemaining };
}
