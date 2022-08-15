import Banner from '../../database/models/banner';
import Customer from '../../database/models/customer';
import { IBanner } from '../interface/banner';
import { ERRORS } from '../utils/error';

const create = async (banner: IBanner | any): Promise<IBanner | any> => {
  const { customerID } = banner;
  const customerExists = await Customer.findOne({ where: { id: customerID } });
  if (!customerExists) throw ERRORS.CUSTOMER.NOT_FOUND;

  const { endAt, startAt } = banner;
  const condition = Date.parse(endAt) - Date.parse(startAt);
  if (condition < 0) throw ERRORS.BANNER.INCORRECT_DATES;

  await Banner.create(banner);
  return (banner);
};

const findAll = async (): Promise<Banner[]> => {
  const allBanners = await Banner.findAll();
  if (!allBanners) throw ERRORS.BANNER.NOT_FOUND;

  return allBanners;
};

const findById = async (id: string | number): Promise<IBanner | Banner> => {
  const response = await Banner.findOne({ where: { id } });
  if (!response) throw ERRORS.BANNER.NOT_FOUND;

  return (response);
};

const updateById = async (id: string | number, banner: IBanner | any): Promise<IBanner | Banner | null> => {
  const bannerExists = await Banner.findOne({ where: { id }});
  if (!bannerExists) throw ERRORS.BANNER.NOT_FOUND;

  const { name, image, customerID, endAt, startAt, status } = banner;
  await Banner.update(
    { name, image, customerID, endAt, startAt, status },
    { where: { id } },
  );

  const updatedCustomer = await Banner.findOne({ where: { id } });
  return updatedCustomer;
};

const deleteById = async (id: string | number): Promise<IBanner | Banner> => {
  const response = await Banner.findOne({ where: { id } });
  if (!response) throw ERRORS.BANNER.NOT_FOUND;

  await Banner.destroy({ where: { id } });
  return (response);
};

export default {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
