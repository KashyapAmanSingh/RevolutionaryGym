import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="position-fixed d-flex justify-content-between w-100 px-4" style={{ bottom: "20px" }}>
            <button 
        onClick={() => navigate(-1)}  // Moves back in history
        className="btn  btn-info"
      >
        🔙 Back
      </button>

      <button 
        onClick={() => navigate(1)}  // Moves forward in history if possible
        className="btn btn-info"
      >
        ⏭ Next
      </button>
    </div>
  );
};

export default NavigationButtons;
