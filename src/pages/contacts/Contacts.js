import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import robot_img from "../../assets/main/contacts/robot.svg";
import {
  CstmInput,
  CstmTextarea,
  CustomBtn,
  CustomSelect,
} from "../../components/forms";
import { Container, SocIcons, Title, Ul } from "../../components/reusable";
import { useFormRegister, useTranslation } from "../../hooks";
import { contacts_shema } from "../../validation";
import styles from "./contacts.module.css";
// import { ReCAPTCHA } from "react-google-recaptcha";

// const errLanguage = {
//   am: {
//     Required: "Պարտադիր դաշտ",
//     Wrongtext: "Մուտքագրերք միայն տառեր",
//     WrongEmail: "Սխալ էլեկտրոնային հասցե",
//     WrongMinimalText: "Դաշտը պետքե պաուրնակի մինիմալ 10 նիշհ",
//     WrongMaximalText: "Դաշտը պետքե պաուրնակի մաքսիմալ 90 նիշհ",
//   },
//   ru: {
//     Required: "Обязательное поле",
//     Wrongtext: "Пожалуйста, введите только буквы",
//     WrongEmail: "Неверный адрес электронной почты",
//     WrongMinimalText: "Поле должно быть не менее 10 символов",
//     WrongMaximalText: "Поле должно быть не более 90 символов",
//   },
//   en: {
//     Required: "Required field",
//     Wrongtext: "Please enter only letters",
//     WrongEmail: "Invalid email address",
//     WrongMinimalText: "The field must be at least 10 characters long",
//     WrongMaximalText: "The field should be a maximum of 90 characters",
//   },
// };

export const Contacts = () => {
  const { contacts: language } = useTranslation().language;
  const formMethods = useForm({
    resolver: yupResolver(contacts_shema(language.errors)),
  });

  const { handleSubmit } = formMethods;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container className="py-[var(--py)]" bg="bg-[#F0F2F5]">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[36px] items-center"
          >
            <Title>{language.title}</Title>
            <div className="flex flex-col gap-[24px] items-center med-400:w-full">
              <CstmInput
                regName="name"
                placeholder={language.placeholders.name}
              />
              <CstmInput
                regName="email"
                placeholder={language.placeholders.email}
              />
              <CustomSelect
                regName="feedback_letter"
                placeholder={language.placeholders.feedback_letter}
                options={[
                  { title: "aaaaaaaaaa", value: "aaaaaaaaaa" },
                  { title: "bbbbbbbbbb", value: "bbbbbbbbbb" },
                  { title: "cccccccccc", value: "cccccccccc" },
                ]}
              />
              <CstmTextarea
                regName="description"
                placeholder={language.placeholders.description}
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
      <Container className="flex flex-col gap-6 py-[var(--py)]">
        <Title>{language.map_info.title}</Title>
        <div className="grid grid-cols-[2fr_3fr] gap-[46px] med-600:grid-cols-1">
          <div className="flex flex-col justify-between gap-5">
            <Ul
              className="list-none !list-image-none mt-[25px] [&_li]:m-0 [&_li]:text-lg"
              data={[
                `${language.map_info.ul.tel}:`,
                `${language.map_info.ul.address}:`,
                "Email",
              ]}
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
    </>
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
