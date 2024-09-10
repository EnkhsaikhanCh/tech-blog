/* eslint-disable react/no-unescaped-entities */
"use client";

import * as React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowLeft, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const ContactCard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg md:h-[500px] md:flex-row">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white md:w-1/2">
        <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-8">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
        <div className="space-y-6 font-semibold">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6" />
            <span>contact@techblog.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6" />
            <span>123 Tech Street, San Francisco, CA 94105</span>
          </div>
        </div>
      </div>
      <div className="p-12 md:w-1/2">
        {!isSubmitted ? (
          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Send us a message
            </h3>
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>
        ) : (
          <motion.div
            className="flex h-full flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Thank you for your message!
            </h3>
            <p className="mb-8 text-gray-600">
              We'll get back to you as soon as possible.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Send Another Message
            </Button>
          </motion.div>
        )}
      </div>
    </Card>
  );
};
