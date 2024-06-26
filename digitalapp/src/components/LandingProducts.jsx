import prod1 from "../images/redux.svg";
export default function LandingProducts() {
  return (
    <>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 flex-wrap justify-content-center">
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-3 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div
            className="bg-body-tertiary shadow-sm mx-auto"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <img src={prod1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
