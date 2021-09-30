import React from 'react'
import HomeComponent from "../../HomeComponent/HomeComponent"
import TableComponent from '../../TableComponent/TableComponent'
import FormComponent from '../../FormComponent/FormComponent'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'

export default function RightComponent(props) {
    const tableData = {
        headers:["#","Name","Hobby", "Birth Date"],
        data:[
            ["1","Jenil","Football","21/11/2001"],
            ["2","Keval","Cricket","21/11/2001"],
            ["3","Rikin","Cricket","21/11/2001"],
            ["4","kevin","Chess","03/12/2001"],
            ["5","M.S.Dhoni","Cricket","21/08/1998"],
         ]
    }

    const componentMapping = {
        "home":<HomeComponent/>,
        "tables":<TableComponent tableData={tableData}/>,
        "forms" : <FormComponent/>,
        "buttons":<ButtonComponent/>
    }
    return (
        <>
            {componentMapping[props.name]}
        </>
    )
}
