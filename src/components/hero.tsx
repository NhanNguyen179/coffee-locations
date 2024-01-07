"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-[url('/image/background/da-nang-homebg.jpeg')] aspect-video bg-no-repeat bg-cover px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 text-2xl !leading-snug lg:mb-3 lg:text-5xl text-white" placeholder={undefined}          >
            Đà Nẵng City 
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 text-lg lg:text-2xl font-normal !text-gray-200 md:pr-16 xl:pr-28" placeholder={undefined}          >
            Chào mừng đến với ĐÀ NẴNG LOCATION - Nơi bạn dễ dàng tìm kiếm và khám phá các địa điểm phù hợp với nhu cầu cá nhân tại Đà Nẵng. Tận hưởng trải nghiệm du lịch và giải trí một cách thuận tiện nhất với sự hỗ trợ đắc lực từ chúng tôi!
          </Typography>
        </div>
        {/* <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-6">
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle8.svg"
              className="rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle9.svg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle10.svg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle11.svg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div></div>
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle12.svg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle13.svg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle14.svg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div> */}
      </div>
    </header>
  );
}
export default Hero;
