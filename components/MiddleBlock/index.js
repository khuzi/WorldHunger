import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import  Link from "next/link";

import Button from "../../common/Button";

import * as S from "./styles";

const MiddleBlock = ({ last, id, title, content, button }) => {
  const { t } = useTranslation();

  return (
    <S.MiddleBlock last={last} id={id}>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Title>{t(title)}</S.Title>
              <S.Content last={last}>{t(content)}</S.Content>
              {button ? (
                <Link href="/map">
                  <Button name="submit" type="submit">
                    {t(button)}
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
