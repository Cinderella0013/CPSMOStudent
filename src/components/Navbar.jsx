// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      <img src="/images/logo.jpg" alt="Banner สโมสร"
          className="img-fluid rounded shadow mt-3"
          style={{ maxHeight: '50px', objectFit: 'cover' }}/>
        <Link className="navbar-brand" to="/"> สโมสรนักศึกษา วิทยาลัยการคอมพิวเตอร์</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">หน้าหลัก</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/calendar">ปฏิทินกิจกรรมสโมสร</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
                บริการสำหรับนักศึกษา
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/register-activity">ลงทะเบียนกีฬา-ชุมนุม</Link></li>
                <li><Link className="dropdown-item" to="/equipment">ยืม-คืนพัสดุอุปกรณ์</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown">
                ร้านค้าสโมสร
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/shop">CP SHOP</Link></li>
                <li><Link className="dropdown-item" to="/orders">ตรวจสอบสถานะการสั่งจอง</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">ติดต่อ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
