import { Device } from "@/entities/Device";
import { Garden } from "@/entities/Garden";
import { Plant } from "@/entities/Plant";

export const deviceList: Device[] = [
  {
    _id: "device1",
    createdAt: new Date("2023-08-01"),
    serialID: "12345",
    name: "Dispositivo A",
    isWorking: true,
    user: '64dd3a166566cdf859439c85',
  },
  {
    _id: "device2",
    createdAt: new Date("2023-08-05"),
    serialID: "67890",
    name: "Dispositivo B",
    isWorking: true,
    user: '64dd3a166566cdf859439c85'
  },
  {
    _id: "device3",
    createdAt: new Date("2023-08-10"),
    serialID: "54321",
    name: "Dispositivo C",
    isWorking: false,
    user: '64dd3a166566cdf859439c85'
  },
  {
    _id: "device4",
    createdAt: new Date("2023-08-15"),
    serialID: "98765",
    name: "Dispositivo D",
    isWorking: true,
    user: '64dd3a166566cdf859439c85'
  },
  {
    _id: "device5",
    createdAt: new Date("2023-08-20"),
    serialID: "24680",
    name: "Dispositivo E",
    isWorking: true,
    user: '64dd3a166566cdf859439c85'
  },
  {
    _id: "device6",
    createdAt: new Date("2023-08-25"),
    serialID: "13579",
    name: "Dispositivo F",
    isWorking: false,
    user: '64dd3a166566cdf859439c85'
  },
  {
    _id: "device7",
    createdAt: new Date("2023-08-30"),
    serialID: "11223",
    name: "Dispositivo G",
    isWorking: true,
    user: '64dd3a166566cdf859439c85'
  },
  {
    _id: "device8",
    createdAt: new Date("2023-09-01"),
    serialID: "99887",
    name: "Dispositivo H",
    isWorking: true,
    user: '64dd3a166566cdf859439c85'
  }
];

const garden: Garden = {
  id: "garden1",
  createdAt: new Date("2023-08-01"),
  name: "Varanda",
  device: {
    _id: "device1",
    createdAt: new Date("2023-07-15"),
    serialID: "12345",
    name: "Dispositivo A",
    isWorking: true,
    user: '64dd3a166566cdf859439c85'
  }
};

export const plantList: Plant[] = [
  {
    id: "plant1",
    createdAt: new Date("2023-08-05"),
    name: "Abacate",
    days: 10,
    waterPerSecond: 0.5,
    garden: garden
  },
  {
    id: "plant2",
    createdAt: new Date("2023-08-10"),
    name: "Gengibre",
    days: 7,
    waterPerSecond: 0.3,
    garden: garden
  },
  {
    id: "plant3",
    createdAt: new Date("2023-08-15"),
    name: "Capim Santo",
    days: 14,
    waterPerSecond: 0.2,
    garden: garden
  }
];
