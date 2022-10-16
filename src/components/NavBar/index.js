import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import classes from "./navbar.module.css";
import apiCall from "../../helper/axios";
import { Toastify } from "../../App"
import { useNavigate } from "react-router-dom";

function BrandExample() {
  let navigate = useNavigate();

  const logoutCall = async () => {
    try {
      const res = await apiCall(localStorage.getItem('lt_patner_token')).post('/logout');
      console.log(res, "logout")
      if (res.status == 200) {
        localStorage.clear()
        navigate('/login');
        Toastify("success", res.data.message);
      } else {
        Toastify("error", 'Something went wrong');

      }

    } catch (e) {
      Toastify("error", `${e.response.data.message}`);
      console.log(e.response.data.message, "error")
    }
  }
  return (
    <>
      <Navbar style={{ backgroundColor: "#fff", borderBottom: "1px solid #eff2f5" }}>
        <Container>
          <Navbar.Brand href="/">
            <div style={{ fontSize: '2rem', fontWeight: "650" }}>
              {/* <span style={{ color: '#1e24c4' }}>Super</span><span style={{ color: '#f34d76' }}>Mind</span> */}

              <img src='https://lt.partners/wp-content/uploads/2020/03/LTP-Logo-1.svg'
                className={classes.logo_brand}
                // className="d-inline-block align-top"
                alt="LT patners logo"
              />
            </div>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            {localStorage.getItem('lt_patner_token') ? <Button onClick={async (e) => {
              e.preventDefault();
              await logoutCall();
            }} variant="danger">Logout</Button> : <></>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;