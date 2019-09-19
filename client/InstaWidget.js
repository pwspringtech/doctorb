import React from 'react';
import axios from 'axios';
import InstagramEmbed from 'react-instagram-embed';

class Instagram extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    let token = '280979272.1677ed0.d2297fdaf0214eada718c533d964ad06';
    let numPosts = 3;

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
            <InstagramEmbed
              key={post.id}
              url={post.link}
              maxWidth={320}
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
          );
        })}
      </div>
    );
  }
}

export default Instagram;
