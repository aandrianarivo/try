import React from "react";
import CardPerso from "../Card/CardPerso";
import pot from "../../assets/pot.jpg";

function Artisant() {
  const isForArtisant = true;
  const imageurl = pot;
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, molestiae?";
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="text-center">
        '<h1 className="text-5xl text-grey-200 ">Discover the artisants </h1>
        <p className=" pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
          voluptas iure cum quod quisquam sapiente sit quasi maxime veniam
          perspiciatis, atque repudiandae ducimus maiores placeat delectus id
          nostrum ab.
        </p>
      </div>
      <CardPerso
        isForArtisant={isForArtisant}
        imageurl={imageurl}
        content={content}
      />
      <CardPerso
        isForArtisant={isForArtisant}
        imageurl={imageurl}
        content={content}
      />
    </div>
  );
}

export default Artisant;
