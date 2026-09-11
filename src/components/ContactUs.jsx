import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      

      <main>
        <section id = "contact-us" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1380px]">

            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-[#d8e6fe] bg-[#eef4ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
  Contact Us
</p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0a1128] sm:text-5xl">
                Let’s Talk About Your Business.
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
                Have questions about Sandesa? Get in touch with our team and
                discover how we can help your business grow.
              </p>
            </div>

            {/* Contact Form */}
            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-7">

              <form className="space-y-6">

                {/* Name */}
                <div>
                  <label className="mb-2.5 block text-[15px] font-semibold text-[#334155]">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="h-14 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 text-[15px] text-[#0a1128] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2.5 block text-[15px] font-semibold text-[#334155]">
                    Phone
                  </label>

                  <div className="flex h-14 w-full overflow-hidden rounded-xl border border-[#e2e8f0] bg-white transition-all duration-200 focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-blue-100">

                    <div className="flex items-center border-r border-[#e2e8f0] px-4 text-[15px] font-medium text-[#334155]">
                      +91
                    </div>

                    <input
                      type="tel"
                      placeholder="Your mobile number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                      className="h-full flex-1 border-0 bg-transparent px-4 text-[15px] text-[#0a1128] outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2.5 block text-[15px] font-semibold text-[#334155]">
                    Email{" "}
                    <span className="font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <input
                    type="email"
                    placeholder="Your email address"
                    className="h-14 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 text-[15px] text-[#0a1128] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2.5 block text-[15px] font-semibold text-[#334155]">
                    Message
                  </label>

                  <textarea
                    placeholder="How can we help you?"
                    rows="6"
                    required
                    className="w-full resize-none rounded-xl border border-[#e2e8f0] bg-white px-4 py-4 text-[15px] text-[#0a1128] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Submit */}
                <button
  type="submit"
  className="w-full rounded-xl bg-[#2563eb] py-3 text-[13.5px] font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_10px_26px_rgba(37,99,235,0.36)] active:scale-95"
>
  Submit
</button>

              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;