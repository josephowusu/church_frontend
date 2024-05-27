
import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const CalenderAndEvent = () => {

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-department',
		formData: [
			{ label: 'Event Name', type: 'text', name: 'name', colSize: 6 }, { label: 'Location', type: 'text', name: 'location', colSize: 6 },
			{ label: 'Description', type: 'text', name: 'description', colSize: 12 },
		]
	}
	
    return (
        <>
			<CustomFormComponent formData={formData} />
			<div class="row">
            	<div class="col-lg-12 grid-margin stretch-card">
              		<div class="card">
						<div class="card-body">
							<h4 class="card-title">CALENDAR AND EVENTS</h4>
							<div class="table-responsive">
								<table class="table table-striped">
									<thead>
										<tr>
											<th>
												NAME
											</th>
											<th>
												DESCRIPTION
											</th>
											<th>
												LOCATION
											</th>
                                            <th>
												DETAILS
											</th>
										</tr>
                      				</thead>
                      				<tbody>
										<tr>
											<td>
												Wedding
											</td>
											<td>
												Our Pastor ohNana weds our beautiful Maame Grace brakatu
											</td>
											<td>
												GOD IS LOVE CHOPBAR
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

export default CalenderAndEvent;

