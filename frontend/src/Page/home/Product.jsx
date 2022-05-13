import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import Newsletter from "../../Components/Home/Newsletter";
import IncDecCounter from "../../Components/Home/IncDecCounter";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get1Product } from "../../redux/apiProduct";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  position: relative;
  top: 80px;
  left: 0;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
  margin-top: 20px;
`;

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);

  const selectedProduct = useSelector(
    (state) => state.product.products?.allProduct
  );

  const [file, setFile] = useState(selectedProduct?.image);

  // const [username,setUsername]= useState(selectedProduct.username);
  // const [password,setPassword] = useState(selectedProduct.password);
  // const [email,setEmail]= useState(selectedProduct.email);
  // const [phone,setPhone]= useState(selectedProduct.phone);
  // const [fullname,setFullname] = useState(selectedProduct.fullname);
  // const [role,setRole]= useState(selectedProduct.role);

  const { id } = useParams();

  //Load trang
  useEffect(() => {
    get1Product(user?.accessToken, dispatch, id);
    // getAllUsers(user?.accessToken,dispatch)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // const newUser = {
    //   username: username,
    //   password: password,
    //   email,
    //   phone,
    //   fullname,
    //   role,
    //   image: file,
    // }
    // editUser(newUser,dispatch,navigate,id,user?.accessToken)
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={selectedProduct?.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{selectedProduct?.name}</Title>
          <Desc>{selectedProduct?.description}</Desc>
          <Price>{selectedProduct?.price}</Price>
          <AddContainer>
            <IncDecCounter />
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
