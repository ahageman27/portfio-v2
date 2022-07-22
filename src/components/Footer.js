import React, { Component } from "react";

import styled from "styled-components";
import Typography from "@mui/material/Typography";

const FooterContainer = styled.div`
  bottom: 0;
  width: 100% !important;
  height: 50px !important ;
  background: #1976d2;
  display: flex;
  min-height: 5vh;
  flex-direction: column;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography variant="title">Footer Text</Typography>
      </FooterContainer>
    );
  }
}

export default Footer;
