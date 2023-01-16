import React from 'react'
import { useForm } from "react-hook-form";
import classes from './index.module.css'

export const ReactHookFormLearn = () => {
    return (
        <div className={classes.wrapper}>

          <FormLearn />
        </div>
    )
}




 function FormLearn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(useForm(),'useform')
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}







