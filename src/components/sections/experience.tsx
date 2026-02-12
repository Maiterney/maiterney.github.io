"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"
import { Briefcase, MapPin } from "lucide-react"

export function Experience() {
    const { t } = useLanguage()

    return (
        <section id="experience" className="container py-24 sm:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    {t.experience.title}
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {t.experience.description}
                </p>
            </div>

            <div className="mx-auto max-w-[800px] relative border-l border-muted pl-8 ml-4 md:ml-auto">
                {t.experience.jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-12 relative"
                    >
                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border border-primary bg-background flex items-center justify-center">
                            <Briefcase className="h-3 w-3 text-primary" />
                        </div>
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                                    <div>
                                        <CardTitle>{job.role}</CardTitle>
                                        <CardDescription className="text-primary font-medium mt-1 text-base">{job.company}</CardDescription>
                                    </div>
                                    <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">{job.period}</span>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {job.location}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    {job.description}
                                </p>
                                {/* @ts-ignore - highlights might not exist on all jobs or type definition might be lagging */}
                                {job.highlights && (
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                                        {/* @ts-ignore */}
                                        {job.highlights.map((highlight: string, i: number) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
