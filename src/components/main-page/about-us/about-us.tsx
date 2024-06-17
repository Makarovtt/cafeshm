import { AboutUsText } from "./about-us-text";
import { MenuDemo } from "./menu-demo";
import { SliderActions } from "./slider-actions";

export function AboutUs() {
  return (
    <section>
      <div
        className="max-w-maxWidth w-full mx-auto mt-0 mb-20 flex flex-col-reverse justify-between items-start gap-20
                        2xl:flex-row 2xl:gap-20 2xl:my-20 2xl:px-20"
      >
        <div
          className="flex flex-col gap-10 mx-auto
                      lg:px-16
                          2xl:w-1/2"
        >
          <div className="px-4 lg:px-0">
            <AboutUsText />
          </div>
          <div
            className="flex justify-center 
                        lg:px-0
                            2xl:justify-start"
          >
            <MenuDemo />
          </div>
        </div>
        <div
          className="px-6 w-full
                        sm:px-[80px] 
                        2xl:w-1/2 "
        >
          <SliderActions />
        </div>
      </div>
    </section>
  );
}
