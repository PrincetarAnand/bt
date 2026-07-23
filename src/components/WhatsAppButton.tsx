import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919731181694";
const DEFAULT_MESSAGE =
  "Hi BTech Aqua, I'm interested in your RO water purifier systems. Please share more details.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BTech Aqua on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="size-5 fill-current" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
