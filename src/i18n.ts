import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // โหลดไฟล์ /locales/{{lng}}.json จาก public
  .use(Backend)
  // ตรวจจับภาษา โดยอ่าน/เขียนที่ localStorage คีย์ "lang"
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "jp",            // ภาษาสำรอง
    debug: false,
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    backend: {
      // เส้นทางไฟล์แปล (อยู่ใต้ "public")
      loadPath: "/locales/{{lng}}.json",
    },
    detection: {
      // ให้ตรวจจาก localStorage ก่อน และใช้คีย์ "lang" (ให้ตรงกับที่คุณเซฟ)
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false, // ลดปัญหาหน้าค้างตอนโหลดครั้งแรก
    },
  });

export default i18n;
