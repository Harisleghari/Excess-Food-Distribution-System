/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listbodypart.css";

const ListBodyPart = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 bg-dark">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={props.detailList.image}
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={props.detailList.image}
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={props.detailList.image}
                    className="d-block w-100"
                    alt="..."
                    height="500px"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/*row 2/ right-Side*/}
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 ">
            <div className="row m-2">
              <div className="border p-4 w-100 rounded">
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <b>
                      <span className="fw-bold box8">
                        Rs {props.detailList.price}
                      </span>
                    </b>
                  </div>
                  <div>
                    <img
                      src="https://www.olx.com.pk/assets/iconShare_noinline.41d8fa8326fea7b27bc24d3eca8b598a.svg"
                      alt="icon share"
                    />
                    
                  </div>
                </div>
                <p className="text-secondary">{props.detailList.description}</p>
                {/* <small className="text-secondary">
                  Bahria Town Phase 8 - Bahria Orchard, Rawalpindi
                </small> */}
              </div>

              {/*Row2/ Seller Description*/}
              <div className="border p-4 rounded  w-100 mt-5">
                <span className=" fw-light box9">
                  <strong>Seller Description</strong>
                </span>
                <div className="d-flex mt-3 mb-3">
                  <div className="m-1">
                    <img
                      src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                      alt=""
                      width="64px"
                      height="64px"
                    />
                  </div>
                  <div className="m-2 fs-3 fw-normal text-secondary">
                    <span className="fs-3 fw-normal text-secondary">
                      Haris Leghari
                    </span>
                    <p>Member since jul 2022</p>
                  </div>
                </div>
                <button type="submit" className="box">
                  <span>Chat with Seller</span>
                </button>
                <div className="d-flex justify-content-around m-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyicQZ5C5ob5iZsgWpAbCdIwHoHhAyj2CdA08q188&s"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                  <span className="fs-3 box10">+923361414330</span>
                  <a href="#" className="box10">
                    <u>Hide number</u>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Section 2/ Detailes Section*/}
      <div className="container-fluid">
        <div className="row m-3">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="border p-4 rounded w-100 mt-5">
              <h3 className="fw-bold box9">Detailes</h3>

              <div className="row text-secondary">
                <div className="col-lg-10 col-md-12 col-sm-12 d-flex justify-content-between">
                  <p>price</p>
                  <p>{props.detailList.price}</p>
                  {/* <p>type</p>
                  <p>Residential Plots</p> */}
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-between">
                  {/* <p>Area Unit</p>
                  <p>Marla</p>
                  <p>Area</p>
                  <p>5</p> */}
                </div>
                <hr />
                <h4>
                  <b className="fw-bold box9">Description</b>
                </h4>
                <div className="text-secondary">
                  <p>{props.detailList.title}</p>
                  <p>{props.detailList.description}</p>
                  {/* <p>5 marla </p>
                  <p>best for investment</p>
                  <p>good location plot </p>
                  <p>for more details contact us</p> */}
                </div>
              </div>
            </div>
          </div>

          {/*Post section*/}

          <div className="col-lg-5 col-md-6 col-sm-12 box1">
            <div className="border  rounded  w-100 mt-5">
              <p className="p-3  box9">
                <b>Posted in</b>
              </p>
              {/* <small className="p-3 text-secondary">
                Bahria Town Phase 8 - Bahria Orchard, Rawalpindi
              </small> */}
              <div className="box2">
                <img
                  src="https://www.olx.com.pk/assets/mapPlaceholder_noinline.af3a4b7300a65b66f974eed7023840ac.svg"
                  alt=""
                  width="100%"
                  className="mt-3"
                />
              </div>
              <div className="d-flex justify-content-between">
                <a href="#">
                  <button className="box5 box9">SEE LOCATION</button>
                </a>
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq50FJLOts07Zp-uJPVOyLaqDfQuqwDYCsA&usqp=CAU"
                    alt=""
                    width="25px"
                    height="25px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBodyPart;
