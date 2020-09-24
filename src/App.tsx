import React from 'react';
import { Table } from './components';
import { IColumnHeading } from './types/Table';
import _ from 'lodash';

const columns: Array<IColumnHeading> = [
  {
    label: "Image",
    keyIndex: "image",
    sortable: true,
  },
  {
    label: "Name",
    keyIndex: "name",
    sortable: false,
  },
  {
    label: "Barcode",
    keyIndex: "barcode",
    sortable: true,
  },
  {
    label: "Weight",
    keyIndex: "weight",
    sortable: true,
  },
  {
    label: "Sold",
    keyIndex: "status.sold,status.purchased",
    sortable: true,
    render: (value, rowKey) => _.join(Object.values(value), " "),
  }
]

const Data = [
  {
    barcode: "10012",
    lastUpdated: 1599486104400,
    lastUpdated_String: "2020-09-07T13:41:44.400Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599486104400,
    stock: { in: 101, out: 0 },
    draft: false,
    name: "New Glass Set",
    weight: "6",
    uom: ["Pieces"],
    salePrice: 0,
    itemStatus: false,
    cost: 0,
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    dimensions: "121x212 Inches",
    uuid: "af2e0c43-2912-42e3-9520-4ff92eddddd8",
    color: ["Yellow"],
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10001",
    lastUpdated: 1599144001488,
    lastUpdated_String: "2020-09-03T14:40:01.488Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599144001488,
    stock: { in: 8, out: 0 },
    draft: false,
    name: "T/S ROUND",
    weight: "12",
    uom: ["pieces", "cartons"],
    salePrice: "0",
    itemStatus: false,
    cost: "0",
    imageURL: ["abcd.com", "xyz.com"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    uuid: "31a8f9c2-c2ad-4aa2-be2c-a254069c5f8a",
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10008",
    lastUpdated: 1599486088240,
    lastUpdated_String: "2020-09-07T13:41:28.240Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599486088240,
    stock: { in: 1, out: 0 },
    draft: false,
    name: "New Glass Set",
    weight: "6",
    uom: ["Pieces"],
    salePrice: "0",
    itemStatus: false,
    cost: "0",
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    dimensions: "156x131 Inches",
    uuid: "6c80699a-7d97-4f97-9526-86fa3cf10bef",
    color: ["Green", "Black"],
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10017",
    lastUpdated: 1599219655973,
    lastUpdated_String: "2020-09-04T11:40:55.973Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599219655973,
    stock: { in: 102, out: 0 },
    draft: false,
    name: "update product",
    weight: "34",
    uom: ["Pieces", "Pound"],
    salePrice: 0,
    itemStatus: false,
    cost: 0,
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    dimensions: "222x222 Inches",
    uuid: "5b682f64-8ff3-4316-a300-3fa6f890a76c",
    color: ["Yellow", "Green"],
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10023",
    lastUpdated: 1599486719737,
    lastUpdated_String: "2020-09-07T13:51:59.737Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599486719737,
    stock: { in: 0, out: 0 },
    draft: false,
    name: "Tea Set with Spoons",
    weight: "12",
    uom: ["Pieces"],
    salePrice: 0,
    itemStatus: false,
    cost: 0,
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    dimensions: "",
    uuid: "cb077e1e-c8c6-4cf9-a553-7075ecf29295",
    color: ["Yellow"],
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10014",
    lastUpdated: 1599202976629,
    lastUpdated_String: "2020-09-04T07:02:56.629Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599202976629,
    stock: { in: 11, out: 0 },
    draft: false,
    name: "Test",
    weight: null,
    uom: ["Pieces"],
    salePrice: 0,
    itemStatus: false,
    cost: 0,
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    dimensions: null,
    uuid: "25afb6bf-094f-4524-8526-551097ffaa73",
    color: ["Black"],
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10009",
    lastUpdated: 1599201380352,
    lastUpdated_String: "2020-09-04T06:36:20.352Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599201380352,
    stock: { in: 13, out: 0 },
    draft: false,
    name: "New Product",
    weight: "6",
    uom: ["Pieces"],
    salePrice: 0,
    itemStatus: false,
    cost: 0,
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    dimensions: "121x212 Inches",
    uuid: "a13400fd-c067-48c6-98a6-43f2b9940230",
    color: ["Yellow", "Green"],
    otherStatus: false,
    type: "product",
  },
  {
    barcode: "10022",
    lastUpdated: 1599486669615,
    lastUpdated_String: "2020-09-07T13:51:09.615Z",
    userType: "admin",
    status: {
      sold: false,
      dispatched: false,
      purchased: false,
      stored: false,
    },
    createdAt: 1599486669615,
    stock: { in: 0, out: 0 },
    draft: false,
    name: "Tea Set New",
    weight: "12",
    uom: ["Pieces"],
    salePrice: 0,
    itemStatus: false,
    cost: 0,
    imageURL: ["imgURl"],
    subCategory: "T/S OPAL WHITE",
    category: "Tea Set",
    uuid: "3a5d25c6-ae66-4c12-84de-e57245ec2a74",
    color: ["Yellow"],
    otherStatus: false,
    type: "product",
  },
];

function App() {
  return (
    <Table columnHeadings={columns} data={Data} onRowItemClick={console.log} />
  );
}

export default App;
