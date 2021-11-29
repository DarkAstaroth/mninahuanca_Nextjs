import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioContent = (props) => {
  const url = `/project/${props.id}`;

  return (
    <>
      <div className="item col-md-4">
        <div className="post-category text-line mb- text-violet">
          {props.type}
        </div>
        <h2 className="post-title h3">{props.title}</h2>
        <figure className=" rounded mb-6">
          <Link href={url}>
            <a>
              <img src={props.urlImage} alt="" width="610" height="480" />
            </a>
          </Link>
        </figure>
      </div>
    </>
  );
};

export default PortfolioContent;
