import React, { useState } from 'react';

export default function Details() {
  const [responses, setResponses] = useState([
    { id: 1, user: "Alt user", date: "10.12.2003", comment: "Eu nu inteleg ceai scris tradu in romana", rating: 5 },
    { id: 2, user: "Alt user", date: "10.12.2003", comment: "Eu nu inteleg ceai scris tradu in romana", rating: 5 },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [newRating, setNewRating] = useState(0); // New state for the star rating

  // Handle input change for comment
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  // Handle star click for selecting a rating
  const handleStarClick = (rating: number) => {
    setNewRating(rating);
  };

  // Handle key press (Enter)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newMessage.trim()) {
      // Add a new response to the state
      const newResponse = {
        id: responses.length + 1,
        user: "Alt user",
        date: new Date().toLocaleDateString(),
        comment: newMessage,
        rating: newRating,
      };
      setResponses([...responses, newResponse]);
      setNewMessage(''); // Clear the input
      setNewRating(0);   // Reset rating to default
    }
  };

  return (
    <div style={{ backgroundColor: '#CBC5EE', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '50px 0' }}>
      <div style={{ backgroundColor: '#D7D3F1', padding: '30px', borderRadius: '15px', width: '80%', maxWidth: '800px', marginTop: '20px', marginBottom: '20px' }}>
        
        {/* Card for Simple User */}
        <div className="card mb-4 p-3 shadow-sm">
          <div className="d-flex align-items-center">
            {/* Logo for Simple User */}
            <img src="./img/Ellipse 10.svg" alt="Simple User Logo" className="logo-image" />
            <div className="card-body">
              <h2 className="card-title text-primary">Simple user</h2>
              <h3 className="card-subtitle mb-2 text-info">
                Lorem ipsum odor amet, consectetur adipiscing elit.
              </h3>
              <p className="card-text">
                Ut volutpat tristique sodales nascetur orci. Neque erat montes cubilia non accumsan volutpat cursus orci.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="rating-stars">
                  {"★".repeat(5)}
                </div>
                <small className="text-muted">10.12.2003</small> {/* Date is now on the right */}
              </div>
            </div>
          </div>
        </div>

        {/* Input Field */}
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Write your answer"
            value={newMessage}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        {/* Star Rating Input */}
        <div className="mb-3">
          <label>Select Rating: </label>
          <div className="stars-input">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= newRating ? 'selected' : ''}`}
                onClick={() => handleStarClick(star)}
                style={{ cursor: 'pointer' }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Cards for Alt Users */}
        {responses.map((response) => (
          <div key={response.id} className="card mb-3 shadow-sm">
            <div className="d-flex align-items-center">
              {/* Logo for Alt User */}
              <img src="./img/alt-user-logo.svg" alt="Alt User Logo" className="logo-image" />
              <div className="card-body">
                <h5 className="card-title">{response.user}</h5>
                <p className="card-text">{response.comment}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating-stars">
                    {"★".repeat(response.rating)}
                  </div>
                  <small className="text-muted">{response.date}</small> {/* Date is now on the right */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .card-subtitle {
            font-size: 1.2rem;
          }

          .input-group input {
            border-radius: 0.375rem;
            border: 1px solid #ced4da;
          }

          .card {
            background-color: #fff;
            border-radius: 0.75rem;
          }

          .card-body {
            color: #333;
          }

          .card-title {
            color: #555;
          }

          .card .text-info {
            color: #3948ff !important;
          }

          .card .text-primary {
            color: #4b4b9a !important;
          }

          .logo-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
          }

          .rating-stars {
            color: gold;
            font-size: 1.25rem;
          }

          .stars-input {
            display: flex;
          }

          .stars-input .star {
            color: black;
            font-size: 2rem;
            transition: color 0.3s;
          }

          .stars-input .star.selected {
            color: gold;
          }
        `}
      </style>
    </div>
  );
}
