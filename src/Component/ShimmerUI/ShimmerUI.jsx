const ShimmerEffect = ({ video }) => {
    return (
        <div className="container-fluid mt-3">
            <div className="d-flex gap-5">
                {/* Conditionally render shimmer UI based on `video` prop */}
                {Array.from({ length: 3 }).map((_, index) =>
                    video ? <ShimmerVideo key={index} /> : <ShimmerCard key={index} />
                )}
            </div>
        </div>
    );
};




// Individual shimmer card component for better structure
export const ShimmerVideo = () => {
    return (
        <div >

            <div className="card mb-4">
                <div className="card-body exercise-card placeholder-glow">
                    {/* Shimmer Image */}
                    <div className="placeholder bg-danger rounded" style={{ height: "300px", width: "500px" }}></div>
                </div>
            </div>

        </div>
    );
};

const ShimmerCard = () => {
    return (
        <div >

            <div className="card">
                <div className="card-body exercise-card placeholder-glow">
                    {/* Shimmer Image */}
                    <div className="placeholder bg-danger rounded" style={{ height: "300px", width: "300px" }}></div>

                    {/* Shimmer Text */}
                    <div className="card-body fw-bold mt-2">
                        <p className="card-text text-start">
                            <span className="placeholder bg-danger col-12"></span>
                        </p>
                        <p className="text-start">
                            <span className="placeholder bg-danger col-12"></span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default ShimmerEffect;

export const ShimmerExerciseCard = () => {
  return (
    <div className="mt-5 container p-3 placeholder-glow">
    <div className="row justify-content-center align-items-center">

      {/* Shimmer Image Placeholder */}
      <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
        <div className="placeholder bg-danger rounded w-100" style={{ height: "500px" }}></div>
      </div>

      {/* Shimmer Text Placeholder */}
      <div className="col-lg-5 col-md-6 col-sm-12">
        <div className="pt-4">
          {/* Extra placeholders visible only on `md` and larger screens */}
          <div className="mt-5 d-none d-md-block">
            <span className="placeholder bg-danger col-8 my-3"></span>
            <span className="placeholder bg-danger col-8 my-3"></span>
            <span className="placeholder bg-danger col-8 my-3"></span>
            <span className="placeholder bg-danger col-8 my-3"></span>
          </div>

          {/* Main shimmer expands to full width when extra placeholders are hidden */}
          <div className="d-md-none col-12">
            <span className="placeholder bg-danger w-100"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};



