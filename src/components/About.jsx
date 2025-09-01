import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter,FaFacebook } from "react-icons/fa6";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-12 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-800">
        About Movies.in
      </h1>
      <p className="text-xl mb-6 leading-relaxed text-gray-700">
        Welcome to{" "}
        <span className="font-semibold text-indigo-600 underline decoration-indigo-300">
          Movies.in
        </span>
        , your go-to platform for discovering the latest and greatest movies.
        Whether you're a casual viewer or a movie buff, our site offers a
        curated selection of trending films to keep you entertained.
      </p>
      <p className="text-lg mb-6 leading-relaxed text-gray-600">
        Browse through our extensive collection, add your favorite movies to
        your personal watchlist, and stay updated with the newest releases. Our
        dynamic banner showcases trending movies to help you find your next
        favorite film.
      </p>
      <p className="text-lg mb-6 leading-relaxed text-gray-600">
        This project is built with{" "}
        <span className="font-semibold text-blue-600">React</span> and{" "}
        <span className="font-semibold text-green-600">Tailwind CSS</span>,
        leveraging The Movie Database (TMDb) API to fetch up-to-date movie
        information.
      </p>
      <p className="text-lg mb-6 leading-relaxed text-gray-600">
        We hope you enjoy exploring Movies.in and find the perfect movie for
        your next movie night!
      </p>
      <div className="mt-12 text-center text-sm text-gray-500 font-semibold">
        &copy; {new Date().getFullYear()} Movies.in. All rights reserved.
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center mt-10 text-2xl gap-8">
          <IoLogoInstagram />
          <FaFacebook />
          <FaSquareXTwitter />
        </div>
      </div>
    </div>
  );
};

export default About;
