import React from "react";
import "./surat.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/es/index";

export const Surat = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const paragraph = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 5,
      transition: {
        delay: 0.05,
        type: "spring",
        damping: 100,
        mass: 20,
      },
    },
  };
  return (
    <div>
      <div>
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={paragraph}>
            <div class="con">
              <div
                class="text-lg text-dark-500 text-center font-semibold mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir.”
              </div>
              <div class="qs" data-aos="fade-up" data-aos-duration="1200">
                QS. Ar-Rum (30): 21
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};
