import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      {/* ABOUT SECTION */}
      <h1 className="text-3xl font-semibold text-center mx-auto pt-8">
        <Title text1={"ABOUT "} text2={"US"} />
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto px-4">
        A visual collection of our most recent works - each piece crafted with
        intention, emotion and style.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        <img
          className="max-w-sm w-full rounded-xl h-auto"
          src={assets.about_img}
          alt=""
        />

        <div className="px-4 md:px-0">
          <h1 className="text-3xl font-semibold">Our Latest features</h1>
          <p className="text-sm text-slate-500 mt-2">
            Ship Beautiful Frontends Without the Overhead — Customizable,
            Scalable and Developer-Friendly UI Components.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Lightning-Fast Performance
                </h3>
                <p className="text-sm text-slate-500">
                  Built with speed — minimal load times and optimized.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Beautifully Designed Components
                </h3>
                <p className="text-sm text-slate-500">
                  Modern, pixel-perfect UI components ready for any project.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">
                  Plug-and-Play Integration
                </h3>
                <p className="text-sm text-slate-500">
                  Simple setup with support for React, Next.js and Tailwind css.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-3xl font-semibold py-4 text-center">
        <Title text1={"Why "} text2={"Choose Us"} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-6 text-sm mb-20 px-4 md:px-0">
        <div className="border rounded-lg px-6 py-8 md:px-10 flex-1 flex flex-col gap-3 text-center md:text-left">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Zara is another popular fashion brand that’s branched out to offer
            their own branded shopping app...
          </p>
        </div>

        <div className="border rounded-lg px-6 py-8 md:px-10 flex-1 flex flex-col gap-3 text-center md:text-left">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Zara is another popular fashion brand that’s branched out to offer…
          </p>
        </div>

        <div className="border rounded-lg px-6 py-8 md:px-10 flex-1 flex flex-col gap-3 text-center md:text-left">
          <b>Exceptional Customer Services:</b>
          <p className="text-gray-600">
            Zara is another popular fashion brand that’s branched out to offer…
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
