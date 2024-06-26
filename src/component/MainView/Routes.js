import React, { Children, cloneElement } from "react";
import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const RouteTabLg = ({ icon, label, onClick }) => {
  return (
    <ListItemButton onClick={() => onClick()}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

const RouteTabXs = ({ icon, onClick }) => {
  return (
    <IconButton style={{"marginLeft": "auto", "marginRight": "auto"}} onClick={() => onClick()}>
      {icon}
    </IconButton>
  )
}

export const RouteTab = ({ icon, text, path, navigate, open, handleDrawerClose }) => {
  const onClick = () => {
    handleDrawerClose && handleDrawerClose()
    navigate(path)
  }

  return (<>
    {(open === true) ? (
      <ListItem disablePadding>
        <RouteTabLg icon={icon} label={text} path={path} onClick={onClick} />
      </ListItem>
    ) : (<>
      <ListItem disablePadding sx={{ display: { xs: 'none', lg: 'block' } }}>
        <RouteTabLg icon={icon} label={text} path={path} onClick={onClick} />
      </ListItem>

      <ListItem disablePadding sx={{ display: { lg: 'none' } }}>
        <RouteTabXs icon={icon} path={path} onClick={onClick} />
      </ListItem>
    </>)}
  </>)
}

export const Routes = ({ open, navigate, children }) => {
  return (<>
    {Children.toArray(children).map(child => {
      return cloneElement(child, { open: open, navigate: navigate })
    })}
  </>)
}
