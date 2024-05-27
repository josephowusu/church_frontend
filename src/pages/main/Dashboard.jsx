import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Members Financial management review</h4>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>
                            Full name
                          </th>
                          <th>
                            Gender
                          </th>
                          <th>
                            Phone
                          </th><th>
                            Dues
                          </th>
                          <th>
                            Date Joined
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Herman Beck
                          </td>
                          <td>
                            Male
                          </td>
                          <td>
                            0592382938
                          </td>
                          <td>
                            GHS2000.00
                          </td>
                          <td>
                            May 15, 2024
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Dashboard
