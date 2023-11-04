import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/logo.svg";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="from-grayPrimary to-greenAccent flex min-h-screen flex-col items-center justify-center bg-gradient-to-t  text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image src={Icon} alt="ColorUnit Logo" />
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Color <span className="text-greenAccent">Unit</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Primeros Pasos →</h3>
            <div className="text-lg">
              Empieza la configuracion inicial, te guiamos paso a paso.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentacion →</h3>
            <div className="text-lg">
              Aprende a usar Color Unit con nuestra documentacion.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
