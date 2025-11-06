'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Prevent SSR issues with reactjs-popup
const Popup = dynamic(() => import('reactjs-popup'), { ssr: false });

type TSval = {
  h: string;
  p: string;
  l11: string;
  l12: string;
  l21: string;
  l22: string;
  a: string; // link for l11
};

type RegistrationPopupProps = {
  open: boolean;
  onClose: () => void;
  tSwal: TSval;
  confirmText?: string; // defaults to "Ide gas"
};

const RegistrationPopup: React.FC<RegistrationPopupProps> = ({ open, onClose, tSwal, confirmText = 'Ide gas' }) => {
  return (
    <Popup
      open={open}
      onClose={onClose}
      modal
      closeOnDocumentClick
      closeOnEscape
      lockScroll
      contentStyle={{ background: 'transparent', border: 'none', padding: '0.5rem' }}
      overlayStyle={{ background: 'rgba(0,0,0,0.5)', padding: 0 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="relative w-full max-w-xl bg-white text-gray-900 shadow-2xl"
      >
        {/* Watermark background (transparent logo over entire popup) */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden rounded-2xl">
          <Image
            src="/images/logo/plk-galacticos-logo-round.png"
            alt="" // decorative watermark
            fill
            priority
            className="object-contain opacity-10 scale-90"
            sizes="(max-width: 640px) 90vw, 40vw"
          />
        </div>

        {/* Content (above watermark) */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 id="popup-title" className="text-2xl font-semibold">
              {tSwal.h}
            </h3>
            <button
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-300"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <p className="text-left">{tSwal.p}</p>

            <div className="mt-4 mb-4">
              <ul className="ml-5 list-disc space-y-2">
                <li className="text-left">
                  {tSwal.l11}{' '}
                  <a
                    href={tSwal.a}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline-offset-2 hover:underline"
                  >
                    {tSwal.l12}.
                  </a>
                </li>
                <li className="text-left">
                  {tSwal.l21}{' '}
                  <a
                    href="https://www.instagram.com/plk.galacticos/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline-offset-2 hover:underline"
                  >
                    Instagram.
                  </a>{' '}
                  {tSwal.l22}
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t px-6 py-4">
            <button onClick={onClose} className="btn bg-logo-purple border-0 hover:bg-purple-800">
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default RegistrationPopup;
