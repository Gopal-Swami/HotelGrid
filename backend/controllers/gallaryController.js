import asyncHandler from 'express-async-handler';
import Hotel from '../models/Hotel.js';
let gallaryImg = '..HotelGridfrontend\\public\\images\\gallaryImage.jpg';

// @desc create single gallary image
// @route POST api/v1/gallary/:id
// @access Private / Admin / Owners
const createGallaryImage = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    if (req.file) {
      let pathForImage = 'images\\' + req.file.path.split('images')[1];
      hotel.gallary.push(pathForImage);
      const updatedHotel = await hotel.save();
      res.status(201).json(updatedHotel);
    } else {
      res.status(400);
      throw new Error('Please Add Image To Create Gallary');
    }
  } else {
    res.status(404);
    throw new Error('Hotel Not Found');
  }
});

// @desc Update single gallary image
// @route PUT api/v1/gallary/:id
// @access Private / Admin / Owners
const updateGallaryImage = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    if (req.file) {
      let pathForImage = 'images\\' + req.file.path.split('images')[1];
      let ind = hotel.gallary.indexOf(req.body.imgName);
      hotel.gallary[ind] = pathForImage;
      const updatedHotel = await hotel.save();
      res.status(201).json(updatedHotel);
    } else {
      res.status(400);
      throw new Error('Please Add Image To Create Gallary');
    }
  } else {
    res.status(404);
    throw new Error('Hotel Not Found');
  }
});

// @desc Delete single gallary image
// @route Delete api/v1/gallary/:id
// @access Private / Admin / Owners
const deleteGallaryImage = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (hotel) {
    hotel.gallary = hotel.gallary.filter((gal) => gal !== req.body.imgName);
    const updatedHotel = await hotel.save();
    res.status(201).json(updatedHotel);
  } else {
    res.status(404);
    throw new Error('Hotel Not Found');
  }
});

export { createGallaryImage, updateGallaryImage, deleteGallaryImage };
