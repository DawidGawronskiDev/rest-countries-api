/* eslint-disable react/prop-types */
const FlagImage = ({ image }) => {
  return (
    <div className="aspect-video overflow-hidden">
      <img className="w-[100%] h-[100%] object-cover" src={image} />
    </div>
  );
};

export default FlagImage;
