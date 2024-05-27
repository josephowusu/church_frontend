import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const SendSmS = () => {

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
							<h4 class="card-title">SEND SMS</h4>
							<div class="table-responsive">
								<table class="table table-striped">
									<thead>
										<tr>
											<th>
												SUBJECT
											</th>
											<th>
												MESSAGE
											</th>
											<th>
												STATUS
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
												SENT
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
