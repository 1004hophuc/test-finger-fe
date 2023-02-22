import { Button, Row, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const TextNotification = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  line-height: 160%;
`;

export const RowContainTextNoti = styled(Row)`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
