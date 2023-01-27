import { Component } from "react";
import { TabTitle } from "../GeneralFunction";
import { Link } from "react-router-dom";
// import { charData } from "../../database/charData";
import "./KarakterCont.css";
import CardCharComp from "../../component/CardCharComp/CardCharComp";
import axios from "axios";

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

  render() {
    TabTitle("Ninja Bocil | Karakter");

    return (
      <div className="container-karakter">
        <div className="karakter">
          <h1 className="Judul">Karakter</h1>

          <div className="container-card">
            <h2>Fire</h2>
            <div className="karakter-info">
              {this.state.post
                .filter(
                  (post) => post.chakra === "Fire" && post.grade === "SSS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Fire" && post.grade === "SSS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Fire" && post.grade === "SS")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Fire" && post.grade === "S")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Fire" && post.grade === "A")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Fire" && post.grade === "B")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Fire" && post.grade === "D")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Water</h2>
            <div className="karakter-info">
              {this.state.post
                .filter(
                  (post) => post.chakra === "Water" && post.grade === "SSS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Water" && post.grade === "SS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Water" && post.grade === "S")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Water" && post.grade === "A")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Water" && post.grade === "B")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Water" && post.grade === "D")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Wind</h2>
            <div className="karakter-info">
              {this.state.post
                .filter(
                  (post) => post.chakra === "Wind" && post.grade === "SSS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Wind" && post.grade === "SS")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Wind" && post.grade === "S")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Wind" && post.grade === "A")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Wind" && post.grade === "B")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Wind" && post.grade === "D")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Earth</h2>
            <div className="karakter-info">
              {this.state.post
                .filter(
                  (post) => post.chakra === "Earth" && post.grade === "SSS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Earth" && post.grade === "SS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Earth" && post.grade === "S")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Earth" && post.grade === "A")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Earth" && post.grade === "B")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter((post) => post.chakra === "Earth" && post.grade === "D")
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="container-card">
            <h2>Lightning</h2>
            <div className="karakter-info">
              {this.state.post
                .filter(
                  (post) => post.chakra === "Lightning" && post.grade === "SSS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Lightning" && post.grade === "SS"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Lightning" && post.grade === "S"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Lightning" && post.grade === "A"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Lightning" && post.grade === "B"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
              {this.state.post
                .filter(
                  (post) => post.chakra === "Lightning" && post.grade === "D"
                )
                .map((item) => (
                  <Link key={item._id} to={`/detail-char/${item._id}`}>
                    <CardCharComp
                      goDetail={this.handleDetail}
                      key={item._id}
                      nama={item.nama}
                      logo={item.fotohero}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KarakterCont;

/* {charData
                .filter((charData) => charData.chakra === "Fire")
                .map((item) => (
                  <CardCharComp nama={item.nama} logo={item.fotohero} />
                ))} */

/* {
                  this.state.post.map(post => {
                    return <CardCharComp nama={post.nama} logo={post.fotohero} />
                  })
                } */
