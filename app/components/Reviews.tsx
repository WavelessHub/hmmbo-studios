"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { reviews } from "@/app/constants/reviews";
import Link from "next/link";
import Image from "next/image";

import { NextPage } from "next";

const Reviews: NextPage = ({}) => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 5,
      spacing: 20,
    },
  });

  return (
    <div className="w-full flex flex-col">
      {/* Heading */}
      <div className="mt-28 m-20 text-center">
        <p className="font-bold text-4xl md:text-5xl text-secondary-gradient">
          Real Feedback From Real Users
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden">
        <div ref={sliderRef} className="keen-slider px-4">
          {/* Promo Card */}
          <CarouselSlide>
            <PromoReviewCard />
          </CarouselSlide>

          {/* User Reviews */}
          {reviews.map((review, idx) => (
            <CarouselSlide key={idx}>
              <ReviewCard {...review} />
            </CarouselSlide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const CarouselSlide = ({ children }: { children: React.ReactNode }) => (
  <div className="keen-slider__slide !w-auto min-w-[300px] flex justify-center">
    {children}
  </div>
);

interface ReviewCardProps {
  text: string;
  name: string;
  avatarUrl?: string;
  reviewLink?: string;
  reviewImageUrl?: string;
}

const ReviewCard = ({
  text,
  name,
  avatarUrl,
  reviewLink,
  reviewImageUrl,
}: ReviewCardProps) => {
  return (
    <div className="w-80 h-[22rem] rounded-lg p-6 border border-white bg-[#1A1919] flex flex-col justify-between text-white space-y-6">
      {/* Review Text */}
      <p className="text-base leading-relaxed">{text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Avatar & Name */}
        <div className="flex items-center space-x-4">
          {avatarUrl ? (
            <Image
              alt={name}
              src={avatarUrl}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white" />
          )}
          <span className="font-bold text-primary text-lg">{name}</span>
        </div>

        {/* Review Link */}
        {reviewLink && reviewImageUrl ? (
          <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={reviewImageUrl}
              alt="Review"
              width={32}
              height={24}
              className="w-8 h-6 object-contain rounded-sm hover:opacity-80 transition"
            />
          </Link>
        ) : (
          <div className="w-8 h-6 bg-gray-300 rounded-sm" />
        )}
      </div>
    </div>
  );
};

const PromoReviewCard = () => {
  return (
    <div className="w-80 h-[22rem] rounded-lg p-6 border border-white bg-[#1A1919] text-primary flex flex-col items-center justify-center text-center space-y-2">
      {/* Sales & Downloads */}
      <div className="text-white space-y-4">
        <div>
          <div className="text-3xl font-bold">1,000+</div>
          <div className="text-lg font-semibold text-green-400">Sales</div>
        </div>
        <div>
          <div className="text-4xl font-bold">20,000+</div>
          <div className="text-lg font-semibold text-blue-400">Downloads</div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-sm text-zinc-300 max-w-[14rem]">
        Trusted by developers and admins worldwide.
      </div>
      <div className="text-xs text-zinc-500 max-w-[12rem]">
        Based on real user reviews and feedback.
      </div>
    </div>
  );
};
