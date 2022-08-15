import { RequestHandler} from 'express';
import bannerService from '../service/banner';

const create: RequestHandler = async (req, res) => {
  const { name, image, customerID, endAt, startAt, status} = req.body;
  const newBanner = { name, image, customerID, endAt, startAt, status};
  await bannerService.create(newBanner);
  
  return res.status(201).json(newBanner);
};

const findById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const foundBanner = await bannerService.findById(id);
  
  return res.status(200).json(foundBanner);
};

const findAll: RequestHandler = async (_req, res) => {
  const allBanners = await bannerService.findAll();
  
  return res.status(200).json(allBanners);
};

const updateById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, image, customerID, endAt, startAt, status} = req.body;
  const customer = { name, image, customerID, endAt, startAt, status};
  const updatedCustomer = await bannerService.updateById(id, customer);

  return res.status(200).json(updatedCustomer);
};

const deleteById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const foundBanner = await bannerService.findById(id);

  await bannerService.deleteById(id);
  return res.status(200).json(foundBanner);
};

export default {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
};
