/* eslint-disable react/prop-types */
const FlagImage = ({ image, contained }) => {
  if (contained) {
    return (
      <div className="w-full aspect-video overflow-hidden">
        <img className="w-full h-full object-cover" src={image} />
      </div>
    );
  }

  return <img className="w-full h-full rounded-xl" src={image} />;
};

export default FlagImage;
