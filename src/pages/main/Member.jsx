import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const Dues = () => {
	const [records, setRecords] = useState({})

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-member',
		formData: [
			{ label: 'Member', type: 'fetchList', name: 'memberID', required: true, fetchEndPoint: '/fetch-members', display: ['firstName', 'otherName', 'lastName'], colSize: 8 },
			{ label: 'Amount', type: 'number', name: 'amount', colSize: 4 }
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		SocketIO.emit('/fetch-member', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0, branchID: sessionData ? sessionData[0].branchID : 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
				console.log(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/member/broadcast', () => {
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
							<h4 className="card-title">MEMBERS</h4>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>
												NAME
											</th>
											<th>
												DOB
											</th>
											<th>
												PHONE
											</th>
											<th>
												BRANCH
											</th>
										</tr>
                      				</thead>
                      				<tbody>
									  	{records && records.length > 0 ? records.map((record, index) => {
											return (
												<tr key={index}>
													
													<td>
														DETAILS
													</td>
												</tr>
											)
										}) : ''}
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

export default Dues;
