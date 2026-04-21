"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  privacy: boolean;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      privacy: false,
    },
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Simulamos un envío exitoso. En producción, aquí iría
      // la llamada a Formspree / EmailJS / API route.
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.info("Contact form submitted:", data);
      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-accent/30 bg-brand-light/50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-brand-primary">
          ¡Gracias! Hemos recibido tu solicitud
        </h3>
        <p className="mt-3 text-sm text-brand-muted leading-relaxed">
          Te contactaremos en menos de 24 horas hábiles en el número que nos
          has facilitado.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg bg-white p-6 sm:p-8 shadow-card"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-brand-text"
          >
            Nombre <span className="text-brand-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre completo"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              required: "Por favor indícanos tu nombre",
              minLength: { value: 2, message: "Nombre demasiado corto" },
            })}
            className="mt-2 w-full rounded-md border border-brand-muted/30 bg-white px-4 py-2.5 text-sm text-brand-text shadow-sm transition-colors focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-text"
          >
            Teléfono <span className="text-brand-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Tu número de teléfono"
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone", {
              required: "Necesitamos tu teléfono para contactarte",
              pattern: {
                value: /^[0-9\s+()-]{6,}$/,
                message: "Introduce un teléfono válido",
              },
            })}
            className="mt-2 w-full rounded-md border border-brand-muted/30 bg-white px-4 py-2.5 text-sm text-brand-text shadow-sm transition-colors focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-text"
          >
            Email <span className="text-brand-muted">(opcional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Tu email (opcional)"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Introduce un email válido",
              },
            })}
            className="mt-2 w-full rounded-md border border-brand-muted/30 bg-white px-4 py-2.5 text-sm text-brand-text shadow-sm transition-colors focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-brand-text"
          >
            Servicio de interés <span className="text-brand-accent">*</span>
          </label>
          <select
            id="service"
            aria-invalid={errors.service ? "true" : "false"}
            {...register("service", {
              required: "Selecciona una opción",
            })}
            className="mt-2 w-full rounded-md border border-brand-muted/30 bg-white px-4 py-2.5 text-sm text-brand-text shadow-sm transition-colors focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un servicio...
            </option>
            <option value="fisioterapia">Fisioterapia</option>
            <option value="osteopatia">Osteopatía</option>
            <option value="podologia">Podología</option>
            <option value="pilates">Pilates terapéutico</option>
            <option value="orientacion">
              No lo sé aún — quiero orientación
            </option>
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-text"
        >
          Mensaje <span className="text-brand-muted">(opcional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Cuéntanos brevemente qué te ocurre o qué necesitas (opcional)"
          {...register("message", {
            maxLength: {
              value: 1000,
              message: "Máximo 1000 caracteres",
            },
          })}
          className="mt-2 w-full rounded-md border border-brand-muted/30 bg-white px-4 py-2.5 text-sm text-brand-text shadow-sm transition-colors focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        />
      </div>

      <div className="mt-5">
        <label className="flex gap-2.5 items-start cursor-pointer">
          <input
            type="checkbox"
            {...register("privacy", {
              required: "Debes aceptar la política de privacidad",
            })}
            className="mt-0.5 h-4 w-4 rounded border-brand-muted/40 text-brand-accent focus:ring-brand-accent"
          />
          <span className="text-xs text-brand-muted leading-relaxed">
            He leído y acepto la{" "}
            <a
              href="/politica-privacidad"
              className="font-semibold text-brand-accent hover:underline"
            >
              política de privacidad
            </a>
            . Tus datos solo se usan para gestionar tu cita.
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.privacy.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Ha habido un error al enviar. Por favor, inténtalo de nuevo o
            llámanos al 91 282 62 66.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
            Enviando...
          </>
        ) : (
          "Enviar solicitud de cita"
        )}
      </button>
    </form>
  );
}
