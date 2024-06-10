import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, fullDate, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';

const Branches = () => {
    const [records, setRecords] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/add-branch',
		formData: [
			{ label: 'Name', type: 'text', name: 'name', colSize: 4 },
			{ label: 'Description', type: 'text', name: 'description', colSize: 8 },
		]
	}

    const fetchRecords = () => {
		const sessionData = fetchData('sessionData')
		SocketIO.emit('/fetch-branch', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/branches/broadcast', () => {
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
							<h4 className="card-title">BRANCHES</h4>
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
												STATUS
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
														{record.description}
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

export default Branches;
