import styled from 'styled-components';

export const ItemContainer = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	padding: 0px 24px;
	width: calc(100%-24px);
	background-color: #4270E720;
	border: none;
	outline: none;
	border-radius: 8px;
	margin-top: 12px;

	&:hover {
		background-color: none;
		outline: none;
	}

	label  {	
		font-size: 16px;
		color: #4270E7;
	}

	input {
		font-size: 16px;
		color: #3d3d3d;
		outline: none;
		border-radius: 6px;
		border: 1px solid #4270E7;
		padding: 6px 12px;
	}

	section {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #4270E7;
		font-size: 28px;
		padding: 8px;
		gap: 20px;

		.deleteIcon, .editIcon {
			cursor: pointer;
		}

		.deleteIcon:hover, .editIcon:hover {
			transition: 0.3s all;
			transform: translateY(-3px);
		}
	}
`;