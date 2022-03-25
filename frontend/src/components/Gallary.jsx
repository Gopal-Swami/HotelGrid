import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';

const Gallary = ({ gallaryItems }) => {
  return (
    <ImageList className="gallary">
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Gallary</ListSubheader>
      </ImageListItem>
      {gallaryItems.map((item) => (
        <ImageListItem key={item}>
          <img src={`\\${item}`} alt="" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallary;
