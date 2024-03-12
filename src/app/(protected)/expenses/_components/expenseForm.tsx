"use client";
import * as React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { format } from "date-fns";
import { MultiSelect } from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { addExpense } from "@/api/expenses/action";
import { Tag } from "@/types/types";

const expensesSchema = z.object({
  amount: z.string().min(1, { message: "Minimum 1" }),
  title: z.string().min(3, { message: "Atleast 3 characters" }),
  desc: z.string(),
  date: z.date({ required_error: "A date is required" }),
});

const ExpensesForm = () => {
  const [date, setDate] = React.useState<Date | undefined>();
  const [tag, setTags] = React.useState<Tag>();
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof expensesSchema>>({
    resolver: zodResolver(expensesSchema),
    defaultValues: {
      title: "",
      amount: "",
      desc: "",
      date: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof expensesSchema>) => {
    setLoading(true);
    addExpense(data, tag).then((res) => {
      toast.success("Expense added");
      setLoading(false);
    });
  };

  const handleChangeTags = (tag: any) => {
    setTags(tag);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:p-5 p-10 space-y-12 w-full "
      >
        <label className="font-semibold text-3xl">Add a new expense</label>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense Title</FormLabel>
              <FormControl>
                <Input
                  className="text-white bg-slate-900 border-slate-700"
                  placeholder="Title"
                  {...field}
                />
              </FormControl>
              <FormDescription>Title..</FormDescription>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense amount</FormLabel>
              <FormControl>
                <Input
                  className="text-white bg-slate-900 border-slate-700"
                  placeholder="$"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " pl-3 text-left font-normal text-white bg-slate-900 border border-slate-700 hover:bg-slate-900 hover:text-white ",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormDescription>Select date</FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <MultiSelect onChange={handleChangeTags} />
              </FormControl>
              <FormDescription>Select tags</FormDescription>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  className="text-white bg-slate-900 border-slate-700 h-[300px]"
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage className="absolute " />
            </FormItem>
          )}
        />
        <Button
          className={`w-full shadow-lg p-6 bg-slate-900 text-gray-300 font-md hover:bg-gray-700 mt-5 hover:text-white tracking-wide`}
        >
          {loading ? (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-slate-900"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ExpensesForm;
