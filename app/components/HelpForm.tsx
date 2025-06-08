"use client";

import { HelpSchemaType } from "@/app/schemas/help";
import { useHelpForm } from "@/app/hooks/useForm";

import { NextPage } from "next";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HelpForm: NextPage = ({}) => {
  const form = useHelpForm();

  const onSubmit = (data: HelpSchemaType) => {
    console.log(data);

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full text-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-base font-medium text-gray-300">
                Name
              </FormLabel>

              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Name"
                  className="py-5 px-3 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-base font-medium text-gray-300">
                Email
              </FormLabel>

              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="py-5 px-3 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-base font-medium text-gray-300">
                Subject
              </FormLabel>

              <FormControl>
                <Select>
                  <SelectTrigger className="w-full py-6 px-4 font-medium bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-0 focus-visible:ring-0">
                    <SelectValue
                      placeholder={field.value}
                      className="placeholder-gray-400"
                    />
                  </SelectTrigger>

                  <SelectContent className="bg-neutral-950 border-gray-600 rounded-lg">
                    <SelectGroup>
                      <SelectItem
                        value="General Enquiry"
                        className="p-3 hover:bg-white/5 rounded-md"
                      >
                        General Enquiry
                      </SelectItem>

                      <SelectItem
                        value="Technical Support"
                        className="p-3 hover:bg-white/5 rounded-md"
                      >
                        Technical Support
                      </SelectItem>

                      <SelectItem
                        value="Billing"
                        className="p-3 hover:bg-white/5 rounded-md"
                      >
                        Billing
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-base font-medium text-gray-300">
                Message
              </FormLabel>

              <FormControl>
                <textarea
                  {...field}
                  rows={5}
                  name="message"
                  placeholder="Enter Message"
                  className="w-full rounded-md py-2.5 px-4 bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-primary text-white p-5 active:scale-95 transition-all rounded-full hover:bg-primary/80"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default HelpForm;
