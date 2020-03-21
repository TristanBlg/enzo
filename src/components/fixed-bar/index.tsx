import styled, { css } from "styled-components"

export enum PositionEnum {
  top,
  bottom,
  left,
  right,
}

const position = {}

position[PositionEnum.top] = css`
  top: 0;
  left: 0;
  width: 100vw;
`
position[PositionEnum.bottom] = css`
  bottom: 0;
  left: 0;
  width: 100vw;
`
position[PositionEnum.left] = css`
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
`
position[PositionEnum.right] = css`
  flex-direction: column;
  bottom: 0;
  right: 0;
  height: 100vh;
`

export const FixedBar = styled.div<{ position: PositionEnum }>`
  position: fixed;
  display: flex;
  ${props => position[props.position]}
`
