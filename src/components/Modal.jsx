import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const Modal = ({ toggleModal}) => {
    //get the trailer link from the movieslice
    const trailerLink = useSelector((state)=> state.movies.trailer);
  return (
    <div className="modal">
    {/* overlay is the background gray effect */}
      <div onClick={toggleModal} className="modal_overlay"></div>
      <div className="modal_content center">
        <iframe
        className="lg:w-[960px] lg:h-[540px] md:w-[660px] md:h-[371px] sm:w-[510px] sm:h-[286px] w-[360px] h-[205px]"
          src={trailerLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <button onClick={toggleModal} className="modal_close">
        <CloseIcon />
      </button>
    </div>
  );
};

export default Modal;
