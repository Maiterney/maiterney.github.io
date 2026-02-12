"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"

const skills = [
    "Next.js", "React", "Angular", "TypeScript", "JavaScript",
    "Tailwind CSS", "SCSS", "Flutter", "HTML5", "CSS3", "Figma", "Git"/* , "CI/CD" */
]

export function Skills() {
    const { t } = useLanguage()

    return (
        <section id="skills" className="container py-24 sm:py-32 bg-muted/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12"
            >
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    {t.skills.title}
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {t.skills.description}
                </p>
            </motion.div>

            <div className="mx-auto flex max-w-[58rem] flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                        <Badge variant="secondary" className="text-lg py-2 px-4 shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                            {skill}
                        </Badge>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
