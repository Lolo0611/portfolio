"use client"

import {
  Button,
  ButtonVariants,
  SectionTitle,
  SectionTitleVariants,
} from "@/app/_components"

export const ExperiencesSection = () => {
  return (
    <section>
      <div className="bg-purple py-8 text-white">
        <div className={"mt-2 text-center"}>
          <SectionTitle
            title="Portfolio"
            subTitle="Mes derniers projets"
            variant={SectionTitleVariants.DARK_BACKGROUND}
          />
        </div>
        <div className="container mx-auto my-12 flex flex-col items-start md:flex-row">
          <div className="sticky mt-2 flex w-full flex-col px-8 md:mt-12 lg:w-1/3">
            <p className="tracking-loose text-yellow-300 uppercase">
              Working Process
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Working Process of Fest
            </p>
            <p className="mb-4 text-sm text-gray-50 md:text-base">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>

            <Button
              onClick={() => console.log("download CV")}
              variant={ButtonVariants.SECONDARY}
            >
              Télécharger CV
            </Button>
          </div>
          <div className="sticky ml-0 md:ml-12 lg:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="wrap relative h-full overflow-hidden p-10">
                <div className="border-2-2 border-yellow-555 border-#FFC100 absolute right-1/2 h-full rounded-xs border-2"></div>
                <div className="border-2-2 border-yellow-555 border-#FFC100 absolute left-1/2 h-full rounded-xs border-2"></div>
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      1-6 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-opacity-100 text-sm leading-snug text-gray-50 md:text-base">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :)
                    </p>
                  </div>
                </div>
                <div className="right-timeline mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      6-9 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-opacity-100 text-sm leading-snug text-gray-50 md:text-base">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      {" "}
                      10 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-opacity-100 text-sm leading-snug text-gray-50 md:text-base">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div className="right-timeline mb-8 flex w-full items-center justify-between">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">
                      12 May, 2021
                    </p>
                    <h4 className="mb-3 text-left text-lg font-bold md:text-2xl">
                      Prize Distribution
                    </h4>
                    <p className="text-opacity-100 text-sm leading-snug text-gray-50 md:text-base">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
