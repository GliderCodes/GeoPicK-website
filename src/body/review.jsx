import {
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Box,
} from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function ReviewCard(props) {
  return (
    <Grid item direction="row">
      <Card
        style={{
          background: "#1b1b1b",
          color: "#fafafa",
          borderRadius: "20px",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          margin: "15px",
          // width: "25%",
          minWidth: "300px",
          maxWidth: "300px",
          height: "250px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h5" style={{ fontWeight: 300 }}>
            <CardContent>{props.desc}</CardContent>
          </Typography>
        </ThemeProvider>

        <Box m={1}></Box>
        <div align="center">
          <Avatar
            alt={props.name}
            src={props.dp}
            style={{ justifyContent: "center", textJustify: "center" }}
          />
          <Box m={0.5}></Box>
        </div>

        <Typography variant="h5" style={{ fontWeight: 500 }}>
          {props.name}
        </Typography>
      </Card>
    </Grid>
  );
}

function ReviewCard2(props) {
  return (
    <Grid item direction="row">
      <Card
        style={{
          borderRadius: "20px",
          width: "350px",
          height: "300px",
          paddingBottom: "20px",
          paddingTop: "20px",
          wrap: "wrap",
          linearGradient: "(120deg, #fdfbfb 0%, #ebedee 100%)}",
        }}
      >
        <CardContent style={{ paddingLeft: "10%", textAlign: "left" }}>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            {props.percentage}
          </Typography>
          <Typography
            variant="h4"
            style={{
              fontWeight: "300",
              textAlign: "left",
              justifyContent: "flex-start",
            }}
          >
            of the subjects{" "}
          </Typography>
        </CardContent>
        {/* <Box m={-1} /> */}
        {/* <CardContent style={{ paddingLeft: "48px" }}> */}

        {/* </CardContent> */}
        <CardContent>
          <Typography
            variant="h4"
            style={{
              fontWeight: "300",
              textAlign: "right",
              justifyContent: "flex-end",
            }}
          >
            {props.lightDesc}
            <div style={{ fontWeight: "bold" }}>{props.heavyDesc}</div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
class PrototypeReview extends Component {
  render() {
    return (
      <div
        style={{
          padding: "3%",
          justifyContent: "center",
          background: "#F56920",
        }}
        id="review"
      >
        <Typography
          variant="h2"
          style={{ color: "#FAFAFA", paddingBottom: "3%", fontWeight: "600" }}
        >
          Prototype Review
        </Typography>
        <Grid
          container
          alignContent="center"
          direction="row"
          justify="space-evenly"
          spacing={1}
          wrap="wrap"
        >
          <ReviewCard2
            percentage="63%"
            lightDesc="found the prototype"
            heavyDesc="user friendly"
          />
          <ReviewCard2
            percentage="57%"
            lightDesc="found the prototype"
            heavyDesc="easy to understand"
          />
          <ReviewCard2
            percentage="69%"
            lightDesc="understood the function of"
            heavyDesc="each icon"
          />
          <ReviewCard
            name="Subject #1"
            desc='"Overall the app looks amazing. I love the UI and color scheme. Good job."'
            dp="https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
          <ReviewCard
            name="Subject #2"
            desc='"The app was pretty intuitive and easy to figure out."'
            dp="https://images.unsplash.com/photo-1610554103915-c05cfbd55068?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
          />
          <ReviewCard
            name="Subject #3"
            desc='"The whole app looks excellent for a prototype, Few tweaks and its a dub."'
            dp="https://images.unsplash.com/photo-1588143140627-b6ea0f65448b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
          <Card
            style={{
              linearGradient: "(120deg, #fdfbfb 0%, #ebedee 100%)}",
              borderRadius: "20px",
              width: "83%",
              height: "20%",
              paddingBottom: "20px",
              paddingTop: "20px",
            }}
          >
            <Typography
              variant="h2"
              style={{ fontWeight: "600", color: "#1b1b1b" }}
            >
              Rated 4/5
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "300", color: "#1b1b1b" }}
            >
              by test subjects
            </Typography>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default PrototypeReview;
