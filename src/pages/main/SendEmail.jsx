import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const SendEmail = () => {

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-department',
		formData: [
			{ label: 'Name', type: 'text', name: 'name', colSize: 4 },
			{ label: 'Description', type: 'text', name: 'description', colSize: 8 },
		]
	}
	
    return (
        <>
			<CustomFormComponent formData={formData} />
			<div class="row">
            	<div class="col-lg-12 grid-margin stretch-card">
              		<div class="card">
						<div class="card-body">
							<h4 class="card-title">SEND EMAIL</h4>
							<div class="table-responsive">
								<table class="table table-striped">
									<thead>
										<tr>
											<th>
												Name
											</th>
											<th>
												Description
											</th>
											<th>
												Status
											</th>
										</tr>
                      				</thead>
                      				<tbody>
										<tr>
											<td>
												Womens' Fellowship
											</td>
											<td>
												All Mbaaku
											</td>
											<td>
												Live
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

export default SendEmail;
