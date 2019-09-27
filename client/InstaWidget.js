import React from 'react';
import axios from 'axios';
import InstagramEmbed from 'react-instagram-embed';
import Row from 'react-bootstrap/Row';

class Instagram extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    let token = '280979272.1677ed0.d2297fdaf0214eada718c533d964ad06';
    let numPosts = 4;

    axios
      .get(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
          token +
          '&count=' +
          numPosts
      )
      .then(res => {
        console.log(res.data.data[0]);
        this.setState({ posts: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="instafeed">
        {this.state.posts.map(post => {
          return (
            <Row className="justify-content-center mb-3" key={post.id}>
              <InstagramEmbed
                style={{
                  border: `2px solid #74b4ca`
                }}
                url={post.link}
                maxWidth={350}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {
                  console.log('success!');
                }}
                onAfterRender={() => {}}
                onFailure={() => {
                  console.log('no insta!');
                }}
              />
            </Row>
          );
        })}
      </div>
    );
  }
}

export default Instagram;
