import React, { ReactNode, useState, useEffect } from "react";
import { YourItemsListing, YourItemsWrapper, SeeAll } from "./YourItems.styles";
import ItemCard from "../cards/ItemCard/ItemCard";
import CardSkeleton from "../cards/CardSkeleton/CardSkeleton";

interface Item {
  key: number;
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  serial_number: string;
  placeholder: string;
}

import axios from "axios";
const YourItems: React.FC = () => {
  const [content, setContent] = useState<ReactNode>(<CardSkeleton count={4} />);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/products", {
          withCredentials: true,
        });

        console.log(response.data);

        setContent(
          response.data.data.map((item: Item, i: number) => {
            return <ItemCard item={item} key={i} />;
          })
        );
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <YourItemsWrapper>
      <h2>Your items</h2>
      <SeeAll>see all {">"}</SeeAll>

      <YourItemsListing>{content}</YourItemsListing>
    </YourItemsWrapper>
  );
};

export default YourItems;
