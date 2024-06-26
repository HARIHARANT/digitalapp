import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/reducer/product";

export default function AddProduct() {
  const FormElementFrame = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product);

    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(addProduct({ field: name, value }));
    };

    const handleSubmit = (e) => {};

    return (
      <>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="prodName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="productHelp"
                  placeholder="Enter product name"
                  id="productName"
                  name="productName"
                  onChange={handleChange}
                  value={productList.productName}
                />
                <small id="productHelp" className="form-text text-muted">
                  We'll never share your product with anyone else.
                </small>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="prodType">Product Type</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="productTypeHelp"
                  placeholder="Enter product type"
                  id="productType"
                  name="productType"
                  onChange={handleChange}
                  value={productList.productType}
                />
                <small id="prodTypeHelp" className="form-text text-muted">
                  We'll never share your product type with anyone else.
                </small>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </>
    );
  };
  return (
    <>
      <Card title="Add Product" subTitle="Product Details">
        <FormElementFrame />
      </Card>
    </>
  );
}
