import Customer from '../../database/models/customer';
import { ICustomer } from '../interface/customer';
import { ERRORS } from '../utils/error';

const create = async (customer: ICustomer | any): Promise<ICustomer> => {
  const customerExists = await Customer.findOne({ where: { email: customer.email } });
  if (customerExists) throw ERRORS.CUSTOMER.ALREADY_TAKEN;
  
  await Customer.create(customer);
  
  return (customer);
};

const findAll = async (): Promise<Customer[]> => {
  const allCustomers = await Customer.findAll();
  if (!allCustomers) throw ERRORS.CUSTOMER.NOT_FOUND;

  return allCustomers;
};

const findById = async (id: string | number): Promise<ICustomer | Customer> => {
  const response = await Customer.findOne({ where: { id } });
  if (!response) throw ERRORS.CUSTOMER.NOT_FOUND;

  return (response);
};

const updateById = async (id: string | number, customer: ICustomer ): Promise<ICustomer | Customer | null> => {
  const customerExists = await Customer.findOne({ where: { id }});
  if (!customerExists) throw ERRORS.CUSTOMER.NOT_FOUND;

  const { name, email, phone, password } = customer;
  await Customer.update({ name, email, phone, password }, { where: { id } });

  const updatedCustomer = await Customer.findOne({ where: { id } });
  return updatedCustomer;
};

const deleteById = async (id: string | number): Promise<ICustomer | Customer> => {
  const response = await Customer.findOne({ where: { id } });
  if (!response) throw ERRORS.CUSTOMER.NOT_FOUND;

  await Customer.destroy({ where: { id } });
  return (response);
};

export default {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
