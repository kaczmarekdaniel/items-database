import React, { useEffect } from "react";

import { LandingWrapper, LandingTop, LandingDetails } from "./Landing.styles";

import SearchBar from "../../components/SearchBar/SearchBar";
import Select from "../../components/Select/Select";
import ItemCard from "../../components/cards/ItemCard/ItemCard";
import Notifications from "../../components/Notifications/Notifications";
import YourRequests from "../../components/YourRequests/YourRequests";
import AccountLink from "../../components/AccountLink/AccountLink";
import YourItems from "../../components/YourItems/YourItems";
import axios from "axios";

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingTop>
        <div className="left">
          {/* <Select /> */}
          <SearchBar />
        </div>
        <AccountLink />
      </LandingTop>

      <LandingDetails>
        <Notifications></Notifications>
        <YourRequests />
      </LandingDetails>
      <YourItems />
    </LandingWrapper>
  );
};

export default Landing;
