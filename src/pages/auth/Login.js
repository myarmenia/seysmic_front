import React from "react";
import styles from "./auth.module.css";
import { CstmInput, CustomBtn } from "../../components/forms";
import { Link, redirect, useFormAction } from "react-router-dom";
import { Title } from "../../components/reusable";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login_schema } from "../../validation";
import { useAppSubmit } from "../../hooks";
import { toFormData, toObject } from "../../helper";

const Component = () => {
  const submit = useAppSubmit();
  const formMethods = useForm({
    resolver: yupResolver(login_schema),
  });
  const { handleSubmit } = formMethods;
  const action = useFormAction();
  const onSubmit = (data) => {
    const formData = toFormData(data);
    submit(formData, { method: "post", action });
  };
  return (
    <FormProvider {...formMethods}>
      <div className={styles.my_container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.box}>
          <Title>ЛОгин</Title>
          <div className={styles.input_group}>
            <CstmInput
              autoComplete="username"
              regName="name"
              placeholder="Email"
              type="email"
            />
            <CstmInput
              regName="password"
              placeholder="Пароль"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col gap-[24px]">
            <CustomBtn type="submit" className="!w-full">
              Заригистрироваться
            </CustomBtn>
            <div className="flex items-center justify-around text-xl leading-5">
              <span>Еще не зарегистрированы?</span>
              <Link className="font-bold text-dark-blue" to={"/registration"}>
                Регистрация
              </Link>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const formObj = toObject(formData);
  return redirect("");
};

export const Login = Object.assign(Component, { action });
