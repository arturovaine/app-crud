"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const customer_1 = __importDefault(require("./customer"));
// import { now } from '../utils/time';
class Banner extends sequelize_1.Model {
}
Banner.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerID: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    endAt: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    startAt: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: now(),
    //   allowNull: false,
    // },
}, {
    sequelize: _1.default,
    // modelName: 'banners',
    tableName: 'banners',
    timestamps: false,
});
Banner.belongsTo(customer_1.default, { foreignKey: 'customerID' });
exports.default = Banner;
