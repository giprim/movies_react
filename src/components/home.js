import React, { useContext } from 'react';
import Navbar from './Navbar';

const Home = props => {
	const { history } = props;

	return (
		<>
			<Navbar history={history} />

			<div className='row pt-5'>
				<div className='col-md-6 '>
					<svg
						width='485'
						height='514'
						viewBox='0 0 485 514'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g opacity='0.45'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M184.323 328.946C262.63 328.946 326.11 265.466 326.11 187.159C326.11 108.852 262.63 45.3719 184.323 45.3719C181.375 45.3719 178.447 45.4619 175.543 45.6393C240.615 49.8788 292.082 104.001 292.082 170.145C292.082 239.055 236.219 294.917 167.309 294.917C101.166 294.917 47.0431 243.45 42.8035 178.379C42.6261 181.283 42.5361 184.211 42.5361 187.159C42.5361 265.466 106.016 328.946 184.323 328.946Z'
								fill='#823333'
							/>
							<rect
								x='252.381'
								y='283.738'
								width='40.7687'
								height='306.26'
								rx='20.3843'
								transform='rotate(-41.2601 252.381 283.738)'
								fill='#6F1D1D'
							/>
							<rect
								x='434.251'
								y='491.047'
								width='38.8137'
								height='30.4811'
								rx='15.2406'
								transform='rotate(-41.2601 434.251 491.047)'
								fill='#480C0C'
							/>
							<path
								d='M0 93.421L105.884 5.45426e-05L129.966 27.2954L103.495 50.6507L121.798 71.3951L148.269 48.0399L164.645 66.6007L138.174 89.956L155.514 109.609L181.985 86.2534L193.544 99.3552L167.074 122.71L189.23 147.822L215.701 124.467L233.04 144.12L127.156 237.541L109.817 217.888L129.67 200.371L115.22 183.994L95.3672 201.511L76.1011 179.674L95.9543 162.158L78.6148 142.505L58.7616 160.022L36.6056 134.91L56.4588 117.394L38.156 96.649L18.3028 114.165L0 93.421Z'
								fill='#690D0D'
							/>
							<rect
								x='11.0726'
								y='94.1133'
								width='11.7671'
								height='15.6894'
								transform='rotate(-41.4219 11.0726 94.1133)'
								fill='#F4F4F4'
							/>
							<rect
								x='98.9626'
								y='21.7988'
								width='15.6894'
								height='11.7671'
								transform='rotate(-41.4219 98.9626 21.7988)'
								fill='#F4F4F4'
							/>
							<rect
								x='49.9979'
								y='138.232'
								width='11.7671'
								height='11.7671'
								transform='rotate(-41.4219 49.9979 138.232)'
								fill='#F4F4F4'
							/>
							<rect
								x='83.733'
								y='176.467'
								width='11.7671'
								height='15.6894'
								transform='rotate(-41.4219 83.733 176.467)'
								fill='#F4F4F4'
							/>
							<rect
								x='120.063'
								y='217.644'
								width='11.7671'
								height='11.7671'
								transform='rotate(-41.4219 120.063 217.644)'
								fill='#F4F4F4'
							/>
							<rect
								x='135.293'
								y='62.9759'
								width='15.6894'
								height='15.6894'
								transform='rotate(-41.4219 135.293 62.9759)'
								fill='#F4F4F4'
							/>
							<rect
								x='202.764'
								y='139.447'
								width='15.6894'
								height='15.6894'
								transform='rotate(-41.4219 202.764 139.447)'
								fill='#F4F4F4'
							/>
						</g>
					</svg>
				</div>
				<div className='col-md-6'>
					<div className='shadow-sm p-3'>home page</div>
				</div>
			</div>
		</>
	);
};

export default Home;
