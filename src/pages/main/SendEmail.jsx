import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const SendEmail = () => {

	const formData = {
		id: generateIdentifier(),
		endPoint: '/send_mail',
		formData: [
			{ label: 'Subject', type: 'text', name: 'subject', colSize: 4 },
			{ label: 'Message', type: 'text', name: 'message', colSize: 8 },
			{ label: 'Email list', type: 'textarea', name: 'mails', colSize: 12 },
			// {title:'Departments', label: 'Department', type: 'select', name: 'department', colSize: 8,
			// 	options:[
			// 		{value:'choir',label:'Choir'},
			// 		{value:'Mens Department',label:'Mens Department'},
			// 		{value:'Womens Department',label:'Womens Department'},
			// 	]
			// }
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
