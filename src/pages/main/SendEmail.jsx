import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, fullDate, generateIdentifier, shortenText } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const SendEmail = () => {
	const [records, setRecords] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/send-email',
		formData: [
			{ label: 'Department', type: 'fetchList', name: 'departmentID', fetchEndPoint: '/fetch-department', display: ['name'], colSize: 4 },
			{ label: 'Subject', type: 'text', name: 'subject', colSize: 8 },
			{ label: 'Message', type: 'textarea', name: 'message', colSize: 12 },
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-email', { sessionID: sessionData ? sessionData.token : null, limit: 100, offset: 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/send_mail/broadcast', () => {
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
							<h4 className="card-title">SEND EMAIL</h4>
							<div className="table-responsive">
								<table className="table table-striped">
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
									  {records && records.length > 0 ? records.map((record) => {
											return (
												<tr>
													<td>
														{fullDate(record.createdAt)}
													</td>
													<td>
														{record.subject}
													</td>
													<td>
														{shortenText(record.message, 50)}
													</td>
													<td>
														{record.sent_status}
													</td>
													<td>
														DETAILS
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
    )
}

export default SendEmail;
