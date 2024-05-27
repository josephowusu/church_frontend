import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const Tithes = () => {

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-tithes',
		formData: [
			{ label: 'Date (YYYY-MM-DD)', type: 'text', name: 'date', colSize: 6 },
			{ label: 'Amount', type: 'number', name: 'amount', colSize: 6 },
		]
	}
	
    return (
        <>
			<CustomFormComponent formData={formData} />
			<div class="row">
            	<div class="col-lg-12 grid-margin stretch-card">
              		<div class="card">
						<div class="card-body">
							<h4 class="card-title">TITHES</h4>
							<div class="table-responsive">
								<table class="table table-striped">
									<thead>
										<tr>
											<th>
												DATE
											</th>
											<th>
												AMOUNT
											</th>
											<th>
												CHECK
											</th>
										</tr>
                      				</thead>
                      				<tbody>
										<tr>
											<td>
												MAY 26, 2024
											</td>
											<td>
												GHS70,000.00
											</td>
											<td>
												DETAILS
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

export default Tithes;
