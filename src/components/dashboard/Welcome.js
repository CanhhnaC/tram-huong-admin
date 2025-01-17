import React from "react";
import { Box, Card, CardActions, Button, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";

import backgroundImage from "./welcome_bg.png";
import publishArticleImage from "./welcome_illustration.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      theme.palette.type === "dark"
        ? "#535353"
        : `url(${backgroundImage}) no-repeat #6f4ceb`,
    color: "#fff",
    padding: 20,
    marginTop: theme.spacing(2),
    marginBottom: "1em",
  },
  media: {
    background: `url(${publishArticleImage}) top right / cover`,
    marginLeft: "auto",
  },
  actions: {
    [theme.breakpoints.down("md")]: {
      padding: 0,
      flexWrap: "wrap",
      "& a": {
        marginTop: "1em",
        marginLeft: "0!important",
        marginRight: "1em",
      },
    },
  },
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            {
              "Chào mừng bạn đến với trang quản trị viên của Trầm Hương đạo quán"
            }
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              {"Đây là trang quản trị. Thoải mái tạo mới và sửa đổi sản phẩm"}
            </Typography>
          </Box>
          <CardActions className={classes.actions}>
            <Button
              variant="contained"
              href="http://happycats.bike/"
              startIcon={<HomeIcon />}
            >
              {"Trang chủ"}
            </Button>
          </CardActions>
        </Box>

        <Box
          display={{ xs: "none", sm: "none", md: "block" }}
          width="15em"
          overflow="hidden"
        >
          <Box height="9em" width="15em" className={classes.media} />
        </Box>
      </Box>
    </Card>
  );
};

export default Welcome;
