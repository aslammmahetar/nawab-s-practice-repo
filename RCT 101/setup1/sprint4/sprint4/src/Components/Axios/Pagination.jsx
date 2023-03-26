import { btnDiv, btnStyle } from "./styles";

function Pagination({ handlePrev, handleNext, page }) {
  return (
    <div style={btnDiv}>
      <button onClick={handlePrev} style={btnStyle}>
        Prev
      </button>
      <button style={btnStyle}>{page}</button>
      <button onClick={handleNext} style={btnStyle}>
        Next
      </button>
    </div>
  );
}
export default Pagination;
