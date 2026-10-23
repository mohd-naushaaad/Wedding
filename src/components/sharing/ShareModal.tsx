import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, MessageCircle, Copy, Check, X, Sparkles } from 'lucide-react';
import { weddingConfig } from '../../config/wedding';
import { IslamicBorder } from '../ui/IslamicBorder';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { share, couple } = weddingConfig;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : share.publicUrl;
  const fullShareText = `${share.defaultMessage} ${currentUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(fullShareText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: share.title,
          text: fullShareText,
          url: currentUrl
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleWhatsAppShare();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md relative"
          >
            <IslamicBorder variant="emerald" className="relative text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gold-400 hover:text-gold-200 transition-colors"
                aria-label="Close share dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-full border border-gold-400/40 flex items-center justify-center mx-auto bg-emerald-900/50 text-gold-300 shadow-gold-glow mb-4">
                <Share2 className="w-5 h-5" />
              </div>

              <span className="text-[11px] uppercase tracking-widest text-gold-400 font-serif block mb-1">
                Share The Joy
              </span>

              <h3 className="font-serif text-2xl text-gold-gradient font-bold mb-2">
                Invite Family &amp; Friends
              </h3>

              <p className="font-serif italic text-xs sm:text-sm text-ivory/80 mb-6 leading-relaxed">
                Forward this royal invitation to your loved ones on WhatsApp or copy the link directly.
              </p>

              {/* Message Preview Box */}
              <div className="p-3.5 rounded-xl bg-[#031713]/80 border border-gold-500/25 text-left text-xs font-sans text-ivory/80 mb-5 relative">
                <span className="text-[10px] uppercase tracking-wider text-gold-400/80 block font-serif mb-1 font-semibold">
                  Invitation Message Preview:
                </span>
                <p className="line-clamp-4 italic text-ivory/90">
                  "Assalamu Alaikum wa Rahmatullah! You are warmly invited by our family to celebrate the Nikah of {couple.brideName} and {couple.groomName}..."
                </p>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium text-sm flex items-center justify-center gap-2.5 shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Share on WhatsApp</span>
                </button>

                {typeof navigator !== 'undefined' && 'share' in navigator && (
                  <button
                    onClick={handleNativeShare}
                    className="w-full py-3 px-6 rounded-full bg-gold-500/15 hover:bg-gold-500/25 text-gold-300 border border-gold-500/40 font-serif uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>More Sharing Options</span>
                  </button>
                )}

                <button
                  onClick={handleCopyLink}
                  className="w-full py-3 px-6 rounded-full bg-white/5 hover:bg-white/10 text-ivory/80 border border-white/15 font-serif uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gold-400" />
                      <span>Copy Invitation Link</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-gold-400/60 font-sans mt-4">
                Tip: Configure your official domain URL in <code className="text-gold-300">src/config/wedding.ts</code> before sending.
              </p>
            </IslamicBorder>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
