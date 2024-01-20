import { useEffect, type FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../../pages/api/contact";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSend = handleSubmit(async (data) => {
    try {
      setLoading(true);
      setError(false);
      setSuccess(false);
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setSuccess(true);
      reset();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    if (errors.name) {
      setSuccess(false);
      setError(false);
    }
  }, [errors]);

  return (
    <form className="flex w-full flex-col gap-5 lg:max-w-[500px]" onSubmit={handleSend}>
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <div className="w-full">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            className=" bg-bg-foreground block w-full rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
            placeholder="John Doe"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red-500">
              {errors.name.message as string}
            </p>
          )}
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className=" bg-bg-foreground block w-full rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
            placeholder="email@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-2 text-xs text-red-500">
              {errors.email.message as string}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          className="bg-bg-foreground block h-[200px] w-full resize-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
          placeholder="Your message..."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-2 text-xs text-red-500">
            {errors.message.message as string}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading || success}
        className={
          "bg-primary hover:bg-primary/80 disabled:hover:bg-primary rounded-full px-6 py-2 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
        }
      >
        {loading ? "Sending..." : success ? "Sent!" : error ? "Error!" : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
