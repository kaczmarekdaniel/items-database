import styled from "styled-components";

export const NotificationsWrapper = styled.div`
  width: 370px;
  height: 200px;
  background: ${(props) => props.theme.mainDark};
  border-radius: 20px;
  overflow: hidden;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Notification = styled.li`
  list-style-type: none;
  width: 100%;
  height: 50px;
  margin-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotificationText = styled.p`
  flex-basis: 55%;
  height: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotificationIcon = styled.div`
  flex-basis: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const NotificationButton = styled.div`
  flex-basis: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-align: center;
`;
