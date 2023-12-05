import Image from "next/image";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Icon from "../../public/logo.svg";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) redirect("/dashboard/home");

  return (
    <main className="background-animate flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-grayPrimary  to-greenAccent  text-white">
      <div className="relative bg-cover bg-center bg-no-repeat">
        <div className="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
          <div className="background-animate glass z-10 hidden flex-col self-center rounded-3xl rounded-r-none p-10  sm:max-w-5xl lg:flex xl:max-w-2xl">
            <div className="hidden flex-col  self-start  text-white lg:flex">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={Icon}
                alt="j"
                className="background-animate glass mb-7 animate-[spin_1s_ease-in-out] rounded-full p-4 text-black transition-all"
              />
              <h1 className="mb-3 text-7xl font-bold">
                Color{" "}
                <span className="glass rounded-lg bg-gray-200 px-2 text-greenAccent">
                  Unit
                </span>
              </h1>
              <p className="pr-3 text-whitePrimary/80">
                ¡Bienvenido a Color Unit! Gestiona, mezcla y crea una paleta
                infinita de colores en nuestra fábrica de pintura. Accede ahora
                para dar vida a tu creatividad cromática.
              </p>
            </div>
          </div>
          <div className="z-10 flex justify-center  self-center">
            <div className="w-100 mx-auto rounded-2xl bg-white p-12 ">
              <div className="mb-4">
                <h3 className="text-2xl  font-semibold text-gray-800">
                  Iniciar sesion
                </h3>
                <p className="text-gray-500">
                  Por favor inicia sesión en tu cuenta.
                </p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-gray-700">
                    Correo
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-4 py-2  !text-graySecondary focus:border-accent focus:outline-none"
                    type="email"
                    placeholder="ingresa tu correo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                    Contraseña
                  </label>
                  <input
                    className="w-full content-center rounded-lg border border-gray-300 px-4 py-2  !text-graySecondary focus:border-accent focus:outline-none"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-blue-500 focus:ring-blue-400"
                    />
                    <label className="ml-2 block text-sm text-gray-800">
                      Recuredame
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-graySecondary/75 hover:text-accent"
                    >
                      Olvide mi contraseña
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full cursor-pointer justify-center  rounded-full bg-accent/70 p-3  font-semibold tracking-wide text-gray-100  shadow-lg transition duration-300 ease-in hover:bg-accent"
                  >
                    Iniciar
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <Link
                    href={"/api/auth/signin/google"}
                    className="btn flex gap-2 rounded-lg px-4 py-2 font-semibold text-graySecondary/50 transition duration-150 hover:bg-whitePrimary hover:text-grayPrimary hover:shadow   "
                  >
                    <Image
                      className="h-6 w-6"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                      width={10}
                      height={10}
                    />{" "}
                    Continuar con Google
                  </Link>
                </div>
              </div>
              <div className="pt-5 text-center text-xs text-gray-400">
                <span>
                  Copyright © 2023-2024
                  <a
                    href="https://github.com/julio-ccatb"
                    rel=""
                    target="_blank"
                    title="JCodea"
                    className="text-green hover:text-accent "
                  >
                    JCCA
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
