import { yupResolver } from "@hookform/resolvers/yup";
import React, { useMemo, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import robot_img from "../../assets/main/contacts/robot.svg";
import { translation } from "../../components/main";
import {
  CstmInput,
  CstmTextarea,
  CustomBtn,
  CustomSelect,
} from "../../components/forms";
import { Container, SocIcons, Title, Ul } from "../../components/reusable";
import { useAppSubmit, useFormRegister, useTranslation } from "../../hooks";
import { contacts_shema } from "../../validation";
import styles from "./contacts.module.css";
import instance from "../../api";
import {
  Link,
  useActionData,
  useFormAction,
  useLoaderData,
} from "react-router-dom";
import { toFormData } from "../../helper";
// import { ReCAPTCHA } from "react-google-recaptcha";

const Component = () => {
  const { contacts: language } = useTranslation().language;
  const actionData = useActionData();
  const { address, email, links, map_iframe, map_image, phone } =
    useLoaderData();
  const submit = useAppSubmit(),
    action = useFormAction();
  const formMethods = useForm({
    resolver: yupResolver(contacts_shema(language.errors)),
  });

  const { handleSubmit } = formMethods;
  const onSubmit = async (data) => {
    const formData = new FormData();
    delete data.isRobot;
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    submit(formData, { method: "POST", action });
  };
  return (
    <>
      <Container className="py-[var(--py)]" bg="bg-[#F0F2F5]">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[36px] items-center">
            <Title>{language.title}</Title>
            <div className="flex flex-col gap-[24px] items-center med-400:w-full">
              <CstmInput
                regName="full_name"
                placeholder={language.placeholders.name}
              />
              <CstmInput
                regName="email"
                placeholder={language.placeholders.email}
              />
              <CustomSelect
                regName="type"
                placeholder={language.placeholders.feedback_letter}
                options={language?.data?.map((el) => ({
                  title: el,
                  value: el,
                }))}
              />
              <CstmTextarea
                regName="content"
                placeholder={language.placeholders.description}
              />
            </div>
            <RobotCheckbox regName="isRobot" />
            {/* <ReCAPTCHA
              sitekey={process.env.REACT_APP_SECRET_KEY}
              onChange={onChange}
            /> */}
            <CustomBtn type="submit">{language.send}</CustomBtn>
            {actionData && (
              <h3 className={actionData.err ? "text-[red]" : "text-[green]"}>
                {actionData?.message}
              </h3>
            )}
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
                [`${language.map_info.ul.tel}:`, phone],
                [`${language.map_info.ul.address}:`, address],
                [`Email:`, email],
              ]}
            />
            <SocIcons links={links} />
          </div>
          {!map_iframe && map_image && (
            <div className="rounded-2xl h-[265px] overflow-hidden [&>iframe]:w-full  [&>iframe]:h-full">
              <img
                loading="lazy"
                alt=" "
                className="object-fill"
                src={map_image}
              />
            </div>
          )}
          {map_iframe && !map_image && (
            <div
              className="rounded-2xl h-[265px] overflow-hidden [&>iframe]:w-full  [&>iframe]:h-full"
              dangerouslySetInnerHTML={{ __html: map_iframe }}>
              {!map_iframe && map_image && <img alt=" " src="map_image" />}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

const loader = async ({ params: { lang } }) => {
  try {
    const res = await instance.get(`contact-info?lng=${lang}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
const action = async ({ request, params: { lang } }) => {
  try {
    const formData = await request.formData();
    await instance.post(`feedback/create`, formData);

    return { message: translation[lang].contacts.message, err: false };
  } catch (error) {
    console.log(error);
    return {
      message: translation[lang].contacts.formErr,
      err: true,
    };
  }
};

// function onChange(value) {
//   console.log("Captcha value:", value);
// }

const RobotCheckbox = ({ regName }) => {
  const register = useFormRegister(regName);

  return (
    <div className="relative">
      <img loading="lazy" className="w-[177px]" src={robot_img} alt="" />
      <label className={styles.container}>
        <input {...register} type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};
export const Contacts = Object.assign(Component, { loader, action });
