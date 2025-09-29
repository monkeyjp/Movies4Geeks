import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CarouselComp } from "../component/carouselComp";
import { PosterCarousel } from "../component/posterCarousel";
import { Navbar } from "../component/navbar"
import { Reviews } from "../component/reviews";
import "../../styles/addReviewModal.css"



export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
		<div className="text-center container">

			<CarouselComp />

			<div id="modal-root"></div>

			<PosterCarousel view="topRated" title="Top Rated" />
			<PosterCarousel view="Action" title="Action" />
			<PosterCarousel view="Comedy" title="Comedy" />
			<PosterCarousel view="Horror" title="Horror" />
			{/* <p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<Reviews />
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
