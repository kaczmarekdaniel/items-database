import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ModalWrapper,
  Input,
  InputWrapper,
  InputLabel,
  Textarea,
  CloseButton,
  SubmitButton,
} from "./RequestForm.styles";

interface MyData {
  title: string;
  desc: string;
  image: any;
}

const Modal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<MyData>();

  const onSubmit = async (data: MyData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.desc);
    formData.append("image", data.image[0]);

    console.log(formData.get("image"));

    const response = await axios({
      method: "post",
      url: "http://localhost:4000/requests/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    if (response.status === 200) {
      closeModal();
    }
  };

  return isOpen ? (
    <ModalWrapper className="modal">
      <CloseButton onClick={() => closeModal()}>CLOSE</CloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputLabel>Request title</InputLabel>
          <Input {...register("title", { required: true })} />
          {errors.title && <p>This field is required</p>}
        </InputWrapper>

        <InputWrapper>
          <InputLabel>Request description</InputLabel>
          <Textarea {...register("desc", { required: true })} />

          {errors.desc && <p>This field is required</p>}
        </InputWrapper>

        <InputWrapper>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            name="image"
          />
        </InputWrapper>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </ModalWrapper>
  ) : null;
};

export default Modal;
