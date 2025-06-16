"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";
import { createCompanion } from "@/lib/actions/companions.actions";
import { redirect } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  subject: z.string().min(1, { message: "subject is required" }),
  topic: z.string().min(1, { message: "topic is required" }),
  voice: z.string().min(1, { message: "voice is required" }),
  style: z.string().min(1, { message: "style is required" }),
  duration: z.coerce.number().min(1, { message: "duration is required" }),
});

// 1. Define your form.
const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async(values: z.infer<typeof formSchema>) => {
     const companion = await createCompanion(values);
     if(companion) {
      redirect(`/companion/${companion.id}`)
     }else{
      console.log("Failed to create companion")
      redirect("/")
     }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* 1st input --> input for the companion name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the companion name"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 2nd input --> select subject field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                >
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                        <SelectItem
                            value={subject}
                            key={subject}
                            className="capitalize"
                        >
                            {subject}
                        </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 3rd input --> input for the companion brief */}
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic Brief</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please give your topic brief"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 4th input --> Select the voice */}
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the voice" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="male" >Male</SelectItem>
                  <SelectItem value="female" >Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 5th input --> Select the style */}
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the style" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="formal" >Formal</SelectItem>
                  <SelectItem value="Casual" >Casual</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 6th input --> Select the Duration */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Duration</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="15"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full cursor-pointer" type="submit">Build Your Companion</Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
