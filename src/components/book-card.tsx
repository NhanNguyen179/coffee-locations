import React from 'react';
import Image from "next/image";

import {
    Typography,
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";
  
  interface BookCardProps {
    img: string;
    title: string;
    desc: string;
    category: string;
    price: string;
    offPrice?: string;
  }
  
  export function BookCard({
    img,
    category,
    title,
    desc,
    price,
    offPrice,
  }: BookCardProps) {
    return (
      <Card color="transparent" shadow={false} placeholder={undefined}>
        <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6"  placeholder={undefined}>
          <Image
            width={768}
            height={768}
            src={img}
            alt={title}
            className="h-full w-full scale-[1.1] object-cover object-center"
          />
        </CardHeader>
        <CardBody className="p-0" placeholder={undefined}>
          <Typography color="blue" className="mb-2 text-xs !font-semibold" placeholder={undefined}>
            {category}
          </Typography>
          <a href="#">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bold normal-case xl:w-64" placeholder={undefined}            >
              {title}
            </Typography>
          </a>
          <Typography className="mb-4 font-normal !text-gray-500" placeholder={undefined}>
            {desc}
          </Typography>
          <div className="flex gap-2">
            <Typography
              variant="h5"
              color="blue-gray"
              className={offPrice ? "line-through" : ""}  placeholder={undefined}            >
              {price}
            </Typography>
            <Typography variant="h5" color="red"  placeholder={undefined}>
              {offPrice}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }
export default BookCard