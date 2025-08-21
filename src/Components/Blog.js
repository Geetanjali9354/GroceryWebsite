import React from "react";
import TopBar from "./TopBar";
import { BaselineHome } from "../Images/SvgImages";
function Blog() {
    return (
        <div className="container-fluid g-0">
            <TopBar />
            <div className="d-flex justify-content-between align-items-center" style={{
                height: '80px',
                backgroundColor: '#E9EEFB',
                padding: '0 20px'
            }}>
                <h4 className="m-0 fw-bold" style={{ fontFamily: 'Quicksand' }}>Blog </h4>
                <div className="d-flex align-items-center text-muted" style={{ fontSize: '14px', fontFamily: 'Quicksand' }}>
                    <BaselineHome height="18px" width="18px" className="me-2" />
                    <a className="me-1" href="/" style={{ textDecoration: 'none' }}>Home</a>
                    <span className="mx-1">{'>'}</span>
                    <span className="text-primary">Blog </span>
                </div>
            </div>
        </div>
    );
}

export default Blog;
