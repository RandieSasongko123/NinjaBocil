import { Component } from "react";
import { TabTitle } from "../GeneralFunction";
// import { charData } from "../../database/charData";
import "./KarakterCont.css";
import CardCharComp from "../../component/CardCharComp/CardCharComp";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



class KarakterCont extends Component {

  state = {
    post: [],
  };

  componentDidMount() {
    axios
      .get("https://publicapininjaheroes.vercel.app/ninja")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  }


  handleDetail = (id) => {
    let navigate = useNavigate();
    this.props.navigate(`/detail-char/${id}`);
  }

  render() {
    TabTitle("Ninja Bocil | Karakter");

    return (
      <div className="container-karakter">
        <div className="karakter">
          <h1 className="Judul">Karakter</h1>

          <div className="container-card">
            <h2>Fire</h2>
            <div className="karakter-info">
              {/* {charData
                .filter((charData) => charData.chakra === "Fire")
                .map((item) => (
                  <CardCharComp nama={item.nama} logo={item.fotohero} />
                ))} */}
              {/* {
                  this.state.post.map(post => {
                    return <CardCharComp nama={post.nama} logo={post.fotohero} />
                  })
                } */}
              {this.state.post
                .filter((post) => post.chakra === "Fire")
                .map((item) => (
                  <CardCharComp goDetail={this.handleDetail}
                  key={item._id} id={item._id} nama={item.nama} logo={item.fotohero}/>
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Water</h2>
            <div className="karakter-info">
              {this.state.post
                .filter((post) => post.chakra === "Water")
                .map((item) => (
                  <CardCharComp key={item._id} id={item._id} nama={item.nama} logo={item.fotohero} />
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Wind</h2>
            <div className="karakter-info">
              {this.state.post
                .filter((post) => post.chakra === "Wind")
                .map((item) => (
                  <CardCharComp key={item._id} id={item._id} nama={item.nama} logo={item.fotohero} />
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Earth</h2>
            <div className="karakter-info">
              {this.state.post
                .filter((post) => post.chakra === "Earth")
                .map((item) => (
                  <CardCharComp key={item._id} id={item._id} nama={item.nama} logo={item.fotohero} />
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Lightning</h2>
            <div className="karakter-info">
              {this.state.post
                .filter((post) => post.chakra === "Lightning")
                .map((item) => (
                  <CardCharComp key={item._id} id={item._id} nama={item.nama} logo={item.fotohero} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KarakterCont;
