
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title display-5 mb-4 text-center">Welcome to <span className="text-primary">Octofit Tracker</span></h1>
                <p className="card-text text-center mb-4">
                  Track your fitness, join teams, and compete on the leaderboard!
                </p>
                <div className="d-flex justify-content-center mb-4">
                  <a href="#" className="btn btn-primary me-2">Get Started</a>
                  <a href="#" className="btn btn-outline-secondary">Learn More</a>
                </div>
                <h2 className="h4 mt-5 mb-3">Sample Activity Table</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Duration (min)</th>
                        <th>Calories</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2026-02-23</td>
                        <td>Running</td>
                        <td>30</td>
                        <td>350</td>
                        <td>
                          <button className="btn btn-sm btn-info me-2">Edit</button>
                          <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2026-02-22</td>
                        <td>Cycling</td>
                        <td>45</td>
                        <td>500</td>
                        <td>
                          <button className="btn btn-sm btn-info me-2">Edit</button>
                          <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
