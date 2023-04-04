import React from "react";
import styles from "./auth.module.css";
import { CstmInput, CustomBtn } from "../../components/forms";
import { Link, redirect } from "react-router-dom";
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
  const onSubmit = (data) => {
    const formData = toFormData(data);
    submit(formData, { method: "post", action: "/registration" });
  };
  return (
    <FormProvider {...formMethods}>
      <div className={styles.my_container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.box}>
          <Title>Регистрация</Title>
          <div className={styles.input_group}>
            <CstmInput regName="name" placeholder="Имя" />
            <CstmInput regName="lastName" placeholder="Фамилия" />
            <CstmInput
              regName="email"
              placeholder="Email"
              type="email"
              autoComplete="username"
            />
            <CstmInput
              regName="password"
              placeholder="Пароль"
              type="password"
              autoComplete="new-password"
            />
            <CstmInput
              regName="password_repeat"
              placeholder="Подтвердите пароль"
              type="password"
              autoComplete="new-password"
            />
          </div>
          <div className="flex flex-col gap-[24px]">
            <CustomBtn className="!w-full" type="submit">
              Заригистрироваться
            </CustomBtn>
            <div className="flex items-center justify-around text-xl leading-5">
              <span>Уже заригистрированы?</span>
              <Link className="font-bold text-dark-blue" to={"/login"}>
                Логин
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
  console.log(formObj);

  return redirect("");
};

export const Registration = Object.assign(Component, { action });
