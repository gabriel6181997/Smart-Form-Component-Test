import React from "react";
import { useForm } from "react-hook-form";

export function Input({ register, name, rest }) {
  return (
    <div>
      <input {...register(name)} {...rest} />
    </div>
  );
}
