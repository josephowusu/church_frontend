import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const Leadership = () => {
	const [records, setRecords] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-leadership',
		formData: [
			{ label: 'Member', type: 'fetchList', name: 'userID', required: true, fetchEndPoint: '/fetch-members', display: ['firstName', 'otherName', 'lastName'], colSize: 4 },
			{ label: 'Role', type: 'text', name: 'role', colSize: 4 },
			{ label: 'Level', type: 'fetchList', name: 'level', required: true, fetchEndPoint: '/fetch-level', display: ['level'], colSize: 4 },
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		SocketIO.emit('/fetch-leadership', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0,  branchID: sessionData ? sessionData[0].branchID : 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/leadership/broadcast', () => {
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
												Role
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
									  {records && records.length > 0 ? records.map((record, index) => {
											return (
												<tr key={index}>
													<td>
														{record.firstName ? record.firstName : ''} {record.otherName ? record.otherName : '' } {record.lastName ? record.lastName : ''}
													</td>
													<td>
														{record.role}
													</td>
													<td>
														{record.level == 1 ? 'HeadOffice' : record.level == 2 ? 'District / Area' : record.level == 3 ? 'Branch' : 'Unset'}
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
