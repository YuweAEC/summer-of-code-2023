import { useEffect, useState } from "react";
import { get, update } from "../API/api_func";
export default function UpdateProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    get(setProducts);
  }, []);
  const [alert, setAlert] = useState(<></>);
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    price: 0,
    location: "",
    description: "",
    img_url: "",
    metadata_user: "",
    isNegotiable: false,
    isFeatured: false,
    isPromoted: false,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,name in ['isNegotiable','isFeatured','isPromoted'])
    if (["isNegotiable", "isFeatured", "isPromoted"].indexOf(name) != -1) {
      // console.log(event.target.checked)
      // console.log(event.target)
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: event.target.checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.price = parseInt(formData.price, 10);
    // console.log
    formData.title=products.filter((pro)=>pro["_id"]["$oid"]===formData["id"])[0]["title"]
    console.log(formData)
    update(formData,setAlert)
  };
  return (
    <>
      {products.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="spinner-border" role="status" />
        </div>
      ) : products.length === 1 && products[0] === "Error Loading the Page" ? (
        <h4>"Error Loading the Page"</h4>
      ) : (
        <div className="row justify-content-center py-5" id="contactus">
          <div
            className="card col-sm-8 "
            style={{
              borderRadius: "0.625rem",
              background: "#FFF",
              boxShadow: "2px 10px 28px 0px rgba(75, 0, 129, 0.12)",
            }}
          >
            <form className="card-body" onSubmit={handleSubmit}>
              {alert}
              <div className="px-4 was-validated">
                <label for="id" className="form-label fw-bold mt-4 fs-5">
                  Choose a Product
                </label>
                <select value={formData.id}
                      onChange={handleInputChange} class="form-select" aria-label="choose the product you want to edit" name="id" required>
                  <option value="" selected disabled hidden >Choose the product you want to update</option>
                  {products.map(
                  (product,index)=>(<option value={product["_id"]["$oid"]} className="flex-item" key={product["_id"]["$oid"]}>{product.title}</option>)
                  )}
                </select>
                <div id="validtitle" className="invalid-feedback">
                      This field is required to be a field
                    </div>
              </div>
              <div className="row">
                <div className="col px-4 ms-3 was-validated">
                  <label
                    for="category"
                    className="form-label fw-bold mt-4 fs-5"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Enter the Category of Product"
                    name="category"
                    required
                  />
                  <div id="validtitle" className="invalid-feedback">
                    This field is required to be a field
                  </div>
                </div>
                <div className="col px-4 was-validated">
                  <label for="price" className="form-label fw-bold mt-4 fs-5">
                    Price
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Please Enter the Price"
                      value={FormData.price}
                      onChange={handleInputChange}
                      name="price"
                      required
                    />
                    <span className="input-group-text">.00</span>
                    <div id="validtitle" className="invalid-feedback">
                      This field is required to be a field
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 was-validated">
                <label for="location" className="form-label fw-bold mt-4 fs-5">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter the location of the seller"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
                <div id="validtitle" className="invalid-feedback">
                  This field is required to be a field
                </div>
              </div>
              <div className="px-4 was-validated">
                <label
                  for="description"
                  className="form-label fw-bold mt-4 fs-5"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="Please expalin us about the product"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
                <div id="validtitle" className="invalid-feedback">
                  This field is required to be a field
                </div>
              </div>
              <div className="px-4 was-validated">
                <label for="img_url" className="form-label fw-bold mt-4 fs-5">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="img_url"
                  placeholder="URL goes here"
                  name="img_url"
                  value={formData.img_url}
                  onChange={handleInputChange}
                  required
                />
                <div id="validtitle" className="invalid-feedback">
                  This field is required to be a field
                </div>
              </div>
              <div className="px-4 was-validated">
                <label
                  for="metadata_user"
                  className="form-label fw-bold mt-4 fs-5"
                >
                  Metadata
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="metadata_user"
                  placeholder="metadata"
                  name="metadata_user"
                  required
                />
                <div id="validtitle" className="invalid-feedback">
                  This field is required to be a field
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleInputChange}
                  id="isnegotiable"
                  name="isNegotiable"
                />
                <label className="form-check-label" for="isnegotiable">
                  You want to make the product negotiable
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={handleInputChange}
                  id="isFeatured"
                  name="isFeatured"
                />
                <label className="form-check-label" for="isFeatured">
                  you want the product to be featured
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={formData.isPromoted}
                  onChange={handleInputChange}
                  id="isPromoted"
                  name="isPromoted"
                />
                <label className="form-check-label" for="isPromoted">
                  you want the product to be promoted
                </label>
              </div>
              <div className="row my-4">
                <input
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  value="Submit to update Product"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
