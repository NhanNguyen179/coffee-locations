"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Cà phê",
    desc: "Coffee",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Spa",
    desc: "",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Hotel",
    desc: "",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Địa điểm nổi tiếng",
    desc: "Famous Place",
  },
];

export function TopBookCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3" placeholder={undefined}>
          Tìm kiếm nhiều nhất
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center" placeholder={undefined}        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full" placeholder={undefined}>
            <Typography color="white" className="text-xs font-bold opacity-50" placeholder={undefined}>
              up to 40% OFF
            </Typography>
            <Typography variant="h4" className="mt-9" color="white" placeholder={undefined}>
              Bestselling Books
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50" placeholder={undefined}            >
              Explore our extensive collection of textbooks, workbooks, novels,
              and more. From preschool to post-grad, we have books for every age
              and academic level.
            </Typography>
            <Button size="sm" color="white" placeholder={undefined}>
              Read More
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
