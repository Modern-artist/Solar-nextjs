import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Why We're Your Choice"
              paragraph=""
              mb="44px"
            />
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[520px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dunamis Solar Energy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We&apos;re Dunamis Solar. Energy - the go-to solar permitting company for installers all across the
                  USA. Our mission? To make solar installation smoother, easier, and faster for everyone
                  involved.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Value
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We&apos;re not your average solar permitting company. We&apos;re the best because we excel in navigating the solar industry intricacies. From complex regulations to swift permit approvals, we streamline processes, leaving you to focus on installing solar panels while we manage the paperwork.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our mission is simple
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  to revolutionize the way solar projects are permitted in the USA.
                  We&apos;re here to break down barriers, cut through red tape, and make solar energy more
                  accessible to everyone. Because we believe that a brighter, cleaner future is within reach -
                  and we&apos;re committed to making it a reality, one permit at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
