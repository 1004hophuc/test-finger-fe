import { Button } from "antd";
import styled from "styled-components";

export const TextKeyNftDetail = styled.text`
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

export const TextValueNftDetail = styled.text`
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

export const TitleNftDetail = styled.text`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 160%;

  @media (min-width: 992px) {
    font-size: 24px;
  }
`;

export const TitleNameNftDetailAndId = styled.text`
  font-size: 28px;
  font-weight: 500;
  line-height: 160%;

  @media (min-width: 992px) {
    font-size: 32px;
  }
`;

export const StyledButtonNftDetailStake = styled(Button)`
  line-height: 140%;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 150px;
  min-height: 40px;
  font-size: 18px;
  border: none;
  transition: all 0.15s ease;

  :hover {
    transform: scale(1.035);
  }

  :active {
    transform: scale(1);
  }

  @media (min-width: 992px) {
    min-width: 350px;
    font-size: 24px;
  }
`;

export const StyledButtonNftDetailBid = styled(Button)`
  line-height: 140%;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 150px;
  min-height: 40px;
  font-size: 18px;
  transition: all 0.15s ease;

  :hover {
    transform: scale(1.035);
  }

  :active {
    transform: scale(1);
  }

  @media (min-width: 992px) {
    min-width: 350px;
    font-size: 24px;
  }
`;
