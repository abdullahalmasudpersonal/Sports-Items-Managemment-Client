import { Table } from "antd";
import "./Invoice.css";
import moment from "moment-timezone";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const Invoice = ({ product }) => {

  const { buyer, price, quantity, name, createdAt, invoice, size } = product;
  const date = (moment(createdAt)
    .tz("Asia/Dhaka")
    .format("YYYY-MM-DD HH:mm:ss"));

  const [datePart, timePart] = date.split(' ');
  const [year, month, day] = datePart.split('-');

  const totalAmount = quantity * price;



  console.log(product)
  const dataSource = [
    {
      name: name,
      quantity: quantity,
      price: price,
      size: size,
      amount: totalAmount
    },
  ];
  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
    },
  ];

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#d11fb6",
      color: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: '1000px', // The PDF viewer will take up all of the width and height
      height: '1200px',
    },
  });

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>

          <View style={styles.section}>
            <Text>Hello</Text>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
          {/*  <div className="invoice ">
          <div className="invoiceDev " style={{ position: "relative" }}>
            <h1>INVOICE</h1>

            <h4 style={{ marginTop: "20px" }}>{buyer}</h4>
            <h4>Address line 2</h4>
            <h4>Address line 2</h4>

            <div className="billSection">
              <div className="">
                <h2>Seller</h2>
                <h3>Abdullah al masud</h3>
              </div>
              <div className="">
                <h2>Ship To</h2>
                <h3>MD Ibrahim</h3>
              </div>
              <div className="">
                <h2>INVOICE#</h2>
                <h2>INVOICE DATE</h2>
              </div>
              <div className="">
                <h3>{invoice}</h3>
                <h3>{day}-{month}-{year}</h3>
              </div>
            </div>

            <div
              style={{ border: "4px ridge  rgb(180,180,180)", marginTop: "10px" }}
            ></div>

            <div>
              <Table
                style={{ marginTop: "20px" }}
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={{ x: "max-content" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "200px",
              }}
            >
              <h1>Thank you</h1>
            </div>
          </div>
        </div> */}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Invoice;
