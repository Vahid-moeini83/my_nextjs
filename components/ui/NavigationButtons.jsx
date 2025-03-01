import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function NavigationButtons() {
  return (
    <>
      <button className="custom-prev custom-arrow">
        <BiChevronLeft size={24} />
      </button>
      <button className="custom-next custom-arrow">
        <BiChevronRight size={24} />
      </button>
    </>
  );
}

export default NavigationButtons;
