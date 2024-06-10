import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, fullDate, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const MarkAttendance = () => {
    const [records, setRecords] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/mark-attendance',
		formData: [
            { label: 'Men', type: 'number', name: 'men', colSize: 4 },
            { label: 'Women', type: 'number', name: 'women', colSize: 4 },
			{ label: 'Children', type: 'number', name: 'children', colSize: 4 }
		]
	}

    const fetchRecords = () => {
		const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-attendance', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/attendance/broadcast', () => {
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
							<h4 className="card-title">ATTENDANCE</h4>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>
												DATE
											</th>
											<th>
												MEN
											</th>
											<th>
												WOMEN
											</th>
                                            <th>
												CHILDREN
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
														{record.men}
													</td>
													<td>
														{record.women}
													</td>
                                                    <td>
														{record.children}
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

export default MarkAttendance;
