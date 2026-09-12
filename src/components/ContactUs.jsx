import React from "react";

import { Mail, Phone } from "lucide-react";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      <main>
        <section
          id="contact-us"
          className="px-4 pb-0 pt-4 sm:px-6 sm:py-8 lg:px-8"
        >
          <div className="mx-auto w-full max-w-6xl">
            {/* Contact Us Heading */}
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2563eb] sm:text-[11px]">
                CONTACT US
              </span>
            </div>

            <div className="mt-4 text-center sm:mt-5">
              <h1 className="text-3xl font-bold tracking-tight text-[#0a1128] sm:text-4xl md:text-[42px] md:leading-[1.18]">
                Get in Touch
              </h1>
            </div>

            {/* Main Contact Section */}
            <div className="mt-6 grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div className="pt-0 sm:pt-2">
                <p className="mt-4 max-w-2xl text-[14px] leading-[1.65] text-[#64748b] sm:text-[15.5px]">
                  Get in touch with our team and discover how we can help your
                  business grow. Have questions about Sandesa?
                </p>

                {/* Contact Details */}
                <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
                  {/* Email */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.sandesaai@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[14px] text-[#64748b] transition-colors hover:text-[#0a1128] sm:text-[15px]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <Mail size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-[#0a1128]">Email</p>
                      <p className="break-all">contact.sandesaai@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919623095766"
                    className="flex items-center gap-3 text-[14px] text-[#64748b] transition-colors hover:text-[#0a1128] sm:text-[15px]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <Phone size={19} />
                    </div>

                    <div>
                      <p className="font-semibold text-[#0a1128]">Phone</p>
                      <p>+919623095766</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/showcase/sandesa-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[14px] text-[#64748b] transition-colors hover:text-[#0a1128] sm:text-[15px]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <FaLinkedinIn size={18} />
                    </div>

                    <div>
                      <p className="font-semibold text-[#0a1128]">LinkedIn</p>
                      <p>Sandesa AI</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sandesa.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[14px] text-[#64748b] transition-colors hover:text-[#0a1128] sm:text-[15px]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <FaInstagram size={18} />
                    </div>

                    <div>
                      <p className="font-semibold text-[#0a1128]">
                        Instagram
                      </p>
                      <p>@sandesa.ai</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-6 lg:p-7">
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Your message has been submitted successfully!");
                    e.target.reset();
                  }}
                >
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#334155] sm:mb-2.5 sm:text-[15px]">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                      className="h-10 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 text-[14px] text-[#0a1128] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 sm:h-12 sm:text-[15px]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#334155] sm:mb-2.5 sm:text-[15px]">
                      Phone
                    </label>

                    <div className="flex h-10 w-full overflow-hidden rounded-xl border border-[#e2e8f0] bg-white transition-all duration-200 focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100 sm:h-12">
                      <div className="flex items-center border-r border-[#e2e8f0] px-3 text-[14px] font-medium text-[#334155] sm:px-4 sm:text-[15px]">
                        +91
                      </div>

                      <input
                        type="tel"
                        placeholder="Your mobile number"
                        maxLength="10"
                        pattern="[0-9]{10}"
                        required
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                        className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 text-[14px] text-[#0a1128] outline-none placeholder:text-slate-400 sm:px-4 sm:text-[15px]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#334155] sm:mb-2.5 sm:text-[15px]">
                      Email{" "}
                      <span className="font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <input
                      type="email"
                      placeholder="Your email address"
                      className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 text-[14px] text-[#0a1128] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 sm:h-14 sm:text-[15px]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#334155] sm:mb-2.5 sm:text-[15px]">
                      Message{" "}
                      <span className="font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <textarea
                      placeholder="How can we help you?"
                      rows="2"
                      className="w-full resize-none rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-[14px] text-[#0a1128] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 sm:py-4 sm:text-[15px]"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#2563eb] py-3 text-[13px] font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_10px_26px_rgba(37,99,235,0.36)] active:scale-95 sm:text-[13.5px]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;