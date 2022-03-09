import React, { useEffect, useState } from "react";

import styled, { css } from 'styled-components';

import image from "../Header/ActionTab/img1.jpg";

import image2 from "../Header/ActionTab/img2.jpg";
import image3 from "../Header/ActionTab/img3.jpg";


import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { PageHeader } from "../../Common/Components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { GetPosts } from "../../Common/requestApi";
import { useStyles } from "./BodyStyles";
import { Public } from "@material-ui/icons";

export default function BlogPost() {
  const classes = useStyles();
  const [Fetched, setFetched] = useState(false);
  const [Posts, setPosts] = useState([]);
  const Button = styled.button`
  background-color: green;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


  //calling posts api
  useEffect(() => {
    !Fetched &&
      GetPosts({ limit: 25 }).then(({ data: { data } }) => {
        setPosts(data);
        setFetched(true);
        console.log("dataPost:", data);
      });
  }, [Fetched]);
  return (
    <Box mt={2}>
      <PageHeader  title='Templates' />
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
      <img alt={image} src={image}/>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
      <img alt={image} src={image2}/>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
      <img alt={image} src={image3}/>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
      <img alt={image} src={image}/>
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={1}>
        {Posts.length >= 0 ? (
          <Typography component='p' align='center' style={{ width: "100%" }}>
            <CircularProgress color='primary' />
          </Typography>
        ) : (
          Posts.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={4}
              style={{ maxWidth: "400px", margin: "10px auto" }}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label={item.owner.firstName}
                      src={item.owner.picture}></Avatar>
                  }
                  title={item.owner.firstName}
                  // subheader={'Posted on'+ item.owner.email}
                />
                <img
                  src={item.image}
                  alt={item.text}
                  className={`${classes.responsiveImg} ${classes.cardImage}`}
                />

                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<FavoriteIcon color='secondary' />}
                    size='small'
                    color='secondary'>
                    {item.likes}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid> */}
    </Box>
  );
}
