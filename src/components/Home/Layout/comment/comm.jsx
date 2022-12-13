import * as React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import "./style.css";

export default function Comm() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://633fa89dd1fcddf69ca6ec51.mockapi.io/jabawan/v1/commentTodo")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="comment">
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      >
        {loading === true ? (
          <div className="">
            <div className="load">
              <Skeleton variant="circular" width={45} height={45} />
              <Skeleton variant="rectangular" width={"100%"} height={110} />
            </div>
            <div className="load">
              <Skeleton variant="circular" width={45} height={45} />
              <Skeleton variant="rectangular" width={"100%"} height={110} />
            </div>
            <div className="load">
              <Skeleton variant="circular" width={45} height={45} />
              <Skeleton variant="rectangular" width={"100%"} height={110} />
            </div>
          </div>
        ) : (
          <div>
            {data?.map((item, idx) => (
              <>
                <ListItem alignItems="flex-start" className="box">
                  <ListItemAvatar>
                    <Avatar
                      alt={item?.name?.toUpperCase()}
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ width: "100%", maxWidth: "100%" }}
                    // secondary={item?.name}
                    primary={
                      <React.Fragment className="box">
                        <Typography
                          className="comm"
                          sx={{
                            display: "flex",
                            fontStyle: "normal",
                            fontweight: "bold",
                          }}
                          component="span"
                          variant="h6"
                          color="text.primary"
                        >
                          <Typography variant="h6">@</Typography>
                          {item?.name}
                          <Typography variant="h6">
                            <FavoriteIcon
                              fontSize="small"
                              sx={{ color: pink[500] }}
                            />
                          </Typography>
                        </Typography>

                        <br></br>
                        <Typography
                          className="comm"
                          alignItems="flex-start"
                          sx={{
                            display: "flex",
                            fontStyle: "normal",
                            fontfamily: "Font Awesome 5 Free",
                          }}
                          component="span"
                          variant="subtitle2"
                          color="text.primary"
                        >
                          "{item?.comment}"
                        </Typography>
                        <Divider  />
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
              </>
            ))}
          </div>
        )}
        <div></div>
      </List>
    </div>
  );
}
