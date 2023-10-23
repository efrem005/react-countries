import styled from "styled-components";
import { FaJsSquare } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

const Load = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(120, 120, 120, 0.21);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loading = () => {

    return (
        <Load>
            <AiFillClockCircle className="icon-react" />
        </Load>
    )
}