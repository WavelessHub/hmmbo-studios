import { NextPage } from "next";

import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <div className="w-full bg-transparent text-center text-zinc-300 py-10">
      <div className="w-full h-[1.5px] bg-zinc-400 mb-10" />

      <div className="text-sm">
        Copyright © 2025 Hmmbo Studios &#8208; All rights reserved
        <br />
        Hmmbo Studios is not affiliated with Minecraft or Mojang AB
      </div>

      <div className="flex justify-center gap-6 mt-4 text-base font-medium">
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>

        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>

        <Link href="/support" className="hover:underline">
          Support
        </Link>

        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>

      <div className="flex justify-center gap-6 mt-4 text-zinc-300">
        {/* Discord */}
        <Link
          href="https://discord.gg/yourserver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 fill-[#d4d4d8]"
            viewBox="0 0 50 50"
          >
            <path d="M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z"></path>
          </svg>
        </Link>

        {/* X */}
        <Link
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="w-7 h-7 fill-[#d4d4d8]"
          >
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </Link>

        {/* Instagram */}
        <Link
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-7 h-7 fill-[#d4d4d8]"
          >
            <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
