import React from "react";
import { styled } from "styled-components";

export const HeaderLink = ({ href, children }: any) => {
  const handleLinkClick = (event: any) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: topOffset,
        behavior: "smooth",
      });

      const url = new URL(window.location.href);
      url.hash = href.slice(1);
      window.history.pushState({}, "", url);
    }
  };

  return (
    <LintText href={href} onClick={handleLinkClick}>
      {children}
    </LintText>
  );
};

const LintText = styled.a`
  color: #483b34;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  cursor: pointer;

  @media (max-width: 780px) {
    display: none;
  }
`;
