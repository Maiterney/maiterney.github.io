"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { motion } from "framer-motion"

export function About() {
    const { t } = useLanguage()

    return (
        <section id="about" className="container py-24 sm:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
            >
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    {t.about.title}
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {t.about.description}
                </p>
            </motion.div>
        </section>
    )
}
