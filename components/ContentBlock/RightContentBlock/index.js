import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { Slide } from "react-reveal";
import Link from "next/link";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

import * as S from "./styles";

const RightBlock = ({ last, first, title, content, button, icon, image }) => {
  const { t } = useTranslation();

  return (
    <S.RightBlockContainer last={last} first={first}>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <S.Title>{t(title)}</S.Title>
              <S.Content>{t(content)}</S.Content>
              <Link href="/map">
                <S.ButtonWrapper>
                  {button &&
                    typeof button === "object" &&
                    button.map((item, id) => {
                      return (
                        <Button key={id} color={item.color} width="true">
                          {t(item.title)}
                        </Button>
                      );
                    })}
                </S.ButtonWrapper>
              </Link>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            {image !== undefined ? (
              <img src={image} alt="gamewordl" className="mb-5" />
            ) : (
              <SvgIcon src={icon} className="about-block-image" />
            )}
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;