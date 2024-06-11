
import React, { useEffect, useState } from 'react';
import { SocketIO, fetchData, generateIdentifier, shortenText } from '../../modules/helper';
import CustomFormComponent from '../../components/CustomFormComponent';
import { useNavigate } from 'react-router-dom';

const CalenderAndEvent = () => {
	const [records, setRecords] = useState([])
	const navigate = useNavigate()

	const formData = {
		id: generateIdentifier(),
		endPoint: '/insert-update-event',
		formData: [
			{ label: 'Event Name', type: 'text', name: 'title', colSize: 6 }, { label: 'Location', type: 'text', name: 'location', colSize: 6 },
			{ label: 'Description', type: 'text', name: 'description', colSize: 12 }, { label: 'Extra Details (Dress Color, Meeting place etc.)', type: 'text', name: 'extraInfo', colSize: 12 }, 
			{ label: 'DropZone', type: 'dropzone', name: 'files', colSize: 12 },
		]
	}

	const fetchRecords = () => {
		const sessionData = fetchData('userData')
		SocketIO.emit('/fetch-event', { sessionID: sessionData ? sessionData.token : null,  branchID: sessionData ? sessionData[0].branchID : 0, limit: 10, offset: 0 }, (response) => {
			if (response.status === 'success') {
				setRecords(response.data)
			}
		})
	}

	const goToPost = (postId) => {
        navigate(`/post/${postId}`);
    }

	useEffect(()=> {
		fetchRecords()
		SocketIO.on('/event/broadcast', () => {
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
							<h4 className="card-title">CALENDAR AND EVENTS</h4>
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
												LOCATION
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
														{record.title ? shortenText(record.title, 30) : ''}
													</td>
													<td>
														{record.description ? shortenText(record.description, 90) : ''}
													</td>
													<td>
														{record.location}
													</td>
													<td>
														<span style={{cursor: 'pointer'}} onClick={()=>goToPost(record.id)}>DETAILS</span>
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

export default CalenderAndEvent;

