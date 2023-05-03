import fcbook from "../../assets/icons/social_networks/fcbook.svg";
import instagram from "../../assets/icons/social_networks/instagram.svg";
import gmail from "../../assets/icons/social_networks/gmail.svg";
import whatsapp from "../../assets/icons/social_networks/whatsApp.svg";
import viber from "../../assets/icons/social_networks/viber.svg";
import telegram from "../../assets/icons/social_networks/telegram.svg";

export const social_networks = (url, text, title) => [
  {
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    img: fcbook,
  },
  {
    href: `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
    img: instagram,
  },
  {
    href: `https://mail.google.com/mail/u/0/?view=cm&to&su=${title}&body=${encodeURIComponent(
      url
    )}`,
    img: gmail,
  },
  {
    href: `https://wa.me/?text=${encodeURIComponent(url)}`,
    img: whatsapp,
  },
  {
    href: `viber://forward?text=${encodeURIComponent(url)}`,
    img: viber,
  },
  {
    href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`,
    img: telegram,
  },
];
