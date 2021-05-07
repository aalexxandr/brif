import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const MenuItems = [
    {
      name: 'Главная',
      path: '/'
    },
    {
      name: 'Активные заявки',
      path: 'open_requests'
    },
    {
      name : 'Закрытые заявки',
      path : 'closed_requests'
    }
]

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '22ch',
          },
        }}
      >
        {MenuItems.map((item) => (
          <MenuItem key={item.path} selected={item === 'Pyxis'} onClick={handleClose}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}