import Image from "next/image";
import { arrImages } from "../data/data-actions";
import { H1 } from "../ui/h1";

export function Actions() {
  return (
    <section className="max-w-maxWidth mx-auto px-2 sm:px-10 bg-[#]">
      <H1>Акции</H1>
      <div
        className="grid grid-cols-1 gap-10
                      md:grid-cols-2"
      >
        {arrImages?.map((item) => {
          return (
            <div
              className="border-1 shadow-lg rounded-lg my-5
                            2xl:p-5 3xl:p-10"
              key={item.id}
            >
              <div
                className="flex flex-col-reverse justify-center gap-3 pb-2
                          lg:flex-row  lg:pb-0
                          2xl:flex-col-reverse"
              >
                <div className="text-center px-2 md:px-4 lg:pb-2">
                  <h2
                    className="text-2xl font-semibold text-gray-600 mt-5 mb-5
                                  sm:text-3xl md:text-3xl"
                  >
                    {item.title}
                  </h2>
                  <div
                    className="text-lg font-light text-left ml-0
                                xl:ml-12"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                  <div className="mt-4">{item.ps}</div>
                </div>
                <div className="h-[200px] max-h-[700px] sm:h-[350px] w-full max-w-[500px] mx-auto relative">
                  <Image
                    src={item.img}
                    fill
                    alt={item.title}
                    className="object-cover w-full h-full rounded-t-lg 
                                lg:rounded-tl-none lg:rounded-r-lg
                                2xl:rounded-none"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
