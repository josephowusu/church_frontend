import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';


const Offerings = () => {
	const [records, setRecords] = useState({})

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-offerings',
		formData: [
			{ label: 'Amount', type: 'number', name: 'amount', colSize: 12 }
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		SocketIO.emit('/fetch-offerings', { sessionID: sessionData ? sessionData.token : null, branchID: sessionData ? sessionData[0].branchID : 0, limit: 10, offset: 0}, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/offerings/broadcast', () => {
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
							<h4 className="card-title">OFFERINGS</h4>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>
												DATE
											</th>
											<th>
												AMOUNT
											</th>
											<th>
												CHECK
											</th>
										</tr>
                      				</thead>
                      				<tbody>
									  {Object.entries(records).map(([createdAt, transactions]) => {
											let totalAmount = 0
											transactions.map((transaction) => {
												totalAmount += Number(transaction.amount)
											})
											return (
												<tr key={createdAt}>
													<td>
														{createdAt}
													</td>
													<td>
														GHS{totalAmount}
													</td>
													<td>
														DETAILS
													</td>
												</tr>
											)
										})}
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

export default Offerings;
