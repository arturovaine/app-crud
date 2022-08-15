import { DataTypes, Model } from 'sequelize';
import db from '.';
import Customer from './customer';
// import { now } from '../utils/time';

class Banner extends Model {}

Banner.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  endAt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startAt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // createdAt: {
  //   type: DataTypes.DATE,
  //   defaultValue: now(),
  //   allowNull: false,
  // },
}, {
  sequelize: db,
  // modelName: 'banners',
  tableName: 'banners',
  timestamps: false,
});

Banner.belongsTo(Customer, { foreignKey: 'customerID' as 'id' });

export default Banner;
