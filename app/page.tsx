/* eslint-disable @next/next/no-img-element */
import Image from "next/image"; 
import logo2 from "../app/pratial/images/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pratial/styles/header.css";
import ViewPage from '@/app/display/viewPage';

export default function Home() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Image className="shresh" src={logo2} alt="error" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav flex flex-row">
              <li className="nav-item dropdown text-white wrapper">
                <li><a className="dropdown-item" href="#">Home</a></li>
                <li><a className="dropdown-item" href="#">About US</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ViewPage/>
      <div>
        {/* Other components or content */}
      </div>
    </main>
  );
}
