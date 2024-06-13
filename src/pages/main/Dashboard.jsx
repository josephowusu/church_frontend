import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, fullDate } from '../../modules/helper';

const Dashboard = () => {
	const [records, setRecords] = useState([])

  	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		SocketIO.emit('/fetch-members-details', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0, branchID: sessionData ? sessionData[0].branchID : 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
				}
			console.log(response)
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
            <div className="row">
            	<div className="col-lg-12 grid-margin stretch-card">
              		<div className="card">
                		<div className="card-body">
                  			<h4 className="card-title" style={{textTransform: 'uppercase'}}>Members Financial management review</h4>
                  			<div className="table-responsive">
                    			<table className="table table-striped">
                      				<thead>
										<tr>
											<th>
												FULL NAME
											</th>
											<th>
												ACCOUNT TYPE
											</th>
											<th>
												PHONE
											</th>
											<th>
												DUES
											</th>
											<th>
												TITHES
											</th>
						
										</tr>
									</thead>
								<tbody>
								{records && records.length > 0 ? records.map((record) => {
									return (
										<tr>
											<td>
												{record.firstName} {record.otherName ? record.otherName : ''} {record.lastName}
											</td>
											<td>
												{record.type}
											</td>
											<td>
												{record.phone ? record.phone : ''}
											</td>
											<td>
												{record.totalDues ? record.totalDues : '0.00'}
											</td>
											<td>
												{record.totalTithes ? record.totalTithes : '0.00'}
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

export default Dashboard
