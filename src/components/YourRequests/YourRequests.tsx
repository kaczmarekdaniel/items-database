import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import {
  RequestsWrapper,
  YourRequestsListing,
  FormButton,
} from "./YourRequests.styles.jsx";
import ItemCard from "../cards/ItemCard/ItemCard";
import RequestCard from "../cards/RequestCard/RequestCard";
import CardSkeleton from "../cards/CardSkeleton/CardSkeleton.js";

import useModal from "../../hooks/useModal";
import Modal from "../Modals/RequestForm";

interface Request {
  id: string;
  title: string;
  ItemId: string;
  userId: string;
}

const YourRequests: React.FC = () => {
  const [data, setData] = useState<Request[]>([]);
  const [content, setContent] = useState<ReactNode>(<CardSkeleton count={3} />);
  const { isOpen, closeModal, openModal } = useModal();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/requests", {
          withCredentials: true,
        });

        console.log(response.data);
        setData(response.data.data);
        setContent(
          response.data.data.map((request: Request, i: number) => {
            return <RequestCard request={request} key={i} />;
          })
        );
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal} />

      <RequestsWrapper>
        <h2>Your requests</h2>
        <FormButton onClick={openModal}>Create request</FormButton>
        <a>see all {">"}</a>
        <YourRequestsListing>{content}</YourRequestsListing>
      </RequestsWrapper>
    </>
  );
};

export default YourRequests;
