import React from "react";

import {
  NotificationsWrapper,
  Notification,
  NotificationText,
  NotificationIcon,
  NotificationButton,
} from "./Notifications.styles";

import { AiOutlineInfoCircle } from "react-icons/ai";

const Notifications = () => {
  return (
    <NotificationsWrapper>
      <Notification>
        <NotificationIcon>
          <AiOutlineInfoCircle />
        </NotificationIcon>

        <NotificationText>iPhone 14 is ready to pick up</NotificationText>
        <NotificationButton>details {">"}</NotificationButton>
      </Notification>
      <Notification>
        <NotificationIcon>
          {" "}
          <AiOutlineInfoCircle />
        </NotificationIcon>

        <NotificationText>Request status has been changed</NotificationText>
        <NotificationButton>details {">"}</NotificationButton>
      </Notification>
      <Notification>
        <NotificationIcon>
          {" "}
          <AiOutlineInfoCircle />
        </NotificationIcon>
        <NotificationText>Your request has been declined</NotificationText>
        <NotificationButton>details {">"}</NotificationButton>
      </Notification>
    </NotificationsWrapper>
  );
};

export default Notifications;
