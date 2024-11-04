// Features/Feed/Components/Post.jsx
import { Text } from 'react-native';
import PropTypes from 'prop-types';

function Post({username, body}) {
    return (
        <>
        <Text>
            Author: 
            {username}
        </Text>
        <Text>
            Body: 
            {body}
        </Text>
        </>
    );
}

Post.defaultProps = {
    username: '',
    body: '',
};

Post.propTypes = {
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Post;