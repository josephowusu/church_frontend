import React from 'react';

const SendSmS = () => {
    return (
        <>
             <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">SMS LIST</h4>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>
                            Date
                          </th>
                          <th>
                            Messages
                          </th>
                          <th>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            May 15, 2015
                          </td>
                          <td>
                            Jesus is Lord
                          </td>
                          <td>
                            Sent
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
    );
}

export default SendSmS;
