import styled, { css} from 'styled-components'
import elevate from '../utils/elevator'



export const SequencerBoard = styled.div`
background-color: #002635;
width: 80vmin;
height: 90vmin;
${elevate(24)}
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
box-sizing: border-box;
`

//box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
// background: ${props=>props.theme.background.idle};
export const MainWrapper = styled.div`
width: 100vmin;
height: 100vmin;
margin: 0 auto;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
`
