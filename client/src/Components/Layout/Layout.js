import React from 'react'
import RootComponent from "./RootComponent"
import { Route } from 'react-router';
import "../Assets/css/style.css"
import "../Assets/css/navlink.css"
import "../Assets/vendors/mdi/css/materialdesignicons.min.css"
import "../Assets/vendors/base/vendor.bundle.base.css"
import "../Assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css"

// import "../Assets/scss/style.scss"
// import "../Assets/scss/_background.scss"
// import "../Assets/scss/_demo.scss"
// import "../Assets/scss/_fonts.scss"
// import "../Assets/scss/_footer.scss"
// import "../Assets/scss/_functions.scss"
// import "../Assets/scss/_layouts.scss"
// import "../Assets/scss/_misc.scss"
// import "../Assets/scss/_navbar.scss"
// import "../Assets/scss/_reset.scss"
// import "../Assets/scss/_sidebar.scss"
// import "../Assets/scss/_typography.scss"
// import "../Assets/scss/_utilities.scss"
// import "../Assets/scss/_variables.scss"
// import "../Assets/scss/_vertical-wrapper.scss"
// import "../Assets/scss/mixins/_animation.scss"
// import "../Assets/scss/mixins/_badges.scss"
// import "../Assets/scss/mixins/_blockqoute.scss"
// import "../Assets/scss/mixins/_buttons.scss"
// import "../Assets/scss/mixins/_cards.scss"
// import "../Assets/scss/mixins/_misc.scss"
// import "../Assets/scss/landing-screens/_auth.scss"
// import "../Assets/scss/components/plugin-overrides/_data-tables.scss"
// import "../Assets/scss/components/_badges.scss"
// import "../Assets/scss/components/_bootstrap-progress.scss"
// import "../Assets/scss/components/_buttons.scss"
// import "../Assets/scss/components/_cards.scss"
// import "../Assets/scss/components/_checkbox-radio.scss"
// import "../Assets/scss/components/_dropdown.scss"
// import "../Assets/scss/components/_forms.scss"
// import "../Assets/scss/components/_icons.scss"
// import "../Assets/scss/components/_lists.scss"
// import "../Assets/scss/components/_tables.scss"
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
