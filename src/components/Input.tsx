import React from "react";
import { useForm } from "react-hook-form";

export const Input = ({ register, name, rest }) => {
  return (
    <div>
      <input {...register(name)} {...rest} />
    </div>
  );
}

// export const InputWithDiv = (props) => {
//   return(<div>
//     <Input rule={{ required: true }}  {..props} />
//   </div>)
// };
