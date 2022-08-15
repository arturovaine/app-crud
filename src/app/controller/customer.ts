import { RequestHandler} from 'express';
import customerService from '../service/customer';

const create: RequestHandler = async (req, res) => {
  const { name, email, phone, password } = req.body;
  const customer = { name, email, phone, password };
  const newCustomer = await customerService.create(customer);
  
  return res.status(201).json(newCustomer);
};

const findById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const foundCustomer = await customerService.findById(id);
  
  return res.status(200).json(foundCustomer);
};

const findAll: RequestHandler = async (_req, res) => {
  const allCustomers = await customerService.findAll();
  
  return res.status(200).json(allCustomers);
};

const updateById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { customer } = req.body;
  const updatedCustomer = await customerService.updateById(id, customer);

  return res.status(200).json(updatedCustomer);
};

const deleteById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const foundCustomer = await customerService.findById(id);

  await customerService.deleteById(id);
  return res.status(200).json(foundCustomer);
};

export default {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
};
