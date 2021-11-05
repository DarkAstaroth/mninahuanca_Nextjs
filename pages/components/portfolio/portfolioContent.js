import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioContent = (props) => {
  const url = `/project/${props.id}`;
  return (
    <>
      <div className="item col-md-4">
        <div className="post-category text-line mb- text-violet">
          {props.title}
        </div>
        <h2 className="post-title h3">Ipsum Ultricies Cursus</h2>
        <figure className=" rounded mb-6">
          <Link href={url}>
            <a>
              <Image
                src="/img/photos/rp1.jpg"
                srcSet="/img/photos/rp1@2x.jpg 2x"
                alt=""
                width="610"
                height="480"
              />
            </a>
          </Link>
        </figure>
      </div>
    </>
  );
};

export default PortfolioContent;
