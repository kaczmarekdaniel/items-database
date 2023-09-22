import React, { useState } from "react";

import { AccountLinkWrapper, Blur } from "./AccountLink.styles";
import {
  Chevron,
  Widget,
  WidgetSelect,
  Name,
  Close,
  Email,
  Logout,
} from "./AccountLink.styles";

const AccountLink = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Blur
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
      ></Blur>
      <AccountLinkWrapper>
        <Widget
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Chevron /> <Name>Daniel Kaczmarek</Name> <img />
        </Widget>
        <WidgetSelect isOpen={isOpen}>
          <Close
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <Name bold dark>
            Daniel Kaczmarek
          </Name>
          <Email>
            kaczmarekdaniel <br /> @company.com
          </Email>
          <Logout>Log out</Logout>
        </WidgetSelect>
      </AccountLinkWrapper>
    </>
  );
};

export default AccountLink;
