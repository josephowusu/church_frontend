import React, { useEffect, useRef, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';
import CustomModal from '../../components/customModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { MdPrint, MdFileDownload } from 'react-icons/md';

const Offerings = () => {
	const [records, setRecords] = useState({})
	// const location = useLocation();
	// const navigate = useNavigate();
	const [modalOpen,setModalOpen]=useState(false)
	let total = 0
	const printRef = useRef(null);
	const [modalData, setModalData] = useState([])
	const handleCloseModal = () => {
		setModalOpen(!modalOpen)
	  };
	//   const isModalOpen = new URLSearchParams(location.search).get('modal') === 'true'
	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-offerings',
		formData: [
			{ label: 'Amount', type: 'number', name: 'amount', colSize: 12 }
		]
	}

	useEffect(() => {
		console.log("modal data Offerings: ", modalData)
	}, [modalOpen]) 

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
	const handlePrint = () => {
        if (!printRef.current) {
            console.error('Element not found.');
            return;
        }

        const printContents = printRef.current.outerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload(); // Refresh page after printing
    };

    const handlePrints = () => {
        const printContents = document.getElementById('modalContent').innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload(); // Refresh page after printing
    };
	const recordsHeaders = [
		{ label: 'DATE', key: 'date' },
		{ label: 'AMOUNT', key: 'amount' }
	];

	const recordsData = Object.entries(records).map(([createdAt, transactions]) => {
		let totalAmount = 0;
		transactions.map((transaction) => {
			totalAmount += Number(transaction.amount);
		});
		return {
			date: createdAt,
			amount: `GHS${totalAmount}`
		};
	});

	const modalHeaders = [
		{ label: 'MEMBER', key: 'member' },
		{ label: 'AMOUNT', key: 'amount' },
		{ label: 'BRANCH', key: 'branch' }
	];

	const modalCsvData = modalData.map(transaction => ({
		member: `${transaction.firstName || ''} ${transaction.otherName || ''} ${transaction.lastName || ''}`,
		amount: `GHS${transaction.amount}`,
		branch: transaction.name
	}));

    return (
        <>
			<CustomFormComponent formData={formData} />
			<div className="row">
            	<div className="col-lg-12 grid-margin stretch-card">
              		<div className="card">
						<div className="card-body">
							<h4 className="card-title">OFFERINGS</h4>
							<div className="mb-3">
                                <button onClick={handlePrint} className="btn btn-primary mr-2">
                                    <MdPrint style={{ marginRight: '5px' }} /> 
                                </button>
                                <CSVLink data={recordsData} headers={recordsHeaders} filename="offerings_records.csv" className="btn btn-secondary">
                                    <MdFileDownload style={{ marginRight: '5px' }} /> 
                                </CSVLink>
                            </div>
							<div className="table-responsive"  ref={printRef} id="elementToPrint">
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
 <div className="mb-3">
                    <button onClick={handlePrints} className="btn btn-primary mr-2">
                        <MdPrint style={{ marginRight: '5px' }} /> 
                    </button>
                    <CSVLink data={modalCsvData} headers={modalHeaders} filename="offerings_details.csv" className="btn btn-secondary">
                        <MdFileDownload style={{ marginRight: '5px' }} />
                    </CSVLink>
                </div>							<div className="table-responsive" id="modalContent">
								<table className="table table-striped">
									<thead>
										<tr>
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
										<th>TOTAL: GHS{total}</th>
									</tfoot>
								</table>
							{/* </div>
						</div> */}
					
					</div>      </CustomModal>
        </>
    );
}

export default Offerings;
