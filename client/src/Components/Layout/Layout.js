import React from 'react'
import RootComponent from "./RootComponent"
import { Route } from 'react-router';
import "../Assets/css/style.css"
import "../Assets/css/navlink.css"
// import "../Assets/scss/components/plugin-overrides/_data-tables.scss"

// import '../Assets/scss/'
export default function Layout(props) {
    return (
      <div class="container-scroller">
        <RootComponent name={props.name} />
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
      </div>
    );
}
