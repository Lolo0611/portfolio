import { SectionTitle } from "@/app/_components"
import LinkedinIcon from "@/public/linkedinIcon.svg"
import Image from "next/image"
import { MailIcon, MapPin, PhoneIcon } from "lucide-react"
import { id } from "@/app/_components/navigation/section"

export const ContactSection = () => {
  return (
    <section id={id.CONTACT} className="bg-very-light-purple px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center text-gray-700">
          <SectionTitle title={"CONTACT"} subTitle={"RESTONS EN CONTACT"} />
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-12 md:flex-row">
          {/* LEFT - Infos */}
          <div className="flex flex-1 flex-col gap-6 text-gray-700">
            <h3 className="text-xl font-semibold">Laissez-moi un message</h3>

            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere tellus nulla, ac gravida arcu lacinia eget.
              Maecenas hendrerit vel nulla sit amet tempor.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <a href="#" className="hover:text-purple flex items-center gap-3">
                <Image
                  src={LinkedinIcon}
                  width={20}
                  height={20}
                  alt="LinkedIn"
                />
                <span>Mon LinkedIn</span>
              </a>

              <a
                href="tel:0600000000"
                className="hover:text-purple flex items-center gap-3"
              >
                <PhoneIcon size={18} />
                <span>06 00 00 00 00</span>
              </a>

              <a
                href="mailto:contact@email.com"
                className="hover:text-purple flex items-center gap-3"
              >
                <MailIcon size={18} />
                <span>contact@email.com</span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Formulaire */}
          <div className="flex-1 rounded-2xl bg-white p-6 shadow-md">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-700">Nom</label>
                <input
                  type="text"
                  className="focus:ring-purple focus:border-purple w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 focus:ring-2 focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  className="focus:ring-purple focus:border-purple w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 focus:ring-2 focus:outline-none"
                  placeholder="Votre email"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="focus:ring-purple focus:border-purple w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 focus:ring-2 focus:outline-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="bg-purple hover:bg-opacity-90 rounded-lg py-2 text-white transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
