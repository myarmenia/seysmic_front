import React from "react";
import styles from "./contacts.module.css";
import { Container, SocIcons, Title, Ul } from "../../components/reusable";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contacts_shema } from "../../validation";
import robot_img from "../../assets/main/contacts/robot.svg";
import {
  CstmInput,
  CustomBtn,
  CustomSelect,
  CstmTextarea,
} from "../../components/forms";
import { useFormRegister } from "../../hooks";

export const Contacts = () => {
  const formMethods = useForm({
    resolver: yupResolver(contacts_shema),
  });
  const { handleSubmit } = formMethods;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Container bg="bg-[#F0F2F5]" className="py-[60px]">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[36px] items-center"
          >
            <Title>Обратная связь</Title>
            <div className="flex flex-col gap-[24px] items-center">
              <CstmInput regName="name" placeholder="ФИО" />
              <CstmInput regName="email" placeholder="ФИО" />
              <CustomSelect
                regName="feedback_letter"
                placeholder="Выбрать тип обратоного письма"
                options={["aaaaaaaaaa", "bbbbbbbbbb", "cccccccccc"]}
              />
              <CstmTextarea
                regName="describtion"
                placeholder="Свободное поле для заполнения"
              />
            </div>
            <RobotCheckbox regName="isRobot" />
            <CustomBtn type="submit">Отправить</CustomBtn>
          </form>
        </FormProvider>
      </Container>
      <Container className="py-[50px] flex flex-col gap-6">
        <Title>Контактные данные</Title>
        <div className="grid grid-cols-[2fr_3fr]">
          <div className="flex flex-col justify-between">
            <Ul
              className="list-none !list-image-none mt-[25px] [&_li]:m-0 [&_li]:text-lg"
              data={["Номер телефона:", "Адрес:", "Email"]}
            />
            <SocIcons />
          </div>
          <div className="bg-[#8080805a] rounded-2xl h-[265px]" />
        </div>
      </Container>
    </div>
  );
};

const RobotCheckbox = ({ regName }) => {
  const register = useFormRegister(regName);
  return (
    <div className="relative">
      <img className="w-[177px]" src={robot_img} alt="" />
      <label className={styles.container}>
        <input {...register} type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};
