"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Github, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { Sparkles } from "lucide-react"
import { ShineBorder } from "./ui/shine-border"


export const Footer = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="w-full border-t">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container grid gap-3 px-4 py-10 md:px-6 lg:grid-cols-4 border-x border-muted"
      >
        <div className="space-y-3">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center"
            >
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <span className="font-bold text-xl">Studio</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            We create beautiful, functional designs that help businesses grow and connect with their audience.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
              { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              { icon: <Github className="h-5 w-5" />, label: "GitHub" },
            ].map((social, index) => (
              <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Our Process
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                News & Press
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                UI/UX Design
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Web Development
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Brand Identity
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Digital Marketing
              </Link>
            </nav>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Case Studies
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Guides & Tutorials
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Legal</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Subscribe to our newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Stay updated with our latest projects, design tips, and company news.
          </p>
          <form className="flex space-x-3">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1 rounded-3xl" />
            <Button type="submit" className="rounded-3xl">
              Subscribe
            </Button>
          </form>
        </div>
      </motion.div>
      <div className="relative overflow-hidden">
        {/* ShineBorder as background */}
        {/* <div className="absolute inset-0 z-0">
          <ShineBorder
            className="absolute inset-0 w-full h-full border-0 bg-transparent"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderRadius={0}
            borderWidth={3}
            duration={2}
          >
            <div className="absolute inset-0"></div>
          </ShineBorder>
        </div>
         */}
        {/* Content overlay with backdrop filter for better text readability */}
        <div className="relative z-10 bg-background/30 backdrop-blur-sm">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-600 to-white/60 bg-clip-text text-center text-[8rem] md:text-[26rem] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              RUIXEN
            </motion.h2>
          </div>
          
          {/* Footer copyright section */}
          <div className="relative z-10 container flex flex-col items-center justify-between gap-3 py-6 border-t border-muted/30 md:h-16 md:flex-row md:py-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} RUIXEN. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Powered by RUIXEN</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
