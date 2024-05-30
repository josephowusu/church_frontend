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
			{ label: 'Email list', type: 'textarea', name: 'mails', colSize: 12 }
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
												DATE
											</th>
											<th>
												SUBJECT
											</th>
											<th>
												MESSAGE
											</th>
											<th>
												STATUS
											</th>
											<th>
												CHECK
											</th>
										</tr>
                      				</thead>
                      				<tbody>
										<tr>
											<td>
												2024-05-23
											</td>
											<td>
												Helo
											</td>
											<td>
												All Mbaaku assembly
											</td>
											<td>
												sent 1, failed 2
											</td>
											<td>
												DETAIL
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

export default SendEmail;
