import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const SendSmS = () => {
	const [records, setRecords] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/send-sms',
		formData: [
			{ label: 'Department', type: 'fetchList', name: 'departmentID', fetchEndPoint: '/fetch-department', display: ['name'], colSize: 4 },
			{ label: 'Message', type: 'text', name: 'message', colSize: 8 }
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		console.log(sessionData)
		SocketIO.emit('/fetch-dues', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
				console.log(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/dues/broadcast', () => {
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
							<h4 className="card-title">SEND SMS</h4>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>
												MESSAGE
											</th>
											<th>
												STATUS
											</th>
										</tr>
                      				</thead>
                      				<tbody>
									  {records && records.length > 0 ? records.map((record) => {
											return (
												<tr>
													<td>
														{record.message}
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

export default SendSmS;
