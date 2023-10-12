import Image from "next/image";
import Link from "next/link";
import Balancer, { Provider as BalancerProvider } from "react-wrap-balancer";

export default function Landing() {
  return (
    <div className="mx-auto w-full max-w-[90rem] px-6 py-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <BalancerProvider>
          <Balancer as="h1" className="text-4xl font-bold xs:text-5xl">
          Hello i'm{" "}
            <span className="inline-block bg-gradient-to-b from-red-500 to-red-600 bg-clip-text font-black text-transparent">
            L u c y ♡
            </span>
          </Balancer>
          <Balancer as="p">
          This is a multi-purpose bot that provides moderation and music features. It is designed to help you manage your server effectively.
          </Balancer>
        </BalancerProvider>
        <div className="mt-1 flex justify-center gap-2">
          <Link
            href="/invite"
            className="rounded-md bg-blue-600 px-3 py-2 text-white transition-all hover:-translate-y-1 hover:bg-blue-700 dark:text-inherit"
          >
            Add L u c y ♡ to your server
          </Link>
          <Link
            href="/docs"
            className="rounded-md bg-black px-3 py-2 text-white transition-all hover:-translate-y-1 hover:bg-neutral-700 dark:bg-white dark:text-black hover:dark:bg-neutral-300"
          >
            Learn more{" "}
          </Link>
        </div>
        <div className="p-1" />
        <div className="relative mx-auto">
            <Link
              href="https://youtube.com/@GraphifyStatistics"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[1.04rem] top-5 h-[90px] w-[90px] rounded-full"
            />
            <Link
              href="https://youtube.com/@GraphifyStatistics"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-36 top-6 h-[35px] w-[247px]"
            />
            <Image src="/landing.png" alt="Example" width={627} height={133} />
          </div>
        </div>
      </div>
  );
}
