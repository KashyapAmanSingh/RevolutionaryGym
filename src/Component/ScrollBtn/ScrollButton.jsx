/* eslint-disable react/prop-types */


const ScrollButtons = ({ scrollContainer }) => {
  const handleScroll = (scrollValue) => {
    const newScrollPosition = scrollContainer.current.scrollLeft + scrollValue;
    scrollContainer.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="d-flex justify-content-between m-1">
      <button className="btn btn-primary mr-2" onClick={() => handleScroll(-380)}>
        <i className="fa-solid fa-arrow-left fa-fade"></i>
      </button>
      <button className="btn btn-primary " onClick={() => handleScroll(380)}>
        <i className="fa-solid fa-arrow-right fa-fade"></i>
      </button>
    </div>
  );
};

export default ScrollButtons;
