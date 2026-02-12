"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

export function Contact() {
    const { t } = useLanguage()

    const [isSuccess, setIsSuccess] = useState(false)

    const formSchema = z.object({
        name: z.string().min(2, { message: t.contact.errors.required }),
        email: z.string().email({ message: t.contact.errors.email }),
        message: z.string().min(10, { message: t.contact.errors.minLen }),
    })

    type FormValues = z.infer<typeof formSchema>

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log("Form Data:", data)
        setIsSuccess(true)
        reset()
    }

    return (
        <section id="contact" className="container py-24 sm:py-32 bg-muted/50">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    {t.contact.title}
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {t.contact.description}
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-[600px]"
            >
                <Card>
                    <CardHeader>
                        <CardTitle>{t.contact.cardTitle}</CardTitle>
                        <CardDescription>
                            {t.contact.cardDesc}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-10 text-center gap-4"
                            >
                                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                                    <svg
                                        className="h-10 w-10 text-green-600 dark:text-green-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl">{t.contact.successMsg}</h3>
                                    <p className="text-muted-foreground">
                                        {t.contact.successDesc}
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-4"
                                >
                                    {t.contact.sendNewMsgBtn}
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">{t.contact.nameLabel}</Label>
                                    <Input
                                        id="name"
                                        placeholder={t.contact.nameLabel}
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <span className="text-sm text-red-500">{errors.name.message}</span>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">{t.contact.emailLabel}</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <span className="text-sm text-red-500">{errors.email.message}</span>
                                    )}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message">{t.contact.messageLabel}</Label>
                                    <Textarea
                                        id="message"
                                        placeholder={t.contact.messageLabel}
                                        {...register("message")}
                                    />
                                    {errors.message && (
                                        <span className="text-sm text-red-500">{errors.message.message}</span>
                                    )}
                                </div>
                                <Button type="submit" className="w-full">
                                    {t.contact.sendBtn}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    )
}
