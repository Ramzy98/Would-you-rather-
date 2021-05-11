import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import UnvotedOption from "./UnvotedOption";
import VotedOption from "./VotedOption";

class QuestionPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            paddingTop: "1rem",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "45%" }}>
            <Card.Header>
              <h5>{this.props.user.name} asks</h5>
            </Card.Header>{" "}
            <div>
              <div>
                <Image
                  style={{
                    padding: "0.5rem",
                    width: "30%",
                    pointerEvents: "none",
                    bottom: "12%",
                    float: "left",
                  }}
                  size="xs"
                  src={this.props.user.avatarURL}
                  roundedCircle
                />{" "}
                <hr
                  style={{
                    border: "none",
                    borderLeft: "1px solid hsla(200, 10%, 50%,100)",
                    height: "16.4rem",
                    width: "1px",
                    float: "left",
                  }}
                />
              </div>
              <h3 style={{ paddingTop: "1%", paddingLeft: "31%" }}>
                Would you rather
              </h3>{" "}
              {this.props.QInfo.optionOne.votes.includes(
                this.props.authedUser
              ) ? (
                <div>
                  <VotedOption
                    text={this.props.QInfo.optionOne.text}
                    precentage={
                      (this.props.QInfo.optionOne.votes.length /
                        (this.props.QInfo.optionOne.votes.length +
                          this.props.QInfo.optionTwo.votes.length)) *
                      100
                    }
                    authedUser={this.props.authedUser}
                    current={this.props.QInfo.optionOne.votes.length}
                    total={
                      this.props.QInfo.optionOne.votes.length +
                      this.props.QInfo.optionTwo.votes.length
                    }
                  />
                  <UnvotedOption
                    text={this.props.QInfo.optionTwo.text}
                    precentage={
                      (this.props.QInfo.optionTwo.votes.length /
                        (this.props.QInfo.optionOne.votes.length +
                          this.props.QInfo.optionTwo.votes.length)) *
                      100
                    }
                    authedUser={this.props.authedUser}
                    current={this.props.QInfo.optionTwo.votes.length}
                    total={
                      this.props.QInfo.optionOne.votes.length +
                      this.props.QInfo.optionTwo.votes.length
                    }
                    id={this.props.QInfo.id}
                    option={"optionTwo"}
                    question={this.props.QInfo}
                  />
                </div>
              ) : this.props.QInfo.optionTwo.votes.includes(
                  this.props.authedUser
                ) ? (
                <div>
                  <VotedOption
                    text={this.props.QInfo.optionTwo.text}
                    precentage={
                      (this.props.QInfo.optionTwo.votes.length /
                        (this.props.QInfo.optionOne.votes.length +
                          this.props.QInfo.optionTwo.votes.length)) *
                      100
                    }
                    authedUser={this.props.authedUser}
                    current={this.props.QInfo.optionTwo.votes.length}
                    total={
                      this.props.QInfo.optionOne.votes.length +
                      this.props.QInfo.optionTwo.votes.length
                    }
                  />
                  <UnvotedOption
                    text={this.props.QInfo.optionOne.text}
                    precentage={
                      (this.props.QInfo.optionOne.votes.length /
                        (this.props.QInfo.optionOne.votes.length +
                          this.props.QInfo.optionTwo.votes.length)) *
                      100
                    }
                    authedUser={this.props.authedUser}
                    current={this.props.QInfo.optionOne.votes.length}
                    total={
                      this.props.QInfo.optionOne.votes.length +
                      this.props.QInfo.optionTwo.votes.length
                    }
                    id={this.props.QInfo.id}
                    option={"optionOne"}
                    question={this.props.QInfo}
                  />
                </div>
              ) : (
                <div>
                  <UnvotedOption
                    text={this.props.QInfo.optionTwo.text}
                    precentage={
                      (this.props.QInfo.optionTwo.votes.length /
                        (this.props.QInfo.optionOne.votes.length +
                          this.props.QInfo.optionTwo.votes.length)) *
                      100
                    }
                    authedUser={this.props.authedUser}
                    current={this.props.QInfo.optionTwo.votes.length}
                    total={
                      this.props.QInfo.optionOne.votes.length +
                      this.props.QInfo.optionTwo.votes.length
                    }
                    id={this.props.QInfo.id}
                    option={"optionTwo"}
                    question={this.props.QInfo}
                  />
                  <UnvotedOption
                    text={this.props.QInfo.optionOne.text}
                    precentage={
                      (this.props.QInfo.optionOne.votes.length /
                        (this.props.QInfo.optionOne.votes.length +
                          this.props.QInfo.optionTwo.votes.length)) *
                      100
                    }
                    authedUser={this.props.authedUser}
                    current={this.props.QInfo.optionOne.votes.length}
                    total={
                      this.props.QInfo.optionOne.votes.length +
                      this.props.QInfo.optionTwo.votes.length
                    }
                    id={this.props.QInfo.id}
                    option={"optionOne"}
                    question={this.props.QInfo}
                  />
                </div>
              )}
            </div>
          </Card>{" "}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }, props) {
  const { id } = props.match.params;
  return {
    QInfo: questions[id],
    authedUser,
    user: users[questions[id].author],
  };
}
export default connect(mapStateToProps)(QuestionPage);
