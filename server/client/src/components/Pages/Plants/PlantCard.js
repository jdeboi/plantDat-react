import React from "react"

class PlantCard extends React.Component {
  render() {
    return(
      <div>

        <div className="card top-buffer">
          <div className="card-header">
            <h2>{this.props.plant.name}</h2>
            <h5 className="latin">{this.props.plant.latin_name}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col text-center">

                <a href={"/api/dig/" + this.props.plant.short_name}>
                  <button className="btn spawn">Plant me!</button>
                </a>
              </div>
            </div>
            <div className="row top-buffer">
              <div className="col-lg-6 mb-3">
                <div className="slideIcon">
                  <img alt={this.props.plant.name} src={"../images/icons/" + this.props.plant.img_path} />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Bio</h5>
                    </div>
                    <div className="card-body">{this.props.plant.bio}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default PlantCard
