
import React, { useState } from 'react';
import { generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const CalenderAndEvent = () => {

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-event',
		formData: [
			{ label: 'Event Name', type: 'text', name: 'name', colSize: 6 }, { label: 'Location', type: 'text', name: 'location', colSize: 6 },
			{ label: 'Description', type: 'text', name: 'description', colSize: 12 }, { label: 'DropZone', type: 'dropzone', name: 'files', colSize: 12 },
		]
	}
	
    return (
        <>
			<CustomFormComponent formData={formData} />
			<div className="row">
            	<div className="col-lg-12 grid-margin stretch-card">
              		<div className="card">
						<div className="card-body">
							<h4 className="card-title">CALENDAR AND EVENTS</h4>
							<div className="table-responsive">
								<table className="table table-striped">
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

