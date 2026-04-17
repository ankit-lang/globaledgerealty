import React, { useEffect, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const WhatsAppPopup: React.FC = () => {
      const [visible, setVisible] = useState(false);

      useEffect(() => {
            const timer = window.setTimeout(() => setVisible(true), 900);
            return () => window.clearTimeout(timer);
      }, []);

      if (!visible) return null;

      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none sm:items-center sm:p-8">
                  <div className="pointer-events-auto w-full max-w-md rounded-[28px] border border-white/15 bg-[#020202]/90 p-6 shadow-[0_35px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl ring-1 ring-white/10 animate-fade-in">
                        <div className="flex items-start justify-between gap-4">
                              <div>
                                    <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Stay Connected</p>
                                    {/* <h2 className="mt-2 text-3xl font-semibold text-white">Exclusive WhatsApp Support</h2> */}
                              </div>
                              <button
                                    onClick={() => setVisible(false)}
                                    className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                                    aria-label="Close WhatsApp popup"
                              >
                                    <X size={18} />
                              </button>
                        </div>

                        <div className="mt-5 grid gap-4 text-white/85">
                              {/* <p className="text-sm leading-7">
                                    Connect instantly with our Dubai luxury sales team for VIP property details, exclusive offers and immediate support.
                              </p> */}

                              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                                          <a href="https://wa.me/919811669862"
                                                target="_blank"
                                                rel="noreferrer">
                                    <div className="flex items-center gap-3 text-white">


                                      
                                         

                                          <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/15 text-emerald-300">
                                                <MessageSquare size={20} />
                                          </span>
                                          <div>
                                                <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">Contact now</p>
                                                <p className="text-base font-medium">+91 98116 69862</p>
                                          </div>
                                    </div>
                                          </a>
                              </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                              {/* <a
                                   
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300 sm:w-auto"
                              >
                                    Start VIP WhatsApp Chat
                              </a> */}
                              {/* <a
                                    href="tel:+919811669862"
                                    className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-emerald-300 hover:text-emerald-200 sm:w-auto"
                              >
                                    Call Dubai Support
                              </a> */}
                        </div>
                  </div>
            </div>
      );
};

export default WhatsAppPopup;
