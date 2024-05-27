import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const SendSmS = () => {

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-department',
		formData: [
			{ label: 'Message', type: 'text', name: 'message', colSize: 12 },
			{ label: 'To', type: 'text', name: 'To', colSize: 4 },
			{title:'Departments',label: 'Department', type: 'select', name: 'department', colSize: 8,
				options:[
					{value:'choir',label:'Choir'},
					{value:'Mens Department',label:'Mens Department'},
					{value:'Womens Department',label:'Womens Department'},
				]
			 }

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
