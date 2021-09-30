import React, { useState, useEffect } from "react";

export default function TableComponent(props) {
  // JSON array must contains
  // {headers:[],data:[[],[],[]]}

  return (
    <div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Table</h4>

            <div class="table-responsive pt-3">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    {props["tableData"]["headers"].map((e) => {
                      return (
                        <>
                          <th>{e}</th>
                        </>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {props["tableData"]["data"].map((e) => {
                    return (
                      <>
                        <tr>
                          {e.map((e1) => {
                            return <td>{e1}</td>;
                          })}
                        </tr>
                      </>
                    );
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
