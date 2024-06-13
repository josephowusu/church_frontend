import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import CustomModal from '../../components/customModal';

const Dues = () => {
	const [records, setRecords] = useState({})
	const location = useLocation();
	const navigate = useNavigate();
	const [modalOpen,setModalOpen] = useState(false)
	const {id}=useParams()
	const handleCloseModal = () => {
		setModalOpen(!modalOpen)
	};
	let total = 0
	const [modalData, setModalData] = useState([])

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-dues',
		formData: [
			{ label: 'Member', type: 'fetchList', name: 'memberID', required: true, fetchEndPoint: '/fetch-members', display: ['firstName', 'otherName', 'lastName'], colSize: 8 },
			{ label: 'Amount', type: 'number', name: 'amount', colSize: 4 }
		]
	}

	useEffect(() => {
		console.log("modal data: ", modalData)
	}, [modalOpen])

	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		SocketIO.emit('/fetch-dues', { sessionID: sessionData ? sessionData.token : null, limit: 10, offset: 0, branchID: sessionData ? sessionData[0].branchID : 0}, (response) => {
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
							<h4 className="card-title">DUES</h4>
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
													<td style={{cursor:'pointer'} } onClick={()=>{setModalData(transactions);setModalOpen(true)}} >
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
		  <CustomModal 
        show={modalOpen} 
        handleClose={handleCloseModal} 
		title={'OFFERINGS'}
      >
	{/* <h4 className="card-title">OFFERINGS</h4> */}
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>
												MEMBER
											</th>
											<th>
												AMOUNT
											</th>
											<th>
												BRANCH
											</th>
										</tr>
                      				</thead>
                      				<tbody>
									  {modalData && modalData.length > 0 ? modalData.map((transaction, index) => {
										total += Number(transaction.amount || 0)
										return (
											<tr key={index}>
												<td>
													{transaction.firstName || ''} {transaction.otherName || ''} {transaction.lastName || ''}
												</td>
												<td>
													GHS{transaction.amount}
												</td>
												<td>
													{transaction.name}
												</td>
											</tr>
										)
										}) : null}
                      				</tbody>
									  <tfoot>
            <th>TOTAL: </th>
            <th>GHS{total}</th>
          </tfoot>
								</table>
							{/* </div>
						</div> */}
					
					</div>      </CustomModal>
        </>
    );
}

export default Dues;
