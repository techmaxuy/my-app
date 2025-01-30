import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { lusitana } from "../components/shared/fonts";
import AppLogo from "../components/shared/app-logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
         <div className="flex h-20 shrink-0 items-center rounded-lg p-4 md:h-40 bg-secondary">
           <AppLogo />
         </div>
         <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
           <div className="flex flex-col justify-center gap-6 rounded-lg  px-6 py-10 md:w-2/5 md:px-20">
             <p
               className={`${lusitana.className} text-xl md:text-3xl md:leading-normal`}
             >
               <strong>Welcome to Next 15 Admin Dashboard.</strong>
             </p>

             <Link href="/login">
               <span>Log in</span> <ArrowRightIcon className="w-6" />
             </Link>
           </div>
           <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
             <Image
               src="../public/hero-desktop.png"
               width={1000}
               height={760}
               alt="Screenshots of the dashboard project showing desktop version"
               className="hidden md:block"
             />
             <Image
               src="../public/hero-mobile.png"
               width={560}
               height={620}
               alt="Screenshot of the dashboard project showing mobile version"
               className="block md:hidden"
             />
           </div>
         </div>
       </main>
  );
}
