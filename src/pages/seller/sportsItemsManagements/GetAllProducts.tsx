import { Button, Form, Input, Modal, Table, TableColumnsType } from "antd";
import { useEffect, useState } from "react";
import {
  useCreateProductIntoDBMutation,
  useGetAllProductQuery,
} from "../../../redux/features/sportsItemsManagement/sportsItemsManagementApi";
import { TQueryParam } from "../../../types";
import { TProduct } from "../../../types/sportsItemsManagement";

import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  decrement,
  increment,
} from "../../../redux/features/counter/counterSlice";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

export type TTProduct = Pick<TProduct, "category" | "code">;

const GetAllProducts = () => {
  const dispatch = useAppDispatch();
  const [salesProduct] = useCreateProductIntoDBMutation();
  const [form] = Form.useForm();
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const { data: productData } = useGetAllProductQuery(params);
  let { count } = useAppSelector((state) => state.counter);
  const [product, setProduct] = useState({});
  const user = useAppSelector(selectCurrentUser);
  const { name, size, brand, category, code, price, quantity }: FieldType =
    product;

  /// set current date with time
  const [currentDateTime, setCurrentDateTime] = useState<string>();
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString();
      setCurrentDateTime(formattedDateTime);
    };
    // Update the time initially
    updateDateTime();
    // Set up interval to update the time every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const tableData = productData?.data?.map(
    ({
      _id,
      name,
      category,
      code,
      price,
      quantity,
      size,
      brand,
      productImg,
    }) => ({
      key: _id,
      name,
      category,
      quantity,
      size,
      code,
      price,
      brand,
      productImg,
    })
  );

  //////////////////////////////////////////
  /* const searchInput = useRef<InputRef>(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  type DataIndex = keyof TProduct;
  type InputRef = GetRef<typeof Input>;

 
  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

 const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<TProduct> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  }); */

  const columns: TableColumnsType<TTProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      /*  ...getColumnSearchProps("category"), */
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: `price`,
      key: "price",
    },
    {
      title: "Size",
      dataIndex: `size`,
      key: "size",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div>
            <Button type="primary" onClick={() => showModal(item)}>
              Salse
            </Button>
          </div>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showModal = (item: any) => {
    setProduct(item);
    setIsModalOpen(true);
    // Replace this with the logic to fetch or set your _id
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (data: any) => {
    try {
      const salesProductInfo = {
        seller: user!._id,
        name: name,
        branch: category,
        brand: brand,
        size: size,
        price: price,
        code: code,
        buyer: data.buyer,
        quantity: count,
        date: currentDateTime,
      };
      const res = await salesProduct(salesProductInfo).unwrap();
      form.resetFields();
      handleOk();
      if (res.success) {
        toast.success(`Sales ${name} successfully!!!`, {
          duration: 2000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  type FieldType = {
    key?: string;
    name?: string;
    category?: string;
    buyer?: string;
    date?: Date;
    code?: string;
    price?: string;
    quantity?: string;
    size?: string;
    brand?: string;
    features?: string;
    description?: string;
    productImg?: string;
  };

  return (
    <>
      <Modal
        title="Sales Porduct"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType> label="Name">
            <h4>{name}</h4>
          </Form.Item>
          <Form.Item<FieldType> label="Branch">
            <h4>{category}</h4>
          </Form.Item>
          <Form.Item<FieldType> label="Brand">
            <h4>{brand}</h4>
          </Form.Item>
          <Form.Item<FieldType> label="Code">
            <h4>{code}</h4>
          </Form.Item>
          <Form.Item<FieldType> label="Size">
            <h4>{size}</h4>
          </Form.Item>
          <Form.Item<FieldType> label="Price">
            <h4>{price}</h4>
          </Form.Item>
          <Form.Item<FieldType> label="Available Quantity">
            <h4>{quantity} Pcs</h4>
          </Form.Item>
          <Form.Item<FieldType>
            label="Buyer"
            name="buyer"
            rules={[{ required: true, message: "Please input your buyer!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Quantity" name="quantity">
            <div style={{ display: "flex" }}>
              <Button onClick={() => dispatch(increment())}>Increment</Button>
              <h3 style={{ marginInline: "10px" }}>{count}</h3>
              <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
};

export default GetAllProducts;
