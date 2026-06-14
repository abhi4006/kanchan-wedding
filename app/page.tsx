"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

import { ShehnaiPlayer } from "@/components/shehnai-player";
import { WeddingCountdown } from "@/components/wedding-countdown";

const MAP_URL = "https://maps.app.goo.gl/bt37KwPFbpvDZwzQ9";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="invitation-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <motion.article
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="invitation-card"
        style={{
          backgroundImage: `url("${BASE_PATH}/wedding-card-floral.jpeg")`
        }}
        aria-label="कंचन के परिवार की ओर से विवाह निमंत्रण"
      >
        <ShehnaiPlayer />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.35 }}
          className="invitation-content"
        >
          <motion.header variants={fadeUp} className="invitation-header">
            <p className="eyebrow">॥ श्री गणेशाय नमः ॥</p>
            <div className="title-row" aria-hidden="true">
              <span />
              <Sparkles />
              <span />
            </div>
            <p className="welcome">स्नेहिल आमंत्रण</p>
            <h1>शुभ विवाह</h1>
            <p className="invitation-copy">
              ईश्वर की असीम कृपा से हमारी सुपुत्री कंचन के मंगल परिणय पर
              <br />
              आप सपरिवार सादर आमंत्रित हैं
            </p>
          </motion.header>

          <motion.section variants={fadeUp} className="couple">
            <div className="person">
              <h2>कंचन</h2>
              <p>
                सुपुत्री श्री श्रीनाथ
                <br />
                एवं श्रीमती लालती देवी
              </p>
            </div>

            <div className="union" aria-label="संग">
              <span />
              <b>संग</b>
              <span />
            </div>

            <div className="person">
              <h2>अभिषेक</h2>
              <p>
                सुपुत्र श्री वेद पाल सिंह
                <br />
                एवं श्रीमती मीना
              </p>
            </div>
          </motion.section>

          <motion.div variants={fadeUp} className="date-block">
            <CalendarDays aria-hidden="true" />
            <div>
              <span>शुक्रवार • विवाह तिथि</span>
              <strong>03 जुलाई 2026</strong>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="countdown-wrap">
            <WeddingCountdown />
          </motion.div>

          <motion.section variants={fadeUp} className="schedule">
            <div className="schedule-item">
              <Clock3 aria-hidden="true" />
              <div>
                <span>बारात आगमन</span>
                <strong>सायं 7:00 बजे से</strong>
              </div>
            </div>
            <i aria-hidden="true" />
            <div className="schedule-item">
              <Clock3 aria-hidden="true" />
              <div>
                <span>प्रीति भोज</span>
                <strong>रात्रि 8:00 बजे</strong>
              </div>
            </div>
          </motion.section>

          <motion.p variants={fadeUp} className="vidai">
            विदाई • 04 जुलाई 2026 • तारों की छाँव में
          </motion.p>

          <motion.a
            variants={fadeUp}
            className="venue"
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="आनंदी होम्स बैंक्वेट का स्थान Google Maps पर खोलें"
          >
            <span className="venue-copy">
              <small>
                <MapPin className="venue-pin" aria-hidden="true" />
                विवाह स्थल
              </small>
              <strong>आनंदी होम्स बैंक्वेट</strong>
              <em>
                सी-4, केंद्रीय विहार के सामने, होशियारपुर गाँव,
                <br />
                सेक्टर 51, नोएडा, उत्तर प्रदेश – 201303
              </em>
            </span>
            <ArrowUpRight className="venue-arrow" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.article>
    </main>
  );
}
