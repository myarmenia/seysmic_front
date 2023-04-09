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
// import { ReCAPTCHA } from "react-google-recaptcha";

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
            <div className="flex flex-col gap-[24px] items-center med-400:w-full">
              <CstmInput regName="name" placeholder="ФИО" />
              <CstmInput regName="email" placeholder="ФИО" />
              <CustomSelect
                regName="feedback_letter"
                placeholder="Выбрать тип обратоного письма"
                options={[
                  { title: "", value: "" },
                  { title: "aaaaaaaaaa", value: "aaaaaaaaaa" },
                  { title: "bbbbbbbbbb", value: "bbbbbbbbbb" },
                  { title: "cccccccccc", value: "cccccccccc" },
                ]}
              />
              <CstmTextarea
                regName="description"
                placeholder="Свободное поле для заполнения"
              />
            </div>
            <RobotCheckbox regName="isRobot" />
            {/* <ReCAPTCHA
              sitekey={process.env.REACT_APP_SECRET_KEY}
              onChange={onChange}
            /> */}
            <CustomBtn type="submit">Отправить</CustomBtn>
          </form>
        </FormProvider>
      </Container>
      <Container className="py-[50px] flex flex-col gap-6">
        <Title>Контактные данные</Title>
        <div className="grid grid-cols-[2fr_3fr] gap-[46px] med-600:grid-cols-1">
          <div className="flex flex-col justify-between">
            <Ul
              className="list-none !list-image-none mt-[25px] [&_li]:m-0 [&_li]:text-lg"
              data={["Номер телефона:", "Адрес:", "Email"]}
            />
            <SocIcons />
          </div>
          <div className="rounded-2xl h-[265px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="w-full h-full"
              title="map"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

// function onChange(value) {
//   console.log("Captcha value:", value);
// }

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
