import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: ${(props) => props.theme.main}; */
  /* opacity: 0.1; */
  z-index: 100;

  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const AccountLinkWrapper = styled.div`
  position: relative;
  z-index: ${(props) => (props.isOpen ? 200 : 100)};
`;

export const Widget = styled.button`
  min-width: 146px;
  height: 40px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  img {
    width: 36px;
    height: 36px;
    border: 2px solid blue;
    border-radius: 18px;
  }

  span {
    margin: 0 10px;
  }
`;

export const Name = styled.span`
  font-weight: ${(props) => (props.bold ? 300 : 200)};
  font-size: ${(props) => (props.bold ? "18px" : "16px")};
  line-height: 15px;
  cursor: pointer;
  color: ${(props) => (props.dark ? props.theme.main : "#ffffff")};
`;

export const Chevron = styled(HiOutlineChevronDown)`
  width: 20px;
  height: 18px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const WidgetSelect = styled.div`
  width: 100%;
  height: 240px;
  position: absolute;
  top: 0px;
  margin: 0;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  background: ${(props) => props.theme.mainLight};
  box-shadow: 8px 8px 24px 0px rgba(46, 44, 72, 1);
  border-radius: 20px;
  content: "";

  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 42px 10px 16px 10px;
`;

export const Close = styled(CgClose)`
  color: black;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: 14px;
  cursor: pointer;
`;

export const Email = styled.span`
  max-width: 100%;
  color: ${(props) => props.theme.mainDark};
  line-height: 14px;
  font-size: 14px;
  font-weight: 200;
  margin-top: 16px;
`;

export const Logout = styled.button`
  width: 140px;
  height: 35px;
`;
