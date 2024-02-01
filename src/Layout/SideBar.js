import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    "& .MuiTypography-body1": {
      fontSize: 18,
      fontWeight: 700,
      color: "#000",
    },
    "& .MuiSvgIcon-root": {
      fill: "#000",
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <aside className={classes.container}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </aside>
  );
};

export default Sidebar;
