import asyncHandler from 'express-async-handler';
import Enquiry from '../models/Enquiry.js';
import Respond from '../models/Respond.js';

// @desc fetch all enquiries
// @route GET api/v1/enquiries
// @access private Owner only

const getEnquiries = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        username: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Enquiry.countDocuments({ ...keyword });
  const enquiries = await Enquiry.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ enquiries, page, pages: Math.ceil(count / pageSize) });
});

// @desc fetch single enquiry
// @route GET api/v1/enquiries/:id
// @access Private Owner
const getEnquiryById = asyncHandler(async (req, res) => {
  const enqury = await Enquiry.findById(req.params.id);

  if (enqury) {
    res.json(enqury);
  } else {
    res.status(404);
    throw new Error('Enquiry not found');
  }
});

// @desc create single enquiry
// @route POST api/v1/enquiries
// @access public
const createEnquiry = asyncHandler(async (req, res) => {
  const { hotelId, username, userEmail, message } = req.body;
  const enquiry = new Enquiry({
    hotel: hotelId,
    username,
    userEmail,
    message,
  });
  const createdEnquiry = await enquiry.save();
  res.status(201).json(createdEnquiry);
});

// @desc create single respond
// @route POST api/v1/enquiries/:id/respond
// @access owner
const createRespond = asyncHandler(async (req, res) => {
  const { hotelId, hotelName, hotelPhotoUrl, message } = req.body;
  const enquiry = await Enquiry.findById(req.params.id);
  const respond = new Respond({
    hotel: hotelId,
    hotelName,
    hotelPhotoUrl,
    message,
    enquiryMessage: enquiry,
  });
  const createdRespond = await respond.save();
  res.status(201).json(createdRespond);
});

// @desc get sent  respond
// @route Get api/v1/enquiries/responds/:id
// @access owner
const getResponds = asyncHandler(async (req, res) => {
  const responses = await Respond.find({ hotel: req.params.id });
  if (responses) {
    res.status(201).json(responses);
  } else {
    res.status(404);
    throw new Error('No Reponses Found');
  }
});

// @desc get sent  respond by Id
// @route Get api/v1/enquiries/responds/sent/:id
// @access owner
const getRespondById = asyncHandler(async (req, res) => {
  const response = await Respond.findById(req.params.id);
  if (response) {
    res.status(201).json(response);
  } else {
    res.status(404);
    throw new Error('No Reponse Found');
  }
});

// @desc delete sent  respond by Id
// @route Delete api/v1/enquiries/responds/sent/:id
// @access owner
const deleteRespondById = asyncHandler(async (req, res) => {
  const response = await Respond.findById(req.params.id);
  if (response) {
    response.remove();
    res.status(201).json('Response Deleted');
  } else {
    res.status(404);
    throw new Error('No Reponse Found');
  }
});

export {
  getEnquiries,
  getEnquiryById,
  getResponds,
  getRespondById,
  deleteRespondById,
  createEnquiry,
  createRespond,
};
