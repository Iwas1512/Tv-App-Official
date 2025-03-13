import React, { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewform/ReviewForm";

const Reviews = ({getMovieData, movie, reviews = [], setReviews}) => {
    const revText = useRef();
    let Params = useParams();
    const movieId = Params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [movieId, getMovieData]);

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        
        // Validate input
        if (!rev.value.trim()) {
            alert("Review cannot be empty");
            return;
        }

        try {
            // Send review to backend
            const response = await api.post("/api/v1/reviews", {
                reviewBody: rev.value,
                imdbId: movie.imdbId, // Use movie.imdbId
                movieId: movieId
            });

            // Add the new review to local state
            const updatedReviews = [...reviews, {body: rev.value}];
            
            // Clear input
            rev.value = "";

            // Update reviews state
            setReviews(updatedReviews);

        } catch(err) {
            console.error("Error submitting review:", err);
            alert("Failed to submit review. Please try again.");
        }
    };

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="Movie Poster"/>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ReviewForm 
                                handleSubmit={addReview} 
                                revText={revText} 
                                labelText="Write a Review?"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><hr/></Col>
                    </Row>
                    
                    {reviews.map((r, index) => (
                        <React.Fragment key={index}>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col><hr/></Col>
                            </Row>
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col><hr/></Col>
            </Row>
        </Container>
    );
};

export default Reviews;