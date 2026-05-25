"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  number: z.string().min(3, {
    message: "Please enter a valid number phone.",
  }),
  subject: z.string().min(3, {
    message: "Subject must contain at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
      social: "",
    },
  });

  async function generateMessage() {
    const subject = form.getValues("subject");
    const name    = form.getValues("name");

    if (!subject || subject.length < 3) {
      form.setError("subject", {
        message: "Please fill in the subject first before generating.",
      });
      return;
    }

    try {
      setIsGenerating(true);

      const response = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, name }),
      });

      if (response.ok) {
        const { message } = await response.json();
        form.setValue("message", message, { shouldValidate: true });
      } else {
        console.error("Failed to generate message");
      }
    } catch (err) {
      console.error("Generate error:", err);
    } finally {
      setIsGenerating(false);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
        storeModal.onOpen({
          title: "Thankyou!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      } else {
        storeModal.onOpen({
          title: "Oops!",
          description: "Failed to send message. Please try again.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      storeModal.onOpen({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        icon: Icons.successAnimated,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter your subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center justify-between w-full">
              <span>Message</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={generateMessage}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Icons.spinner className="mr-2 h-3 w-3 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate with AI
                  </>
                )}
              </Button>
            </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message or generate with AI above"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Link for social account" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}