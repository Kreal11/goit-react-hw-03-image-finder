import styled from 'styled-components';

export const StyledWrapperOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

export const StyledWrapperModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  overflow: hidden;
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-left: auto;
    /* position: absolute;
    right: 0;
    top: 0; */
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 16/9;
  }
`;
