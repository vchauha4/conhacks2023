import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { ListItemButton } from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {IconButton} from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
export default function GroceryList() {
  return (
    <List sx={{borderColor:"black", borderRadius: 'sm',
    maxWidth: "100%",
    boxShadow: 'sm',
    bgcolor: 'background.body',
    justifyItems:"center"}}>
            <ListItem>
            <ListItemDecorator>
                  <ReorderIcon />
                </ListItemDecorator>
              <ListItemButton>
                 Chicken
              </ListItemButton>
            </ListItem>
            
            <ListItem>
            <ListItemDecorator>
                  <ReorderIcon />
            </ListItemDecorator>
              <ListItemButton> Beef</ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemDecorator>
                  <ReorderIcon />
            </ListItemDecorator>
              <ListItemButton> Pork Loin Chop</ListItemButton>
            </ListItem>
          </List>
  );
}
