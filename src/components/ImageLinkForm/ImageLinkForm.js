import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return ( 
		<div>
			<p>
				{'This Magic Brain will detect faces in your picture.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-2'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib black bg-light-green'
						onClick={onButtonSubmit}
						>Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;