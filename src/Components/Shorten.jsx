import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LinkItem = ({ fullLink, shortenedLink }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      <div className="font-bold text-center text-veryDarkViolet md:text-left">
        {fullLink}
      </div>
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <Link to="/" className="font-bold text-cyan">
          {shortenedLink}
        </Link>
        <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
          Copy
        </button>
      </div>
    </div>
  );
};

const Shorten = () => {
  const [link, setLink] = useState([
    {
      fullLink: "https://frontendmentor.io",
      shortenedLink: "https://rei.ink/k4lKyk"
    },
    {
      fullLink: "https://twitter.com/frontendmentor",
      shortenedLink: "https://rel.ink/gxOXp9"
    },
    {
      fullLink: "https://linkedin.com/frontend-mentor",
      shortenedLink: "https://rel.ink/gob3X9"
    }
  ]);

  const handleSubmit = () => {
    var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(linkToBe);
    if (linkToBe.length > 0 && valid === true) {
      setLink([
        ...link,
        { fullLink: linkToBe, shortenedLink: "https://rei.ink/k4lKyk" }
      ]);
    } else if (valid === false) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please input a valid URL!",
        confirmButtonColor: "hsl(180, 66%, 49%)"
      });
    } else if (linkToBe.length < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill the form!",
        confirmButtonColor: "hsl(180, 66%, 49%)"
      });
    }
  };

  const [linkToBe, setLinkToBe] = useState("");

  return (
    <section id="shorten" className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
          <input
            type="text"
            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            placeholder="Shortern a link here"
            id="link-input"
            value={linkToBe}
            onChange={(e) => setLinkToBe(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
          >
            Shorten it!
          </button>
        </form>

        {link.map((item, index) => {
          return (
            <LinkItem
              fullLink={item.fullLink}
              shortenedLink={item.shortenedLink}
              key={item + index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Shorten;
