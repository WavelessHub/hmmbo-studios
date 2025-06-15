import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { CommentSchemaType } from "@/schemas/comment";
import { useCommentForm } from "@/hooks/useForm";

import { SendHorizontal } from "lucide-react";

import { NextPage } from "next";

interface Props {
  id: string;
}

const CommentForm: NextPage<Props> = ({ id }) => {
  const form = useCommentForm();

  const onSubmit = (data: CommentSchemaType) => {
    console.log(id, data);

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <SendHorizontal className="absolute active:scale-90 transition-all duration-100 hover:text-white cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                  <Input
                    {...field}
                    placeholder="Comment"
                    className="pl-4 pr-12 py-6 font-medium bg-black/30 border-[1.5px] border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                </div>
              </FormControl>

              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default CommentForm;
