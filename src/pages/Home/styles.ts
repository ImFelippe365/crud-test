import styled from 'styled-components';


export const Label = styled.label`
    font-weight: bold;
    color: #3d3d3d;
    font-size: 14px;
    margin-bottom: 8px;
`

export const ErrorMessage = styled.label`
    color: #ed2939;
    font-size: 12px;
    margin-top: 0px;
`

export const FieldContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const AddButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
    justify-content: center;
    
	height: 45px;
	width: 160px;
    
	background-color: #4270E7;
	border: none;
	border-radius: 0 8px 8px 0;
	outline: none;
    font-weight: 600;
	font-size: 16px;
	color: white;
    cursor: pointer;

	&:hover {
		background-color: #3A60C1;
        transition: 0.3s all;
		outline: none;
	}

    .addButtonIcon {
		color: white;
		font-size: 28px;
		margin-right: 8px;
	}
`;

export const Input = styled.input`
	width: calc(100% - 160px);
    border-radius: 8px 0 0 8px;
    padding: 0px 0px 0px 24px;
	outline: none;
    height: 40px;
    border: 1.5px solid #B5B5B5;
`;

export const ClientsList = styled.section`
	margin: 32px 0px 64px 0px;
`;

export const ItensEmpty = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0px 24px;
    color: #3d3d3d;
	width: calc(100%-24px);
	background-color: #4270E720;
	border-radius: 8px;
	margin-top: 18px;
`;
