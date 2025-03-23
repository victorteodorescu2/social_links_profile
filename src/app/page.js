import Image from "next/image";
import Button from "@/auxiliary/components/button";

export default function Home() {
  return (
    <section className="bg-design-grey-800 flex flex-col gap-[24px] p-[40px] rounded-[12px] w-full max-w-[384px] min-w-fit items-center">
      <Image
        className="rounded-full"
        alt=""
        src="/avatar-jessica.jpeg"
        width={88}
        height={88}
      />
      <div className="flex flex-col gap-[4px]">
        <p className="text-preset1 text-design-white">Jessica Randall</p>
        <p className="text-preset2-bold text-design-green">
          London, United Kingdom
        </p>
      </div>
      <p className="text-preset2 text-design-white">
        "Front-end developer and avid reader."
      </p>
      <Button text="GitHub" href="https://www.github.com" />
      <Button text="Frontend Mentor" href="https://www.frontendmentor.io/" />
      <Button text="LinkedIn" href="https://www.linkedin.com/" />
      <Button text="Twitter" href="https://x.com/" />
      <Button text="Instagram" href="https://www.instagram.com/" />
    </section>
  );
}
