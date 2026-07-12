"use client";

import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";

import type { ContactFormValues } from "@/lib/validations";

type VisibleField =
  | "name"
  | "email"
  | "subject"
  | "message";

type ContactFormState = ContactFormValues;

type FieldErrors = Partial<
  Record<VisibleField, string>
>;

interface ApiResponse {
  success: boolean;
  message: string;
  fieldErrors?: Partial<
    Record<VisibleField, string[]>
  >;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [formValues, setFormValues] =
    useState<ContactFormState>(initialFormState);

  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors>({});

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const fieldName =
      event.target.name as keyof ContactFormState;

    setFormValues((current) => ({
      ...current,
      [fieldName]: event.target.value,
    }));

    if (
      fieldName !== "company" &&
      fieldErrors[fieldName]
    ) {
      setFieldErrors((current) => ({
        ...current,
        [fieldName]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setStatus("submitting");
    setStatusMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const result =
        (await response.json()) as ApiResponse;

      if (!response.ok || !result.success) {
        const nextErrors: FieldErrors = {};

        if (result.fieldErrors) {
          for (const [
            field,
            messages,
          ] of Object.entries(
            result.fieldErrors,
          )) {
            const firstMessage = messages?.[0];

            if (
              firstMessage &&
              field !== "company"
            ) {
              nextErrors[
                field as VisibleField
              ] = firstMessage;
            }
          }
        }

        setFieldErrors(nextErrors);
        setStatus("error");
        setStatusMessage(result.message);
        return;
      }

      setFormValues(initialFormState);
      setStatus("success");
      setStatusMessage(result.message);
    } catch {
      setStatus("error");
      setStatusMessage(
        "The request could not be completed. Check your connection and try again.",
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="name"
          label="Name"
          error={fieldErrors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formValues.name}
            onChange={handleChange}
            disabled={isSubmitting}
            maxLength={80}
            aria-invalid={Boolean(
              fieldErrors.name,
            )}
            aria-describedby={
              fieldErrors.name
                ? "name-error"
                : undefined
            }
            className={inputClassName(
              Boolean(fieldErrors.name),
            )}
            placeholder="Your full name"
          />
        </FormField>

        <FormField
          id="email"
          label="Email address"
          error={fieldErrors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            disabled={isSubmitting}
            maxLength={160}
            aria-invalid={Boolean(
              fieldErrors.email,
            )}
            aria-describedby={
              fieldErrors.email
                ? "email-error"
                : undefined
            }
            className={inputClassName(
              Boolean(fieldErrors.email),
            )}
            placeholder="name@example.com"
          />
        </FormField>
      </div>

      <div className="mt-6">
        <FormField
          id="subject"
          label="Subject"
          error={fieldErrors.subject}
        >
          <input
            id="subject"
            name="subject"
            type="text"
            value={formValues.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            maxLength={120}
            aria-invalid={Boolean(
              fieldErrors.subject,
            )}
            aria-describedby={
              fieldErrors.subject
                ? "subject-error"
                : undefined
            }
            className={inputClassName(
              Boolean(fieldErrors.subject),
            )}
            placeholder="Internship, project, or opportunity"
          />
        </FormField>
      </div>

      <div className="mt-6">
        <FormField
          id="message"
          label="Message"
          error={fieldErrors.message}
        >
          <textarea
            id="message"
            name="message"
            rows={8}
            value={formValues.message}
            onChange={handleChange}
            disabled={isSubmitting}
            maxLength={3000}
            aria-invalid={Boolean(
              fieldErrors.message,
            )}
            aria-describedby={
              fieldErrors.message
                ? "message-error"
                : "message-description"
            }
            className={`${inputClassName(
              Boolean(fieldErrors.message),
            )} resize-y`}
            placeholder="Tell me about the opportunity or project..."
          />

          <div
            id="message-description"
            className="mt-2 flex justify-between gap-4 text-xs text-muted-foreground"
          >
            <span>Minimum 10 characters</span>

            <span>
              {formValues.message.length}/3000
            </span>
          </div>
        </FormField>
      </div>

      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="company">
          Leave this field empty
        </label>

        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formValues.company}
          onChange={handleChange}
        />
      </div>

      {statusMessage && (
        <div
          role={
            status === "error"
              ? "alert"
              : "status"
          }
          aria-live="polite"
          className={[
            "mt-6 flex items-start gap-3 rounded-lg border p-4 text-sm",
            status === "success"
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-destructive/30 bg-destructive/10 text-destructive",
          ].join(" ")}
        >
          {status === "success" ? (
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
          ) : (
            <AlertCircle
              className="mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
          )}

          <span>{statusMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />

            Sending...
          </>
        ) : (
          <>
            <Send
              className="h-4 w-4"
              aria-hidden="true"
            />

            Send message
          </>
        )}
      </button>
    </form>
  );
}

interface FormFieldProps {
  id: VisibleField;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({
  id,
  label,
  error,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold"
      >
        {label}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-sm text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function inputClassName(
  hasError: boolean,
): string {
  return [
    "w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-60",
    hasError
      ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20"
      : "border-input focus:border-primary focus:ring-2 focus:ring-primary/20",
  ].join(" ");
}