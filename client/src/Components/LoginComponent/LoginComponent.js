import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginComponent() {
    return (
        <>
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth px-0">
                        <div class="row w-100 mx-0">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                                    {/* <div class="brand-logo">
                <img src="" alt="logo"/>
              </div> */}
                                    <h4>Dharmsinh Desai University</h4>
                                    <h6 class="font-weight-light">Sign in to continue.</h6>
                                    <form class="pt-3">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div class="mt-3">
                                            <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">SIGN IN</a>
                                        </div>

                                        <div class="text-center mt-4 font-weight-light">
                                            Don't have an account? <NavLink to="/register" class="text-primary">Create</NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="../Assets/vendors/chart.js/Chart.min.js"></script>
            <script src="../Assets/vendors/datatables.net/jquery.dataTables.js"></script>
            <script src="../Assets/vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
            <script src="../Assets/vendors/base/vendor.bundle.base.js"></script>
            <script src="../Assets/js/off-canvas.js"></script>
            <script src="../Assets/js/hoverable-collapse.js"></script>
            <script src="../Assets/js/template.js"></script>
            <script src="../Assets/js/dashboard.js"></script>
            <script src="../Assets/js/data-table.js"></script>
            <script src="../Assets/js/jquery.dataTables.js"></script>
            <script src="../Assets/js/dataTables.bootstrap4.js"></script>
            <script src="../Assets/js/jquery.cookie.js" type="text/javascript"></script>
        </>

    )
}

export default LoginComponent
