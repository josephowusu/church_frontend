import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const Leadership = () => {
	const [records, setRecords] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-organisation',
		formData: [
			{ label: 'Name', type: 'text', name: 'name', colSize: 4 },
			{ label: 'Description', type: 'text', name: 'description', colSize: 8 },
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-organisation', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/organisation/broadcast', () => {
			fetchRecords()
		})
	}, [])
	
    return (
        <>
			<CustomFormComponent formData={formData} />
			<div className="row">
            	<div className="col-lg-12 grid-margin stretch-card">
              		<div className="card">
						<div className="card-body">
							<h4 className="card-title">LEADERSHIP</h4>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>
												Name
											</th>
											<th>
												Level
											</th>
											<th>
												Status
											</th>
										</tr>
                      				</thead>
                      				<tbody>
									  {records && records.length > 0 ? records.map((record) => {
											return (
												<tr>
													<td>
														{record.name}
													</td>
													<td>
														{record.level}
													</td>
													<td>
														{record.status}
													</td>
												</tr>
											)
										}) : null}
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

export default Leadership;
