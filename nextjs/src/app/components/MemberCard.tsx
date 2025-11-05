import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const MemberCard = ({ imgUrl, name, isCurrent, onClick }) => {
  return (
    <div
      className={`group relative border-2 bg-logo-black rounded-md max-w-72 ${isCurrent ? 'border-logo-yellow' : ''}`}
      onClick={onClick}
    >
      <div>
        {imgUrl ? (
          <img
            className="object-cover w-full h-72"
            src={imgUrl}
            alt="Photo of a member"
            loading="lazy"
          />
        ) : (
          <img
            className="object-contain w-full h-72 p-4"
            src="/images/logo/plk-galacticos-logo-round.png"
            alt="Slika clana powerlifting kluba"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-row justify-start items-center">
        <h3 className="text-lg lg:text-xl font-semibold px-4 py-4">{name}</h3>
        <img className="w-4 h-auto" src="/icons/share.svg" alt="Click" loading="lazy"/>
      </div>
      <div className="absolute top-0 bg-black-op flex-row justify-center items-center w-full h-full hidden group-hover:flex active:hidden duration-500 cursor-pointer">
        <img
          className="bg-logo-yellow-300 rounded-full flex justify-center items-start p-2 w-12"
          src="/icons/click.svg"
          alt="CLICK"
          loading="lazy"
        />
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isCurrent: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MemberCard;
