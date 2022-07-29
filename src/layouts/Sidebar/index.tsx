import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menu } from '../Config/menu';
import { Box } from '@mui/material';
import { ReactIcon } from '../../components/Icons/ReactIcon';

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  background: theme.palette.grey[900],
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, handleDrawerClose } = props;
  const theme = useTheme();

  const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
      ref={ref}
      to={props.to}
      className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ''}`}
    >
      {props.children}
    </NavLink>
  ));

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <ReactIcon sx={{ fontSize: 60 }} />
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon htmlColor="white" /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu.map((item, index) => (
            <ListItem
              sx={{ color: 'primary.main' }}
              disablePadding
              key={index}
              to={item.href}
              component={MyNavLink}
              activeClassName="Mui-selected"
              exact
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
